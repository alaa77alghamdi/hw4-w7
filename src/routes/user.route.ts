import {FindAllUser, Log, Regist} from "../controller/user.contoller";
import express from "express";
let router = express.Router();





router.post("/", Regist);
router.get("/", FindAllUser);
router.get( "/user", Log)




export default router;