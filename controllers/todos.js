import { todos } from "../mock-data.js";
export const getTodos =  (req, res)=>{
    res.send(todos);
}

export const getTodo = (req, res)=>{
    const { id } = req.params;
    let ret = todos.find((todo)=>todo.id == id );
    if(ret) res.send(ret);
    else res.send(`Todo with id "${id}" not found!`);
};

// app.get("/todos", 
    
export const getRandomTodo = (req, res) => {
    const randomTodos = [];
    for (let i = 0; i < 5; i++) {
      if (Math.random() > 0.5) {
        randomTodos.push(todos[i]);
      }
    }
    res.json({
      todos: randomTodos,
    })
  };