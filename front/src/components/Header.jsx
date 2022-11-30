import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function Princessdiary() {
  return (
    <Box
      sx={{
        mt: 7,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="../images/vector.png"
        sx={{ width: { xs: 30, md: 40, lg: 50 } }}
        alt="king"
      ></Box>
      <Typography
        sx={{
          ml: 2,
          fontWeight: 550,
          color: "#7F8AAD",
          fontSize: { xs: "30px", md: "50px", lg: "70px" },
        }}
      >
        Princess Diary
      </Typography>
    </Box>
  );
}

export default Princessdiary;
