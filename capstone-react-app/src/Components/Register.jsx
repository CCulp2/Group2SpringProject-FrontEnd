import { TextField, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import React from "react";

const validationSchema = Yup.object({
  username: Yup.string().required('A Username is required'),
  email: Yup.string().email('Invalid Email Format').required('A valid email is required'),
  password: Yup.string().required('Password is Required'),
  address: Yup.string().required('Please enter a valid address')
})

const initialValues = {
  username: '',
  email: '',
  password: '',
  address: '',
};

const Register = () => {
  
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
  

  return (
    <div className="registerForm">
      <Box height={12} />
          <TextField
            id="username"
            name="username"
            label="Username"
            varient="outlined"
            onChange={formik.handleChange}
            value={formik.values.username}

          />
          <Box height={12} />
          <TextField
            id='email'
            name='email'
            label='Email'
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
          <Box height={12} />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Box height={12} />
          <TextField
            id="address"
            label="Address"
            name="address"
            varient="outlined"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <Box height={12} />
          <Button variant="contained">Submit</Button>
    </div>
  );
}
export default Register;
