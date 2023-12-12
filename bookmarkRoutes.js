import express from "express";
import * as bookmarkController from "../controllers/bookmarkController.js";

const router = express.Router();

router.post("/api/bookmark/new", bookmarkController.createBookmark);
router.get("/api/bookmarks", bookmarkController.getBookmarks);
router.delete("/api/bookmark/delete/:idBookmark", bookmarkController.deleteBookmark);
//router.get("/api/bookmarks/:idUser")


export { router };
