import express from "express";
const bodyParser = require("body-parser");
import diary from "./diary.json";

const app = express();
const fs = require("fs");

const router = express.Router();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/diary", (req, res) => {
  const data = getWrite();
  res.setHeader("Access-Control-Allow-origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.json(data);
  res.send("diary 실행");
});

app.get("/diary/:id", (req, res) => {
  const { id } = req.params;
  const data = getData().find((d) => d.id === id);
  res.send(data);
});

app.post("/write", (req, res) => {
  const data = getWrite();

  const postData = req.body;

  const lastUser = diary[diary.length - 1];
  if (lastUser) {
    data.push({
      id: String(parseInt(lastUser.id) + 1),
      title: postData.title,
      author: postData.author,
      content: postData.content,
    });
  } else {
    data.push({
      id: "1",
      title: postData.title,
      author: postData.author,
      content: postData.content,
    });
  }
  setWrite([...data]);
  res.status(200).json({
    status: "succes",
    data: req.body,
  });
});

const URL = __dirname + "/" + "diary.json";

function getData() {
  return JSON.parse(fs.readFileSync(URL, "utf8"));
}

function getWrite() {
  return JSON.parse(fs.readFileSync(URL, "utf8"));
}
function setWrite(newData) {
  fs.writeFileSync(URL, JSON.stringify(newData), "utf8");
}

module.exports = router;

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
