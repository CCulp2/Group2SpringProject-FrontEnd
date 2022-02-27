import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import React from "react";

const validationSchema = Yup.object({
  userName: Yup.string().required('A username is required'),
  email: Yup.string().email('Invalid Email Format').required('A valid email is required'),
  password: Yup.string().required('Password is Required'),
  address: Yup.string().required('Please enter a valid address')
})

const initialValues = {
  userName: '',
  password: '',
  address: '',
};

const Register = () => {
  
  const formik = useFormik({
    initialValues,
    validationSchema
  });
  

  return (
    <div className="registerForm">
          <TextField
            id="userName"
            name="userName"
            label="Username"
            varient="outlined"
            value={formik.values.userName}

          />
          
          <TextField
            id='email'
            name='email'
            label='Email'
            variant="outlined"
            />

          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
          />

          <TextField
            id="address"
            label="Address"
            name="address"
            varient="outlined"
          />
          <Button variant="contained">Submit</Button>
    </div>
  );
}
export default Register;
