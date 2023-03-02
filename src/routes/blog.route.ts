import { Getallblogs, Newblog, deleteAll, deleteone, update } from "../controller/blog.contoller";

import express from "express";
let router = express.Router();





router.post("/", Newblog);
router.get("/", Getallblogs);
router.delete( "/", deleteAll)
router.put("/:id",update);
router.delete("/:id",deleteone);

export default router;