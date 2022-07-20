import mongoose from "mongoose";

const Hotel = mongoose.Schema(
  {
    hotel: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    facilities: [
      {
        type: String,
        required: true,
      },
    ],
    food_and_drink: [
      {
        type: String,
        required: true,
      },
    ],
    hotel_services: [
      {
        type: String,
        required: true,
      },
    ],
    in_room_facilities: [
      {
        type: String,
        required: true,
      },
    ],
    business_facilities: [
      {
        type: String,
        required: true,
      },
    ],
    nearby_facilities: [
      {
        type: String,
        required: true,
      },
    ],
    public_facilities: [
      {
        type: String,
        required: true,
      },
    ],
    general: [
      {
        type: String,
        required: true,
      },
    ],
    things_to_do: [
      {
        type: String,
        required: true,
      },
    ],
    accessibility: [
      {
        type: String,
        required: true,
      },
    ],
    connectivity: [
      {
        type: String,
        required: true,
      },
    ],
    transportation: [
      {
        type: String,
        required: true,
      },
    ],
    kids_and_pets: [
      {
        type: String,
        required: true,
      },
    ],
    sports_and_recreations: [
      {
        type: String,
        required: true,
      },
    ],
    shuttle_service: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Hotel", Hotel);
