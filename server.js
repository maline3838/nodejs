import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req,res)=>{
    res.json({ message:"nodeapp running on container"});
});

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})