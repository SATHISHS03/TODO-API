
import { v4 as uuidv4 } from 'uuid';
let users =[
   
]
export const displayusers = (req,res)=>{
    res.send(users);
}
export const createuser =(req,res)=>{ 
    
    const user  = req.body
    users.push({...user, userid: uuidv4()});
    res.send(`${user.firstname},
    ${user.lastname},${user.age}`);

}

export const displayid = (req,res)=>{
    const {id} = req.params
    const found_user = users.find((users)=>users.userid === id)
    res.send(found_user)
    
}
export const user_update = (req,res)=>{
    const {id} = req.params;
    const {firstname,lastname,age} = req.body;
    const user = users.find((users)=>users.userid === id)

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age= age;
    res.send(user)
    

}
export const deleteuser = (req,res)=>{
    const {id} = req.params
    const user = users.filter((users)=>users.id !== id)
    res.send(`${id} is deleted from the database`) 

}