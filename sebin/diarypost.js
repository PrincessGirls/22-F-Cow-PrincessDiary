import express from "express";
const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');

const router = express.Router();

app.use(express.json()); 
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/diary', (req,res) => {
  const data = getWrite();
  res.json(data);
});

app.post('/diary', (req, res) => {
  const data = getWrite();

  const { id, title, author, password, content } = req.body;
    
  const newWrite = {
        id,
        title,
        author,
        password,
        content
  };
  
  data.push(newWrite);

  setWrite([...data]);

  res.send(req.body);
});

const URL = __dirname+'/'+'content.json';

function getWrite() {
  return JSON.parse(fs.readFileSync(URL, 'utf8'));
}
function setWrite(newData) {
  fs.writeFileSync(URL, JSON.stringify(newData), 'utf8');
}

module.exports = router;

app.listen(3000);