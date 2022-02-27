import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

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
      <TextField
        fullWidth
        id="userName"
        name="userName"
        label="Username"
        value={formik.values.userName}
        onChange={formik.handleChange}
      />
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
