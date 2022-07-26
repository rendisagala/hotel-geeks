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
      default: 1,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: String,
      required: true,
      default: "0",
    },
    price: {
      type: String,
      required: true,
    },

    facilities: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    food_and_drink: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    hotel_services: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    in_room_facilities: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    business_facilities: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    nearby_facilities: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    public_facilities: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    general: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    things_to_do: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    accessibility: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    connectivity: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    transportation: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    kids_and_pets: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    sports_and_recreations: [
      {
        type: String,
        required: true,
        default: null,
      },
    ],
    shuttle_service: [
      {
        type: String,
        required: true,
        default: null,
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
