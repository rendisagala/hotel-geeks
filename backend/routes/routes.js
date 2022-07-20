import express from "express";
import { userController } from "../controller/userController.js";
import { loginController } from "../controller/loginController.js";
import { bookingController } from "../controller/bookingController.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    Documentation: `https://github.com/rendisagala/hotel-geeks`,
  });
});

router.route("/user").get(userController.getAllUser);
router.route("/user/:id").get(userController.getUserById);
router.route("/user").post(userController.addUser);
router.route("/user").put(userController.updateUser);
router.route("/user/:id").delete(userController.deleteUser);
router.route("/login").post(loginController.login);
router.route("/book").post(bookingController.book);

export default router;
