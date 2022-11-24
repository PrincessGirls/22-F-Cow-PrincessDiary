import express from 'express';
const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// app.get('/diary/:id', (req, res) => {
//   console.log(req.params);
//   console.log(req.params.id);
//   const diary = getWrite().find((d) => d.id === req.params.id);
//   console.log(diary);
//   const newData = getWrite().filter((d) => d.id !== req.params.id);
//   console.log(newData);
//   console.log([...newData]);
//   res.send('Hello World!!!!!');
// });
app.delete('/diary/:id', (req, res) => {
  console.log(req.params);
  //req.params는 {id:7}
  //req.params.id는 {7}
  console.log(req.params.id);
  if (!req.params.id) {
    res.status(400).send({ message: 'id가 없습니다' });
    return;
  }
  //아이디가 존재하는지 체크
  const diary = getWrite().find((d) => d.id === req.params.id);
  //아이디가 존재한다면
  // 글이 존재하는지 체크
  if (!diary) {
    res.status(400).send({ message: '존재하지 않는 글입니다.' });
    return;
  }
  const newData = getWrite().filter((d) => d.id !== req.params.id);
  setWrite([newData]);
  //왜 이런식으로 넣어줘야 하는지
  res.status(200).send({ message: '글 삭제 완료' });
  res.redirect('/diary');
});

const URL = __dirname + '/' + 'diary.json';
//dirname은 현재 사용중인 폴더
function getWrite() {
  return JSON.parse(fs.readFileSync(URL, 'utf8'));
}
function setWrite(newData) {
  fs.writeFileSync(URL, JSON.stringify(newData), 'utf8');
}

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});
