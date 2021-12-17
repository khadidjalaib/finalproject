 
 import express from 'express';
 import mongoose from 'mongoose';
 
 import serviceMessage from "../models/serviceMessage.js";

 const router = express.Router();
 export const getServices= async (req,res)=>{
     try {
         const serviceMessages = await serviceMessage.find();
         console.log(serviceMessages);
         res.status(200).json(serviceMessages);
     } catch (error) {
         res.status(404).json({message: error.message})
     }
  
}


export const createService= async (req,res)=>{
   const service=req.body;
   const newService= new serviceMessage(service)
     try {
         await  newService.save();
         res.status(201).json(newService);
     } catch (error) {
         res.status(409).json({message:error.message})
     }
}

export default router