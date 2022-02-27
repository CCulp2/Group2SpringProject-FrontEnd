import { Box, TextField, Button, Grid } from "@mui/material";
import React from "react";

export default function Register() {
  return (
    <Box sx={{ flexgrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* Textfield for Username */}
          <TextField id="outlined-basic" label="Username" varient="outlined" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>

        <Grid item xs={8}>
          <TextField id="ounlined-basic" label="Password" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>
        
        <Grid item xs={8}>
          <TextField id="ounlined-basic" label="Password" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>
        
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Address" varient="outlined" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>
        
        <Grid item xs={12}>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
