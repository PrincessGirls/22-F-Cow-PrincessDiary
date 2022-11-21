import React from 'react';
import axios from "axios";
import Princessdiary from '../components/Princessdiary';
import { useRef, useState, useCallback } from 'react';
import { FiKey } from 'react-icons/fi';
import { BiUser, BiBookAlt, BiLock, BiLockOpen } from 'react-icons/bi';
import './writepage.css';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
  
  const contentRef = useRef();
  const navigate = useNavigate();
  const [author,setAuthor] = useState("");
  const [password,setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/write", {
      "author":author, "password":password, "title":title, "content":content, "checked":checked
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((e) => {
      console.error(e);
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

  const onClick = () => {
    alert('Submit');
    navigate('/');
  }

  return (
    
    <div className='writepage'>
      <Princessdiary></Princessdiary>
      <form onSubmit={onSubmit}>
        <div className='userInfo'>
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
            type='password'
            name='password'
            value={password} 
            onChange={handlePassword}
            />
          <span onClick={handleChecked}>{checked ? <BiLock /> : <BiLockOpen />}</span>
          </div>
          <div className='userform'>
          <textarea
            ref={contentRef}
            value={content}
            name='content'
            onChange={handleContent}
            className='userform_textarea'
            required
          >
            {content}
          </textarea>
          <div className=' userSubmit'>
            <button
              type="submit"
              onClick={onClick}
            >
              Submit
            </button>
            <button
              onClick={() => {
                alert('취소');
                navigate('/');
              }}
            >Cancle</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
