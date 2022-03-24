const express = require("express");
const axios=require("axios");
const bodyParser=require("body-parser");

const { dirname } = require("path");

const app=express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(req,res){

    res.sendFile(__dirname +"/index.html");
});

app.get("/news",function(req,response){
    const category =req.body.newstype;
    console.log("\n\n"+category+"\n\n")
    const appkey="888d46939abf4408b3942b0ae249851d";
    const url="https://newsapi.org/v2/top-headlines?country=in&category="+category +"&apiKey="+appkey
    
    axios.get(url).then(resp => {

    console.log(resp.data);
    response.on("data",function(data){
        const newsdata=JSON.parse(data)
        const article=newsdata.articles
        response.send(article);
    })
})
response.json(article)
})


app.listen(3300,function(){
    console.log("server started on port 3300");
})
