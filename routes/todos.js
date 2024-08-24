import express from "express";
import { getTodo, getTodos, getRandomTodo } from "../controllers/todos.js"
const router = express.Router();

router.get('/', getTodos);
router.get('/random', getRandomTodo);

router.get('/:id', getTodo); 



export default router;