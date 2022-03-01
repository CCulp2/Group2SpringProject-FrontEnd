import { TextField, Button, Box, Grid, Paper, Typography} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { typography } from "@mui/system";

const validationSchema = Yup.object({
  username: Yup.string().required("A Username is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("A valid email is required"),
  password: Yup.string().required("Password is Required"),
  address: Yup.string().required("Please enter a valid address"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  address: "",
};

const Register = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  return (
    <Box className="registerForm" py={4} px={50}>
      <Paper elevation={10}>
        <Grid container spacing={2} py={4}>
          <Grid container item xs={12} justifyContent='center' justify>
            <Typography variant='h3'>
              Sign-Up
            </Typography></Grid>          
          <Grid container item xs={12} justifyContent='center'> 
            <TextField
              id="username"
              name="username"
              label="Username"
              varient="outlined"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </Grid>

          <Grid container item xs={12} justifyContent='center'>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          
          <Grid container item xs={12} justifyContent='center'>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Grid>
          
          <Grid container item xs={12} justifyContent='center'>         
            <TextField
              id="address"
              label="Address"
              name="address"
              varient="outlined"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </Grid>

          <Grid container item xs={12} justifyContent='center'>
            <Button variant="contained" type="submit">Submit</Button>
            </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
export default Register;
