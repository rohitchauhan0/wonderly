import { Tour } from "@/model/tour-model";
import { User } from "@/model/user";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { tourId, name, email, phone } = await req.json();
        const response = await User.create({ tourId, name, email, phone })
        await Tour.findByIdAndUpdate(tourId, { $push: { bookedBy: response._id } })
        return NextResponse.json({success: true, data: response})
    } catch (error) {
        return NextResponse.json({success: false, error: error})
    }
}