import User from "../models/user.js";
import Hotel from "../models/hotel.js";
import { auth } from "../middleware/auth.js";

export const bookingController = {
  book: [
    // auth.verifyToken,
    async (req, res) => {
      req.username = "admin";
      const user = await User.findOne({ username: req.username });
      try {
        await User.findOneAndUpdate(
          { username: req.username },
          {
            $addToSet: {
              booking: req.body.hotel_id,
            },
          }
        );
        res.status(200).json({ message: `Hotel Booked` });
      } catch (error) {
        res.status(417).json({ message: `Fail to Book Hotel` });
      }
    },
  ],
};
