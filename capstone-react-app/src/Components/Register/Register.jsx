import { TextField, Button, Box, Grid, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const validationSchema = Yup.object({
  username: Yup.string().required("A Username is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("A valid email is required"),
  password: Yup.string().required("Password is Required"),
  streetAddress: Yup.string().required("Please enter a valid address"),
});

const initialValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  streetAddress: "",
};

function sendRegistration(values) {
  fetch('http://localhost:8080/api/v1/customer',
  {
      method: 'post',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        username: values.username,
        password: values.password,
        streetAddress: values.streetAddress,

      })
  })
}

export default function Register() {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    // Switch onSubmit for backend when time.
    onSubmit: (values) => {sendRegistration(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <Box className="registerForm" py={4} px={50}>
      <Paper elevation={10}>
        <Grid container spacing={2} py={4}>
          <Grid container item xs={12} justifyContent="center">
            <Typography variant="h3">Sign-Up</Typography>
          </Grid>
            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="username"
                name="username"
                label="Username"
                type="username"
                varient="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                type="firstName"
                varient="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            
            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="lastName"
                name="lastname"
                label="Last Name"
                type="lastName"
                varient="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            
            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>            

            <Grid container item xs={12} justifyContent="center">
              <TextField
                id="streetAddress"
                label="streetAddress"
                name="streetAddress"
                type="streetAddress"
                varient="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
                error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                helperText={formik.touched.streetAddress && formik.errors.streetAddress}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="center">
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
        </Grid>
      </Paper>
    </Box>
    </form>
  );
};
