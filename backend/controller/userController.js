import User from "../models/user.js";
import bcrypt from "bcrypt";

export const userController = {
  getAllUser: [
    async (req, res) => {
      try {
        const allUser = await User.find();
        res.json(allUser);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    },
  ],
  getUserById: [
    async (req, res) => {
      try {
        const userById = await User.findById(req.params.id);
        res.json(userById);
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    },
  ],
  addUser: [
    async (req, res) => {
      try {
        //   check if user exist
        const usernameExist = await User.find({ username: req.body.username });
        const emailExist = await User.find({ email: req.body.email });
        if (usernameExist !== null || emailExist !== null) {
          res.status(500).json({
            message: `username or email exist`,
          });
        } else {
          req.body.password = await bcrypt.hash(req.body.password, 10);
          const saveUser = await new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            fullname: req.body.fullname,
            img: req.body.img,
            phone: req.body.phone,
            country: req.body.country,
            booking: { hotel_id: [], price: [] },
          }).save();
          res.status(201).json(saveUser);
        }
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    },
  ],
  updateUser: [
    async (req, res) => {
      try {
        const updateUser = await User.updateOne(
          { _id: req.params.id },
          { $set: req.body }
        );
        res.status(201).json(updateUser);
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    },
  ],
  deleteUser: [
    async (req, res) => {
      try {
        const deleteUser = await User.deleteOne({ _id: req.params.id });
        res.status(201).json(deleteUser);
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
    },
  ],
};
