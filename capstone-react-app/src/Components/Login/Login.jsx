import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Box, Grid, Paper, Typography } from "@mui/material";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box py={4} px={50}>
      <Paper elevation={10}>
        <Grid container className="loginForm" py={4} spacing={2}>
        <Grid container item xs={12} justifyContent="center">
          <Typography variant="h3">
            Login
          </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextField
              id="userName"
              name="userName"
              label="Username"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextField
              id="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Button color="primary" varient="contained" type="submit">
              Log In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
