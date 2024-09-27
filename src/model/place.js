import mongoose from "mongoose";                


const placeSchema = new mongoose.Schema({
    name: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    description: String,
    openTime: String,
    closeTime: String,
    mapLink: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    rating: Number,
    byAir:String,
    buBus:String,
    byTrain:String,
    byRoad:String,
 
})

export const Place = mongoose.models.Place || mongoose.model("Place", placeSchema)