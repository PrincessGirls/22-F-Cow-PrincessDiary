import React from "react";
import axios from "axios";
import Princessdiary from "../components/Princessdiary";
import { useRef, useState } from "react";
import { BiUser, BiBookAlt } from "react-icons/bi";
import "./writepage.css";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, InputBase } from "@mui/material";

const WritePage = () => {
  const contentRef = useRef();
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async () => {
    await axios
      .post("/write", {
        author: author,
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res.data);
        console.log("성공");
        alert("다이어리가 등록되었습니다!");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        console.log("다이어리가 등록에 실패했습니다.");
      });
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCancle = (e) => {
    e.preventDefault();
    alert("취소");
    navigate("/");
  };

  return (
    <Box
      className="writepage"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Princessdiary />
      <Box
        container
        spacing={2}
        className="userInfo"
        sx={{
          display: "flex",
          height: "70px",
          marginTop: "30px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <BiUser
              style={{
                fontSize: "60px",
                color: "#cfadad",
              }}
            />
            <InputBase
              placeholder="작성자"
              type="text"
              name="author"
              value={author}
              onChange={handleAuthor}
              required
              sx={{
                marginBottom: "16px",
                marginRight: "25px",
                marginLeft: "5px",
                fontSize: "20px",
                boxSizing: "border-box",
                lineHeight: "1em",
                border: "none",
                borderBottom: "2px solid #cfadad",
              }}
            />
            <BiBookAlt
              style={{
                fontSize: "60px",
                color: "#cfadad",
              }}
            />
            <InputBase
              placeholder="제목"
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
              required
              sx={{
                marginBottom: "16px",
                marginRight: "25px",
                marginLeft: "5px",
                fontSize: "20px",
                boxSizing: "border-box",
                lineHeight: "1em",
                border: "none",
                borderBottom: "2px solid #cfadad",
              }}
            />
          </Box>
        </FormControl>
      </Box>
      <Box
        className="userform"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <FormControl>
          <InputBase
            ref={contentRef}
            value={content}
            name="content"
            onChange={handleContent}
            className="userform_textarea"
            required
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "50vw",
              height: "50vh",
              border: "3px solid rgb(204, 202, 202)",
              borderRadius: "20px",
              backgroundColor: " rgb(233, 232, 232)",
              outlineColor: "rgb(163, 162, 162)",
              resize: "none",
              fontSize: "20px",
              padding: "10px",
            }}
          ></InputBase>
          <Box
            className="userSubmit"
            sx={{
              display: "flex",
              mt: 3,
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <Button
              type="button"
              onClick={onSubmit}
              sx={{
                display: "flex",
                fontSize: { xs: "15px", md: "20px", lg: "22px" },
                border: "3px solid #cfadad",
                borderRadius: "20px",
                outline: "none",
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(71, 71, 71)",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={handleCancle}
              sx={{
                display: "flex",
                fontSize: { xs: "15px", md: "20px", lg: "22px" },
                border: "3px solid #cfadad",
                borderRadius: "20px",
                outline: "none",
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(71, 71, 71)",
                textAlign: "center",
              }}
            >
              Cancle
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default WritePage;
