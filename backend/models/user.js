import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    booking: {
      hotel_id: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("User", User);
