import express, { Request, Response } from 'express';
import UserRouter from './routes/users';
import { createApp } from './createApp';
const app=createApp();
const port=3001;
app.listen(port,()=>{

    console.log(`running on port ${port}`);
});



