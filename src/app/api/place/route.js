
import { connectWithDb } from "@/config/Database";
import { Place } from "@/model/place";
import { NextResponse } from "next/server";


connectWithDb()
export const POST = async (req) => {
    try {
        const { name, image1, image2, image3, image4, image5, image6, description, openTime, closeTime, mapLink, address, city, state, country, zipCode, rating, byAir,  byTrain, byRoad } = await req.json();


        // Create a new tour instance
        const newPlace = new Place({
            name,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            description,
            openTime,
            closeTime,
            mapLink,
            address,
            city,
            state,
            country,
            zipCode,
            rating,
            byAir,
            byTrain,
            byRoad
        });

        // Save the new tour to the database
        await newPlace.save();
        return NextResponse.json({success: true, data: newPlace})

    } catch (error) {
        return NextResponse.json({success: false, error: error})
    }

}


export const GET = async () => {
    try {
        const places = await Place.find();
        return NextResponse.json({success: true, data: places})
    } catch (error) {
        return NextResponse.json({success: false, error: error})
    }
}
