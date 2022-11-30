import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
const ariaLabel = { 'aria-label': 'description' };

export default function PasswordModal() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#CFADAD',
      },
      secondary: {
        main: '#6D7692',
      },
      info: {
        main: '#997A73',
      },
    },
    typography: {
      fontFamily: 'Anybody',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography
          sx={{
            color: '#6D7692',
            fontWeight: 'bold',
            textAlign: 'center',
            mt: 3,
          }}
          id='modal-modal-title'
          variant='h6'
          component='h2'
        >
          비밀번호를 입력해주세요
        </Typography>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 13, ml: 2,position: 'relative', left: '40px', width:'300px' }}>
            <Typography
              id='modal-modal-description'
              sx={{ color: '#997A73', fontWeight: 'bold' }}
            >
              비밀번호 입력
            </Typography>
            <Input
              placeholder=''
              inputProps={ariaLabel}
              sx={{ ml: 2 }}
              noValidate
              autoComplete='off'
            />
          </Box>
        </Box>
        <Box sx={{ mt: 8, position: 'relative', left: '165px', top:'50px', width:'100px' }}>
          <Stack spacing={2} direction='row'>
            <Button
              variant='contained'
              sx={{
                fontWeight: 'bold',
                color: '#70554f',
                backgroundColor: '#E9B9AF',
                borderRadius: '15%',
              }}
            >
              확인
            </Button>
          </Stack>
        </Box>
      </div>
    </ThemeProvider>
  );
}
