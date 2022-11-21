import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function Princessdiary() {
  return (
    <Box
      sx={{
        width: 760,
        mt: 7,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        textAlign: 'center',
        alignItems: 'center',
        pl: 15,
      }}
    >
      <img src='../images/vector.png' width='50' height='65'></img>
      <Typography
        sx={{
          ml: 2,
          fontSize: 70,
          fontWeight: 550,
          color: '#7F8AAD',
          fontFamily: 'ABeeZee',
        }}
      >
        Princess Diary
      </Typography>
    </Box>
  );
}

export default Princessdiary;
