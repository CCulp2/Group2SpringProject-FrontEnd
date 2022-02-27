import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Box } from "@mui/material";

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
    <div className="loginForm">
        <Box height={12} />
      <TextField
        fullWidth
        id="userName"
        name="userName"
        label="Username"
        value={formik.values.userName}
        onChange={formik.handleChange}
      />
      <Box height={12} />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Button color="primary" varient="contained" fullWidth type="submit">
        Log In
      </Button>
    </div>
  );
}
