// import {PrismaClient } from "@prisma/client";

// const client  = new PrismaClient()


// const response = async()=>{
//     const result = await client.user.create({
//      data:{
//         username:"deeppak",
//         password:"deepak",
//         lastName:"negi",
//         firstName:"deepaak",
//         age:"23"

//     }  
// })
// console.log(result)
// }

// response()

// so Lets practice the prisma 
//orm help you in interacting with the data base under the hood it converts object to sql queries only

// import {PrismaClient} from "@prisma/client";

// const client = new PrismaClient()

// const prisma = async()=>{
//     const response = await client.user.create({
//         data:{
//             username:"deepak",
//             password:"deepak negi",
//             age:23
        
//         }
//     })
// }
// prisma()

//  npx prisma migrate dev -- name <name of your migration> the schema this is used to run those schema and create migration
// npx prisma generate this generate the prisam client 

// import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();

// const prisma = async () => {
//     try {
//         const updatedUser = await client.user.update({
//             where: {
//                 id: 1, // Ensure the `id` field exists in your database
//             },
//             data: {
//                 password: 'deepaknegiri',
             
//                 username: 'deepfak',
//             },
//         });
//         console.log(updatedUser);
//     } catch (error:any) {
//         console.error("Error updating user:", error.message);
//     } finally {
//         await client.$disconnect(); // Disconnect the Prisma client
//     }
// };

// prisma();


// import { PrismaClient} from "@prisma/client"
// const client = new PrismaClient()

// const updateUser = async ()=>{
//     const prisma = await client.user.update({
//         where:{
//           username:'deepfak',
//           id:1
//         },
//         data:{
//             password:'fffff',
//             age:23
//         }
//     })
//     console.log(prisma)
// }
// updateUser()

//Relationship 


