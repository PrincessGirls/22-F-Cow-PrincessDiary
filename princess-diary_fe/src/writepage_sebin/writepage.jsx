import React from "react";
import FaUserEdit from 'react-icons/fa';
import { useRef, useState, useCallback } from "react";
import {FiKey} from 'react-icons/fi';
import {BiUser,BiBookAlt,BiLock,BiLockOpen} from 'react-icons/bi';
import './writepage.css';

const WritePage = () => {

    const contentRef = useRef();
    const [content, setContent] = useState("");
    const [checked, setChecked] = useState(false);

    const onChange = ((event) => {
        setContent(event.target.value)
       });

    const onClick = ((event) => {
        if (checked==true){
            setChecked(false);
        }
        else {
            setChecked(true);
        }
    });

    const onSubmit = ((event) => {

    });
    return (
        <div className="writepage">
            <div className="userInfo" >
                <form onSubmit={onSubmit}>
                    <BiUser />
                    <input
                        placeholder="작성자" 
                        type="text"
                    />
                    <BiBookAlt />
                    <input 
                        placeholder="제목"
                        type="text"
                        />
                    <FiKey />
                    <input 
                        type="password"
                        />
                    <span
                        onClick={onClick}
                    >
                        {checked ? <BiLock /> : <BiLockOpen/>}
                    </span>
                </form>
            </div>
            <div className="userform">
                <form>
                <textarea
                    ref={contentRef}
                    value={content}
                    name="content"
                    onChange={onChange}
                    className="userform_textarea"
                >
                    {content}
                </textarea>
                <div className=" userSubmit">
                    <button  
                    onClick={() => {
                        alert('Submit');
                    }}>
                        Submit
                    </button>
                    <button  
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