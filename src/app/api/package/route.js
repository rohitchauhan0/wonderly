import { connectWithDb } from "@/config/Database";
import { Tour } from "@/model/tour-model";
import { NextResponse } from "next/server";


connectWithDb()
export const POST = async (req) => {
    try {
        const { 
            name, 
            image, 
            description, 
            price, 
            openTime, 
            closeTime, 
            member, 
            places, 
            additionalTourInfo, 
            additionalPlaceInfo 
        } = await req.json();

        // Create a new tour instance
        const newTour = new Tour({
            name,
            image,
            description,
            price,
            openTime,
            closeTime,
            member,
            places,  // Ensure this is an array of valid ObjectId strings
            additionalTourInfo,
            additionalPlaceInfo // Ensure this is an array of strings
        });

        // Save the new tour to the database
        await newTour.save();

        return NextResponse.json({ success: true, data: newTour });

    } catch (error) {
        console.error(error); // Log error for debugging
        return NextResponse.json({ success: false, error: error.message });
    }
};

export const GET = async () => {
    try {
        const tours = await Tour.find().sort({ price: -1 });
        return NextResponse.json({success: true, data: tours})
    } catch (error) {
        return NextResponse.json({success: false, error: error})
    }
}