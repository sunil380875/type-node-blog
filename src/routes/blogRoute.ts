import express, { Router } from "express";
import {
  getAllBlog,
  postBlog,
  updateBlogs,
  deleteBlog,
  getaBlog,
} from "../controllers/blogController";

const router: Router = express.Router();

router.get("/getallblog", getAllBlog).post("/postablog", postBlog);

router.get("getablog/:id", getaBlog);

router
  .patch("/updateblog/:id", updateBlogs)
  .delete("/deleteblog/:id", deleteBlog);

export = router;