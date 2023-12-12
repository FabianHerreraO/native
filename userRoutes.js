import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.post("/user/new", userController.createUser);
router.get("/users", userController.getUsers);
//router.post("/user/login", userController.logingUser);
router.delete("/user/delete/:idUser", userController.deleteUser);

export { router };
