import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Box, Grid, Paper, Typography } from "@mui/material";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
  });
  return (
    <form>
      <Box py={4} px={50}>
        <Paper elevation={10}>
          <Grid container className="loginForm" py={4} spacing={2}>

            <Grid container item xs={12} justifyContent="center">
              <Typography variant="h3">Login</Typography>
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="userName"
                name="userName"
                label="Username"
                type="username"
                value={formik.values.userName}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <Button color="primary" variant="contained" type="submit">
              Log In
            </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </form>
  );
}
