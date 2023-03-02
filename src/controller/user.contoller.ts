import prisma from "../config/db";
import { Request, Response } from "express";




export const Regist = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      await prisma.user.create({
        data: user,
      });
      res.json(user);
    } catch (err) {
      console.log(err);
      res.json({ error: "not created" });
    }
  };
  
  export const Log = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      await prisma.user.findFirst({
        where: {
          username,
          password,
        },
      })
      res.json(`welcome ${username}`);
      
 
      
    } catch (err) {
      console.log(err);
      res.json({ error: "not log" });
    }
  };




  export const FindAllUser = async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
     res.json({massage:users});
     console.log(users);
     

    } catch (err) {
      console.log(err);
      res.json({ error: "not found" });
    }
  };
  