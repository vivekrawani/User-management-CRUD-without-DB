import express from "express";
import { getUsers, createUser, getUser, deleteuser, updateUser } from "../controllers/users.js";
const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:username', getUser); 

router.patch("/:username", updateUser);

router.delete("/:username",  deleteuser);




export default router;