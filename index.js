import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";
import todosRoute from "./routes/todos.js"
import { getRandomNumber } from "./utils.js";
const app = express();

const PORT = 5500;

app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log(`working on port http://localhost:${PORT}`);
});
app.use("/users", usersRoute);
app.use("/todos", todosRoute);

app.get('/', (req, res)=>{
    res.send("working in homepage");
});


app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
  });
  
  app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
      total: total,
      interest: interest,
    })
  
  });
  

  app.get("/notifications", (req, res) => {
    res.json({
      network: getRandomNumber(10),
      jobs: getRandomNumber(10),
      messaging: getRandomNumber(10),
      notifications: getRandomNumber(10)
    })
  
  })
  