
// This is a practice of the psotgresql database which i have learnt from cohort 3


// import { Client } from "pg"

// const client = new Client ("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")

//  async function createTable(){
//     await client.connect()
//     const response = await client.query(" " )
//     console.log(response)
    
// }
// createTable()

// import {Client } from "pg";

// const client = new  Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")
// const query = async ()=>{
//     await client.connect();
//      const insertQuery = "INSERT INTO users ( username , email , password) VALUES ($1 , $2 , $3)"
//      // So one important point is that this writing this type of code will prevent  you SQL insertion
//      const response = await client.query(insertQuery,['deepka' , 'deepaknegi@gmail.com' , 'deepkannegi'])
//     console.log(response)
// }
// query()

// import { Client } from "pg";

// const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")

// const query = async ()=>{
//      client.connect()
//     const update = "UPDATE users SET password = $1 WHERE email =$2"
//     const response = await client.query(update ,['deepak negi' , 'deepaknegi@gmail.com'])
//     console.log(response)
// }
// query()

// import { Client } from "pg";

// const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")

// const query = async ()=>{
//     client.connect()
//     const response = "CREATE TABLE address( username TEXT,password TEXT)"
//     const result = await client.query(response , [])
// }

// import {Client } from "pg";

// const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")
//  const query = async ()=>{
//     client.connect()
//     const response = `CREATE TABLE adddress (
//     id SERIAL PRIMARY KEY ,
//     email VARCHAR(40) UNIQUE NOT NULL )`
//     const result = await client.query(response,[])
//     console.log(result)
//  }
// query()

// import {Client} from 'pg';

// const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")

// const query = async ()=>{
//     client.connect()
//     const response = `DELETE FROM users WHERE id = $1` 
//     const result = await client.query(response ,[1])
//     console.log(result)
// }
// query()


// import {Client} from "pg";
//  const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")

// const query = async ()=>{
//     client.connect()
//     const response = ` SELECT username, password FROM users Where id = $1`
//     const result = await client.query(response ,['2'])
//     console.log(result)

// }
// query()


// relationShip in postgrees

// import { Client } from  "pg"
// const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")

// const query = async ()=>{
//     client.connect()
//     const response = ` CREATE TABLE admin (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
    
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    
//     )`
//     const result = await client.query(response,[])
//     console.log(result)
// }
// query()
// import {Client} from "pg";

// const client = new Client("postgresql://prisma%201_owner:1gLucemUz7oY@ep-tight-lab-a8m4vbfj.eastus2.azure.neon.tech/prisma%201?sslmode=require")
// const query = async ()=>{
//     client.connect()
//     const response = `SELECT u.username , u.password
//     FROM users u
//     JOIN address a ON u.id = a.user_id
//     WHERE u.id = $1`
//     const result = await  client.query(response ,[])
// }