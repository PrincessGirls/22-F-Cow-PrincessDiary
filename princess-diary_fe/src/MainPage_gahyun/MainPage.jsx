import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Princessdiary from "../components/Princessdiary";
import { useState, useEffect } from "react";
import axios from "axios";
// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
// const FormHelperTexts = styled(FormHelperText)`
//     width: 100%;
//     padding-left: 16px;
//     font-weight: 700 !important;
//     color: #d32f2f !important;
// `;

// const Boxs = styled(Box)`
//     padding-bottom: 40px !important;
// `;

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  bgcolor: "background.paper",
  p: 4,
};

function MainPage() {
  // color, font 설정
  const theme = createTheme({
    palette: {
      primary: {
        main: "#CFADAD",
      },
      secondary: {
        main: "#7F8AAD",
      },
      info: {
        main: "#F4DCD7",
      },
    },
    typography: {
      fontFamily: "Anybody",
    },
  });

  // 유효성 검사 useState 추가

  const navigate = useNavigate();
  //useNavigate?! -> 페이지

  const [diarys, setDiarys] = useState([]);
  const url = "/diary";
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setDiarys(response.data);
        console.log(response.data);
        console.log("보여주기 성공");
      })
      .catch(function (error) {
        console.log("보여주기 실패");
        console.log(error);
      });
  }, [navigate]);
  //일단 마운트와 언마운트에서만 이 함수가 실행되도록 설정
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleWrite = () => {
    navigate("/write");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="main" style={style}>
        <CssBaseline />
        <Princessdiary></Princessdiary>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "60vw",
              justifyContent: "left",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="제목" value="1" />
              <Tab label="작성자" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                width: "50vw",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="다이어리 제목 검색"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </TabPanel>
          <TabPanel value="2">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                width: "50vw",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="다이어리 작성자 검색"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </TabPanel>
        </TabContext>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          px: 30,
        }}
      >
        <Grid container spacing={2}>
          {diarys.map((diary) => (
            <Grid key={diary.id} item xs={12} md={6} lg={3}>
              <Button href={`/diary/${diary.id}`}>
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: { xs: 100, md: 130, lg: 150 },
                    }}
                    src="../../images/folder.png"
                    alt="folder"
                  ></Box>
                  <Box
                    sx={{
                      display: "column",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#2b6567",
                        fontSize: { xs: 12, md: 14, lg: 16 },
                      }}
                    >
                      {diary.author}
                    </Box>
                    <Box
                      sx={{
                        color: "#8b6d67",
                        fontSize: { xs: 15, md: 17, lg: 20 },
                      }}
                    >
                      {diary.title}
                    </Box>
                  </Box>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Button
          href="/write"
          sx={{ position: "fixed", bottom: 50, right: 50 }}
          onClick={handleWrite}
        >
          <Box
            component="img"
            src="../../images/pencil.png"
            sx={{ width: { xs: 50, md: 70, lg: 80 } }}
            alt="pencil"
          ></Box>
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default MainPage;
