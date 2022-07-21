import express from "express";
import { userController } from "../controller/userController.js";
import { loginController } from "../controller/loginController.js";
import { bookingController } from "../controller/bookingController.js";
import { hotelController } from "../controller/hotelController.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    Documentation: `https://github.com/rendisagala/hotel-geeks`,
  });
});

router.route("/user").get(userController.getAllUser);
router.route("/user").post(userController.addUser);

router.route("/hotel").get(hotelController.getAllHotel);
router.route("/hotel").post(hotelController.addHotel);

router.route("/user/:id").get(userController.getUserById);
router.route("/user:id").put(userController.updateUser);
router.route("/user/:id").delete(userController.deleteUser);

router.route("/hotel/:id").get(hotelController.getHotelById);
router.route("/hotel/:id").put(hotelController.updateHotel);
router.route("/hotel/:id").delete(hotelController.deleteHotel);

router.route("/login").post(loginController.login);

router.route("/book/:id").post(bookingController.book);
router.route("/book/:id").delete(bookingController.delete);

export default router;
