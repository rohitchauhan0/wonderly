"use client";
import React, { useState, useEffect, useRef } from "react";
import InputEmoji from "react-input-emoji";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = ({ setModal }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [chatHistory, setChatHistory] = useState([]); // Chat history state
  const [botTyping, setBotTyping] = useState(""); // Bot typing chunk
  const [fullResponse, setFullResponse] = useState(""); // Store the full response text
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  // Ref to track the chat container for auto-scroll
  const chatContainerRef = useRef(null);

  const handleTyping = (e) => {
    setText(e);
  };

  const handleOnEnter = async () => {
    if (!text.trim()) return; // Prevent empty submission

    setLoading(true);

    try {
      // Show user query in chat history
      setChatHistory((prev) => [...prev, { type: "user", message: text }]);

      // Call the Google Gemini API
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: text }],
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const msg = text;

      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const fullTextResponse = await response.text();

      setFullResponse(fullTextResponse); // Store the full response

      // Split the response into chunks (you can adjust chunk size here)
      const chunks = fullTextResponse.match(/.{1,20}/g); // Split by 20 characters

      // Show response chunk by chunk
      let chunkIndex = 0;
      const chunkInterval = setInterval(() => {
        if (chunkIndex < chunks.length) {
          setBotTyping((prev) => prev + chunks[chunkIndex]);
          chunkIndex++;
        } else {
          clearInterval(chunkInterval);

          // Once all chunks are shown, move the message to chatHistory
          setChatHistory((prev) => [
            ...prev,
            { type: "bot", message: fullTextResponse },
          ]);
          setBotTyping(""); // Reset bot typing
        }
      }, 100); // Adjust the delay to control typing speed

      setLoading(false);
    } catch (error) {
      setChatHistory((prev) => [...prev, { type: "bot", message: "Error: Could not fetch data." }]);
      console.log("Error:", error.response ? error.response.data : error.message);
      setLoading(false);
    }

    setText(""); // Clear the input field
  };

  // Auto-scroll to bottom when chatHistory or botTyping updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, botTyping]);

  return (
    <div className="fixed top-0 left-0 min-h-screen bg-black/50 backdrop-blur-sm w-screen flex items-center justify-center">
      <div className="h-[600px] w-[500px] bg-slate-50 rounded-xl overflow-y-auto p-3 flex flex-col justify-between">
        <div className="flex items-center justify-end mb-3 ">
          <button
            onClick={() => setModal(false)}
            className="text-xl font-bold text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </div>
        {/* Chat history container */}
        <div ref={chatContainerRef} className="w-full h-full overflow-y-scroll">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`mb-3 ${chat.type === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-2 rounded-lg ${
                  chat.type === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                }`}
              >
                {chat.message}
              </div>
            </div>
          ))}

          {/* Bot typing in chunks */}
          {botTyping && (
            <div className="text-left mb-3">
              <div className="inline-block p-2 rounded-lg bg-gray-300 text-black">
                {botTyping}
              </div>
            </div>
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="text-center my-3 flex flex-col items-center">
             <video src="/loading.mp4" autoPlay loop className="w-20 h-20 rounded-full" />
              <p>Bot is thinking...</p>
            </div>
          )}
        </div>

        {/* Input field */}
        <div className="w-full">
          <InputEmoji
            value={text}
            onChange={handleTyping}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder={loading ? "Please wait..." : "Type a message"}
            disabled={loading} // Disable input while loading
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
