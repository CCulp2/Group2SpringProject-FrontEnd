import { Box, TextField, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      address: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="registerForm">
          {/* Textfield for Username */}
          <TextField
            id="userName"
            name="userName"
            label="Username"
            varient="outlined"
          />

          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
          />


          <TextField
            id="passwordRecheck"
            label="passwordRecheck"
            name="passwordRecheck"
            variant="outlined"
          />
          <TextField
            id="address"
            label="address"
            name="address"
            varient="outlined"
          />
          <Button variant="contained">Submit</Button>
    </div>
  );
}
