import User from "../models/user.js";

export const bookingController = {
  book: [
    async (req, res) => {
      try {
        await User.findOneAndUpdate(
          { _id: req.params.id },
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
  delete: [
    async (req, res) => {
      try {
        await User.findOneAndUpdate(
          {
            _id: req.params.id,
          },
          {
            $pull: {
              booking: req.body.hotel_id,
            },
          }
        );
        res.status(200).json({ message: `Hotel Deleted` });
      } catch (error) {
        res.status(417).json({ message: `Fail to Delete Hotel` });
      }
    },
  ],
};
