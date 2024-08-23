import express from "express";
import * as postController from "../controller/postController.js";

const router = express.Router();
router.get("/list", postController.listPosts);
router.post("/add", postController.createPost);
router.delete("/delete/:id", postController.deletePost);
router.get("/detail/:id", postController.getPostDetails);
router.get("/edit/:id", postController.getEditPost);
router.get("/edit/:id", postController.updatePost);

export default router;
