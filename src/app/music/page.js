"use client";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft, FaPause, FaPlay, FaRegHeart, FaMusic } from "react-icons/fa";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import Icons from "@/components/Icons"; // Adjust this import based on your actual component path
import Image from "next/image";
import { SONGS } from "@/data/Songs"; // Adjust this import based on your actual data path
import Navbar from "@/components/Navbar";

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(SONGS[0].image);
  const [currentSongName, setCurrentSongName] = useState("song1");
  const audioRef = useRef(null);
  const [songDuration, setSongDuration] = useState(0);
  const [songTime, setSongTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlayPause = (selectedSong) => {
    if (selectedSong.song === currentTrack && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrack(selectedSong.song);
      setIsPlaying(true);
      setCurrentImage(selectedSong.image);
      setCurrentSongName(selectedSong.title);
      setCurrentIndex(selectedSong.id);
    }
  };

  useEffect(() => {
    const songHandlePlayPause = async () => {
      try {
        await (isPlaying ? audioRef?.current?.play() : audioRef?.current?.pause());
      } catch (error) {
        console.log(error);
      }
    };
    songHandlePlayPause();
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    const handleSongDuration = () => {
      setSongDuration(Math.floor(audioRef?.current?.duration));
    };
    const handleSongTime = () => {
      setSongTime(Math.floor(audioRef?.current?.currentTime));
    };

    audioRef?.current?.addEventListener("loadedmetadata", handleSongDuration);
    audioRef?.current?.addEventListener("timeupdate", handleSongTime);
    return () => {
      audioRef?.current?.removeEventListener("loadedmetadata", handleSongDuration);
      audioRef?.current?.removeEventListener("timeupdate", handleSongTime);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minute = Math.floor(timeInSeconds / 60);
    const second = Math.floor(timeInSeconds % 60);
    return `${minute}:${second < 10 ? "0" : ""}${second}`;
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setSongTime(newTime);
  };

  const handlePlayNext = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= SONGS.length) newIndex = 0; // Loop back to first song if at end
    setSongByIndex(newIndex);
  };

  const handlePlayPrev = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = SONGS.length - 1; // Loop to last song if at beginning
    setSongByIndex(newIndex);
  };

  const setSongByIndex = (index) => {
    const newSong = SONGS[index].song;
    const newSongName = SONGS[index].title;
    const newSongImage = SONGS[index].image;
    setCurrentTrack(newSong);
    setCurrentSongName(newSongName);
    setCurrentImage(newSongImage);
    setCurrentIndex(index);
  };

  return (
 <>
 <Navbar />
    <div className="w-screen h-full lg:h-screen  bg-black flex items-center justify-center lg:py-0 py-10">
      <div className="w-full lg:w-[60%] h-[80%] px-6 lg:flex-row flex-col flex lg:justify-between items-center justify-center">
        {/* Left section */}
        <div className="w-[100%] lg:w-[40%] lg:h-full h-[500px] bg2 rounded-2xl flex items-center justify-between flex-col -mt-8 p-6">
          <div className="w-full flex items-center justify-between text-white">
            <Icons IconName={FaArrowLeft} />
            <p>Playing music...</p>
            <Icons IconName={GiHamburgerMenu} />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              src={currentImage}
              alt=""
              width={192}
              height={192}
              className="rounded-full object-cover shadowWhite icon-bg animate-spin h-60 w-60"
            />
            <p className="text-white text-xl">{currentSongName}</p>
          </div>

          
          <div>
            <div className="w-full flex justify-between px-4">
              <p className="text-white">{formatTime(songTime)}</p>
              <p className="text-white">{formatTime(songDuration)}</p>
            </div>
            <input
              type="range"
              className="w-80 custom-range"
              onChange={handleTimeChange}
              style={{
                background: `linear-gradient(to right, #eb9722 ${((songTime / songDuration) * 100)}%, gray 0)`,
              }}
              value={songTime}
              max={songDuration}
            />
          </div>
          <div className="flex gap-5">
            <div className="text-2xl icon-bg flex items-center justify-center h-fit p-4 bg text-white cursor-pointer rounded-full hover:text-yellow-500">
              <TbPlayerTrackPrevFilled onClick={handlePlayPrev} />
            </div>
            <div className="icon-bg shadowWhite2 p-4 px-5 text-2xl text-yellow-500 cursor-pointer rounded-full">
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <div className="text-2xl icon-bg flex items-center justify-center h-fit p-4 text-white bg cursor-pointer rounded-full hover:text-yellow-500">
              <TbPlayerTrackNextFilled onClick={handlePlayNext} />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-[100%] lg:w-[40%] lg:h-full bg2 rounded-2xl mt-8 pt-8 px-3 flex flex-col gap-10">
          <div className="w-full flex justify-between items-center">
            <Icons IconName={FaRegHeart} />
            <Image
              src={currentImage}
              alt=""
              width={192}
              height={192}
              className="rounded-full object-cover shadowWhite icon-bg animate-spin h-20  w-20"
            />
            <Icons IconName={FaMusic} />
          </div>
          <div className="flex flex-col lg:h-full h-[300px] gap-5 overflow-auto container lg:pb-10 pb-20">
            <audio ref={audioRef} src={currentTrack} />
            {SONGS.map((data) => (
              <div
                className={`${
                  currentTrack === data.song
                    ? "w-full flex justify-between items-center p-2 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full"
                    : "w-full flex justify-between items-center p-2 shadowWhite rounded-full"
                }`}
                key={data.id}
              >
                <div>
                  <p className="text-white">{data.title}</p>
                </div>
                <button onClick={() => handlePlayPause(data)}>
                  {currentTrack === data.song && isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
 </>
  );
};

export default App;
