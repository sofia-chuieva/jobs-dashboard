import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Landing = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "blue" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ mt: 3 }} component="h1" variant="h5">
          Job Dashboard
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained">Login/Register</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
