import {
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Typography,
  MenuItem,
  InputLabel,
  Form,
  FormGroup
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { stateAbbrev } from "./stateabbreviation";

const validationSchema = Yup.object({
  username: Yup.string().required("A Username is required"),
  password: Yup.string().required("Password is Required"),
  firstName: Yup.string()
    .required("Please enter a first name")
    .min(3, "Name must be at least 3 characters")
    .matches(/[A-Za-z]/, "Name can only contain letters."),
  lastName: Yup.string()
    .required("Please enter a last name")
    .min(3, "Name must be at least 3 characters")
    .matches(/[A-Za-z]/, "Name can only contain letters."),
  streetAddress: Yup.string()
    .required("Please enter a valid address")
    .min(5, "Please enter a valid address"),
  city: Yup.string()
    .required()
    .matches(/[A-Za-z]/, "City can only contain letters"),
  state: Yup.string().required("Must have a state selected."),
});

const initialValues = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  streetAddress: "",
  city: "",
  state: "",
};

function sendRegistration(values) {
  fetch("http://localhost:8080/api/v1/customer", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      streetAddress: values.streetAddress,
      city: values.city,
      state: values.state,
    }),
  });
}

export default function Register() {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    // Switch onSubmit for backend when time.
    onSubmit: (values) => {
      sendRegistration(values);
    },
  });

  return (
    console.log(stateAbbrev),
    <FormGroup onSubmit={formik.handleSubmit}>
      <Box className="registerForm" py={4} px={50}>
        <Paper elevation={10}>
          <Grid container spacing={2} py={4}>
            <Grid container item xs={12} justifyContent="center">
              <Typography variant="h3">Sign-Up</Typography>
            </Grid>

            {/* Username */}
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
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>

            {/* Password */}
            <Grid container item xs={12} pb={4} justifyContent="center">
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

            {/* Name container */}
            <Grid
              container
              item
              xs={12}
              spacing={2}
              pb={4}
              justifyContent="center"
            >
              {/* First name */}
              <Grid item>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  type="firstName"
                  varient="outlined"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>

              {/* last name */}
              <Grid item>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="lastName"
                  varient="outlined"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
            </Grid>

            {/* Address container */}
            <Grid container item xs={12} spacing={2} justifyContent="center">
              {/* Street Address */}
              <Grid item>
                <TextField
                  id="streetAddress"
                  label="Street Address"
                  name="streetAddress"
                  type="streetAddress"
                  varient="outlined"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.streetAddress}
                  error={
                    formik.touched.streetAddress &&
                    Boolean(formik.errors.streetAddress)
                  }
                  helperText={
                    formik.touched.streetAddress && formik.errors.streetAddress
                  }
                />
              </Grid>

              {/* City */}
              <Grid item>
                <TextField
                  id="city"
                  label="City"
                  name="city"
                  type="city"
                  varient="outlined"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
            </Grid>

            {/* State */}
            <Grid container item xs={12} justifyContent="center">
              <TextField
                sx={{minWidth: 120}}
                MenuProps={{ PaperProps: { sx: { maxHeight: 50 } } }}
                select
                id="state"
                label="State"
                name="state"
                type="state"
                varient="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.state}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              >
                {stateAbbrev.map((option) => (
                  <MenuItem
                    key={option.abbreviation}
                    value={option.abbreviation}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            

            <Grid container item xs={12} justifyContent="center">
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </FormGroup>
  );
}
