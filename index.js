import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";

const app = express();

const PORT = 5500;

app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log(`working on port http://localhost:${PORT}`);
});
app.use("/users", usersRoute);


app.get('/', (req, res)=>{
    res.send("working in homepage");
});
