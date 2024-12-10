import { Request, Response } from "express-serve-static-core";
import { CreateUserDtos } from "../dtos/CreateUser.dto";
import { createUserQueryParams } from "../types/query-params";
import {user} from "../types/response";
import {mockusers} from "../_mocks_/mockUsers";


export function getUser(request:Request,response:Response){


 //response.send([mockusers]);
 response.send([]);
}

export function getUserById(request:Request,response:Response){
     const users=request.params.id;



    response.send({});
}

export function createUser(request:Request<{ },{},CreateUserDtos,createUserQueryParams>,response:Response<user>){

response.status(200).send({
id:1,
username:"ranga"
,
email:"ranga@gmail.com"
});
}