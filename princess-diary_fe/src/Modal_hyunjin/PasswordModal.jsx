import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
const ariaLabel = { 'aria-label': 'description' };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color:'#6D7692',fontWeight:'bold',textAlign:'center', mt:3}}id="modal-modal-title" variant="h6" component="h2">
            비밀번호를 입력해주세요
          </Typography>
          <Box >
            <Box sx={{display:'flex', alignItems:"center", mt:13, ml:5}}>
                <Typography id="modal-modal-description" sx={{color:'#997A73',fontWeight:'bold' }}>
                    비밀번호 입력
                </Typography>
                <Input placeholder="" inputProps={ariaLabel} sx={{ml:2}}  noValidate
      autoComplete="off"/>
            </Box>
          </Box>
          <Box sx={{mt:8, position:'relative', left:'170px'}}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" sx={{fontWeight:'bold',color:'#70554f',backgroundColor:'#E9B9AF', borderRadius:'15%'}}>확인</Button>
            </Stack>
           </Box>
        </Box>
      </Modal>
    </div>
</ThemeProvider>
  );
}