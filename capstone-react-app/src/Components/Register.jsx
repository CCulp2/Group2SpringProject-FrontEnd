import { Grid } from "@mui/material";
import { Box, TextField } from "@mui/material";
import React from "react";

export default function Register() {
  return (
    <Box sx={{ flexgrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* Textfield for Username */}
          <TextField id="outlined-basic" label="Username" varient="Username" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>

        <Grid item xs={8}>
          <TextField id="ounlined-basic" label="Password" variant="Password" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>
        
        <Grid item xs={8}>
          <TextField id="ounlined-basic" label="Password" variant="Password" />
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>
        
        <Grid item xs={8}>
          {/*Address Form*/}
        </Grid>
        <Grid item xs={2}>
          {/* Checkmark */}
        </Grid>
        
        <Grid item xs={12}>
          {/*Send Button*/}
        </Grid>
      </Grid>
    </Box>
  );
}
