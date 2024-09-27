import mongoose from "mongoose";

export const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    openTime: {
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    },
    member: {
        type: Number,
        required: true
    },
    places: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
        required: true
    }],
    bookedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    additionalTourInfo: {
        itinerary: [{
            type: String
        }],
        inclusions: [{
            type: String
        }],
        exclusions: [{
            type: String
        }]
    },
    additionalPlaceInfo: {
        type: Map,
        of: String
    }
}, { timestamps: true });

export const Tour = mongoose.models.Tour || mongoose.model("Tour", tourSchema);
