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

// 다이어리 json 파일 읽어오기
app.get("/diary", (req, res) => {
  const data = getWrite();
  res.json(data);
  res.send("diary 실행");
});

// 다이어리 id 값으로 검색후에 해당하는 데이터만 가져오기
app.get("/diary/:id", (req, res) => {
  const { id } = req.params;
  const data = getData().find((d) => d.id === id);
  res.send(data);
});

// id 값을 받아와서 해당하는 데이터를 삭제
app.delete("/diary/:id", (req, res) => {
  const { id } = req.params;
  const data = getData();
  const index = getData().findIndex((p) => p.id === id);
  data.splice(index, 1);
  setWrite([...data]);
  res.status(200).json({
    status: "succes",
    data: req.body,
  });
});

// 다이어리 데이터 추가
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

// 다이어리 데이터 수정
app.put("/diary/:id", (req, res) => {
  const data = getWrite(); 
  const postData = req.body;

  const diary = data.find((d) => d.id === req.params.id);

  // 입력 받은 id의 diary
  diary.content = postData.content;

  setWrite([...data]);
  res.status(200).json({
    status: "succes",
    data: req.body,
  });
});

// 절대 경로 설정
const URL = __dirname + "/" + "diary.json";

// 파일 데이터 읽어오기
function getData() {
  return JSON.parse(fs.readFileSync(URL, "utf8"));
}

// 파일 데이터 읽어오기
function getWrite() {
  return JSON.parse(fs.readFileSync(URL, "utf8"));
}

// 파일 데이터 쓰기
function setWrite(newData) {
  fs.writeFileSync(URL, JSON.stringify(newData), "utf8");
}

module.exports = router;

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
