import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Princessdiary from '../components/Princessdiary';

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

function MainPage() {
  // color, font 설정
  const theme = createTheme({
    palette: {
      primary: {
        main: '#CFADAD',
      },
      secondary: {
        main: '#7F8AAD',
      },
      info: {
        main: '#F4DCD7',
      },
    },
    typography: {
      fontFamily: 'Anybody',
    },
  });

  // 유효성 검사 useState 추가

  const navigate = useNavigate();
  //useNavigate?! -> 페이지

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component='main'
        sx={{
          marginLeft: 50,
        }}
      >
        <CssBaseline />
        <Princessdiary></Princessdiary>
        <Box
          sx={{
            mt: 2,
            width: 762,
            height: 73,
            typography: 'body1',
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                width: 300,
                marginLeft: 10,
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                <Tab label='제목' value='1' />
                <Tab label='작성자' value='2' />
              </TabList>
            </Box>
            <TabPanel value='1' sx={{ marginLeft: 7 }}>
              <Paper
                component='form'
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 760,
                  borderRadius: '10px',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, width: 760 }}
                  placeholder='다이어리 제목 검색'
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton
                  type='button'
                  sx={{ p: '10px' }}
                  aria-label='search'
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </TabPanel>
            <TabPanel value='2' sx={{ marginLeft: 7 }}>
              <Paper
                component='form'
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 760,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, width: 760 }}
                  placeholder='다이어리 작성자 검색'
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton
                  type='button'
                  sx={{ p: '10px' }}
                  aria-label='search'
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </TabPanel>
          </TabContext>
        </Box>
        <Box
          sx={{
            width: '900px',
            mt: 10,
            pl: 5,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Button sx={{ display: 'flex' }}>
                <img src='../../images/folder.png' width='140'></img>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button sx={{ display: 'flex' }}>
                <img src='../../images/folder.png' width='140'></img>
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button sx={{ display: 'flex' }}>
                <img src='../../images/folder.png' width='140'></img>
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button sx={{ display: 'flex' }}>
                <img src='../../images/folder.png' width='140'></img>
              </Button>
            </Grid>
          </Grid>
          <Button href="/write" sx={{ position: 'absolute', bottom: 80, right: 200 }}>
            <img src='../../images/pencil.png' width='70'></img>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default MainPage;
