import { Router } from "express";
import { createUser, getUser, getUserById } from "../handlers/users";

const router=Router();
router.get("/",getUser);
router.get("/:id",getUserById);
router.post("/",createUser);
export default router;