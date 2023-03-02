import { User } from "@prisma/client";
import prisma from "../config/db";
import { Request, Response } from "express";


export const Newblog = async (req: Request, res: Response) => {
    try {
      const blog = req.body;
      await prisma.blog.create({
        data: blog,
      });
      res.json(blog);
    } catch (err) {
      console.log(err);
      res.json({ error: "not created" });
    }
  };

  export const Getallblogs = async (req: Request, res: Response) => {
    try {
const blogs = await prisma.blog.findMany({
})

res.json(blogs);
}

  catch(err){

    
    console.log(err);
    res.json({ error: "not found" });

  }}


  export const getUsers = async (req: Request, res: Response) => {
const id=req.params ;
const user_id=await prisma.blog.findMany(
    {
        where:{
user_id:id
        
        },

        select:{
title:true,
creatData:true,
/*
user:{
    select:{
        id:true,
        username:true,
        email:true,
    }
}*/

        },
       
  
    
   });
  


}


export const deleteAll = async (req: Request, res: Response) => {
const {id}=req.params
await prisma.blog.deleteMany({
where:{
user_id:id
}

})
res.json({
message: "deleted all blogs"

})


}

export const deleteone = async (req: Request, res: Response) => {
    try {
        const  {id } = req.params
     
        let deleteO = await prisma.blog.delete({
            where: {
                id,
            },
          
     
        })
    res.json("The Blog has been deleted ");
} catch (error) {
    res.json({error})

}
    
    
    }
 

export const update = async (req: Request, res: Response) => {
    const blog=req.params
  let blogUPdate =await prisma.blog.update({
        where:{
            id:blog.id
            },
            data:req.body               
            
    
    })
    res.json("The Blog has been updated "+blogUPdate);

    
    }
     