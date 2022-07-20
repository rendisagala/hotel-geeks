import User from "../models/user.js";
import { auth } from "../middleware/auth.js";

export const bookingController = {
  book: [
    // auth.verifyToken,
    async (req, res) => {
      const user = await User.findOne({ username: "admin" });
      console.log(user);
    },
  ],
};
