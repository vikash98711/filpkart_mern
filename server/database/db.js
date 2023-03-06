import mongoose from "mongoose";



export const Connection  = async (username,password) =>{
    const URL =`mongodb+srv://${username}:${password}@ecommerce-web.ohhutn0.mongodb.net/?retryWrites=true&w=majority`;
    try{
     await mongoose.connect(URL,{useunifiedtopology: true, useNewUrlParser: true})
     console.log('database connected suceesfully');
    }catch (error){
        console.log('error while connecting with the database',error.message);
    }
}

export default Connection;