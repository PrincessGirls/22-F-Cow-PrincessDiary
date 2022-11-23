import React from 'react';
import axios from "axios";
import Princessdiary from '../components/Princessdiary';
import { useRef, useState, useCallback } from 'react';
import { FiKey } from 'react-icons/fi';
import { BiUser, BiBookAlt, BiLock, BiLockOpen } from 'react-icons/bi';
import './writepage.css';
import { useNavigate } from 'react-router-dom';
import { FormGroup } from '@mui/material';

const WritePage = () => {
  
  const contentRef = useRef();
  const navigate = useNavigate();
  const [author,setAuthor] = useState("");
  const [password,setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);

  const onSubmit = useCallback(() => {
    axios.post("http://localhost:3000/write", {
      "author":author, "password":password, "title":title, "content":content, "checked":checked
    })
    .then((res) => {
        console.log(res.data);
        console.log("성공");
    })
    .catch((e) => {
      console.error(e);
      console.log("실패");
    })
});

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleChecked = () => {
    if (checked == true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleSubmit = (e) => {
    alert('Submit');
    navigate('/');
  }

  const handleCancle = (e) => {
    e.preventDefault();
    alert('취소');
    navigate('/');
  }

  return (
    
    <div className='writepage'>
      <Princessdiary></Princessdiary>
      <div className='userInfo'>
        <form >
          <BiUser />
          <input
            placeholder='작성자'
            type='text'
            name='author'
            value={author} 
            onChange={handleAuthor}
            required
            />
          <BiBookAlt />
          <input 
            placeholder='제목'
            type='text'
            name='title'
            value={title} 
            onChange={handleTitle}
            required
            />
          <FiKey />
          <input 
            placeholder='4자리 입력'
            type='password'
            name='password'
            value={password} 
            onChange={handlePassword}
            />
          <span onClick={handleChecked}>{checked ? <BiLock /> : <BiLockOpen />}</span>
        </form>
      </div>
      <div className='userform'>
        <form>
          <textarea
            ref={contentRef}
            value={content}
            name='content'
            onChange={handleContent}
            className='userform_textarea'
            required
          >
          </textarea>
          <div className="userSubmit">
            <button
              type="button"
              onClick={handleSubmit}
              onSubmit={onSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancle}
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WritePage;
