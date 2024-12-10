import express from 'express';
import UserRouter from "./routes/users"

export function createApp(){

    const app=express();
app.use('/api/users',UserRouter);
return app;
}