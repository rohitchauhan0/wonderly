
import * as crypto from "crypto";
import { NextResponse } from "next/server";
import { connectWithDb } from "@/config/Database";
import { User } from "@/model/user";
import { Tour } from "@/model/tour-model";

connectWithDb();

export const POST = async (req) => {
  try {
    const requestData = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      phone,
      amount,
      tourId
    } = requestData;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({
        success: false,
        message: "Payment Failed: Incomplete data",
      });
    }

    const expectedSignature = generateExpectedSignature(
      razorpay_order_id,
      razorpay_payment_id
    );

    if (expectedSignature === razorpay_signature) {
      await enrolledUser(
        razorpay_payment_id,
        name,
        email,
        phone,
        amount,
        tourId
      );

      return NextResponse.json({
        success: true,
        message: "Payment verified",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Payment Failed: Invalid signature",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Payment Failed: Internal Server Error",
    });
  }
};

const generateExpectedSignature = (order_id, payment_id) => {
  const body = `${order_id}|${payment_id}`;
  return crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");
};

const enrolledUser = async (
  razorpay_payment_id,
  name,
  email,
  phone,
  amount,
  tourId

) => {
  try {
 const response = await User.create({ tourId, name, email, phone })
        await Tour.findByIdAndUpdate(tourId, { $push: { bookedBy: response._id } })
        return NextResponse.json({success: true, data: response})

     

   
  } catch (error) {
    console.log(error);
    throw new Error("Donation Failed");
  }
};


