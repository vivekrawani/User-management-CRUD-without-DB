import { users } from "../mock-data.js";
export const getUsers = (req, res)=>{
    res.send(users);
};

export const createUser =  (req, res)=>{
    const user = req.body;
    users.push(user);
    res.send(`user with username: ${user.username} added to database`);
};

export function updateUser(req, res) {
    const { username } = req.params;
    const {name , password, phone} = req.body;
    const user = users.find((user)=> user.username === username);

    if(name) user.name = name;
    if(password) user.password = password;
    if(phone) user.phone = phone;

    res.send(`user with username : ${username} has been updated.`);
    
}

export const getUser = (req, res)=>{
    const { username } = req.params;
    let foundUser = users.find((user)=>user.username == username );
    if(foundUser) res.send(foundUser);
    else res.send(`User with username "${username}" not found!`);
};

export function deleteuser(req, res) {
    const { username } = req.params;
    users = users.filter((user)=> user.username !== username);
    res.send(`user with username ${username} deleted from database`);
    
} 