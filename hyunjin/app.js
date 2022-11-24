/*import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});*/
const express = require('express');
const app = express();
const port=3000;
const fs=require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/data", (req, res) => {
	const data = getData();
	res.json(data)
});

app.get("/data/:id",(req,res)=>{
    const {id} = req.params;
    const data = getData().find(d=>d.id===id);
    res.send(data);
});

/*app.get("/search",(req,res)=>{
    const {id,title} = req.query;
    res.send(`${id}${title}`);
});

app.post("/dataa", function (req, res) {
	const data = getData();
    const { id, title } = req.body;
    const newData = {
        id,
        title
    };
    data.push(newData);

    setData([...data]);

    res.status(200).send({
        id,
        title
    });
});*/

const URL=__dirname+'/'+'dummy.json';
function getData() {
	return JSON.parse(fs.readFileSync(URL, 'utf8'));
}
function setData(newData){
    fs.writeFileSync(URL, JSON.stringify(newData),'utf8');
}

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
});
