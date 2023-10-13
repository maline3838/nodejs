const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
const path = require('path');


app.get("/", (req,res)=>{
    const indexPath = path.join(__dirname, 'index.html'); // 指定 index.html 的路径
    res.sendFile(indexPath);
});

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})