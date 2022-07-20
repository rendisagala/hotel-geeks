import mongoose from "mongoose";

const Hotel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    directions: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    tollfree: {
      type: String,
      required: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
    },
    fax: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      default: null,
    },
    hours: {
      type: String,
      required: true,
      default: null,
    },
    checkin: {
      type: String,
      required: true,
      default: null,
    },
    checkout: {
      type: String,
      required: true,
      default: null,
    },
    image: {
      type: String,
      required: true,
      default: null,
    },
    price: {
      type: String,
      required: true,
      default: null,
    },
    content: {
      type: String,
      required: true,
    },
    geo: {
      lat: 47.6869,
      lon: 17.65468,
    },
    activity: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Hotel", Hotel);
