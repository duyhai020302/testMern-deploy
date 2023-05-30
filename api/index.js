const express=require('express');
const App=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
App.use(cors());


App.get('/api/test',(req,res)=>{
    res.json('Hello '+Date.now());
})


if(process.env.API_PORT){
    App.listen(process.env.API_PORT,()=>{
        console.log("Running on port 4000...")
    })
}

module.exports=App;