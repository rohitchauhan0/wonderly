"use client"
import { apiconnector } from "@/config/Apiconnector";
import toast from "react-hot-toast";

const razorpayKey = "rzp_test_J9qWWpU1MqEsfV"



const loadscript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export async function createPayment({
  name, email,  phone, amount, tourId}) {
    console.log(name, email, phone, amount, tourId)


  const toastId = toast.loading("Please wait");
  try {
    const res = await loadscript(
      `https://checkout.razorpay.com/v1/checkout.js`
    );
    if (!res) {
      toast.error("Razorpay SDk failed to load");
      return;
    }

    const paymentResponse = await apiconnector(
      "POST",
      "/api/payment/createInstance",
      { name, email, phone, amount }
    );
    if (!paymentResponse.data.success) {
      throw new Error(paymentResponse.data.message);
    }

    const options = {
      key: razorpayKey,
      currency: paymentResponse.data.message.currency,
      amount: `${paymentResponse.data.message.amount}`,
      order_id: paymentResponse.data.message.id,
      name: "Wonderly",
      description: "Thank you for booking with us",
      prefill: {
        name: `${name}`,
      },
      handler: function (response) {
        verifyPayment({
          ...response,
          name,
          email,
          phone,
          amount,
          tourId

        });
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("Payment Failed", function (response) {
      toast.error("Oops, Payment failed");
    });
  } catch (error) {
    console.log("PAYMENT API ERROR.....", error);
    toast.error("Could not make payment");
  }
  toast.dismiss(toastId);
}

async function verifyPayment(bodydata) {
  const toastId = toast.loading("Verify payment");
  try {
    const response = await apiconnector("POST", "/api/payment/verifyorder", bodydata);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Thank you for your payment");
    toast.dismiss(toastId);
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not verify Payment");
  }
  toast.dismiss(toastId);
}
