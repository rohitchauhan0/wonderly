import { connectWithDb } from "@/config/Database";
import { Place } from "@/model/place";
import { Tour } from "@/model/tour-model";
import { NextResponse } from "next/server";


connectWithDb();
export const POST = async (req) => {
    try {
        const { id } = await req.json();
        const place = await Tour.findById(id);
        return NextResponse.json({success: true, data: place})

    } catch (error) {
        console.log(error)
        return NextResponse.json({success: false, error: error})
    }
}