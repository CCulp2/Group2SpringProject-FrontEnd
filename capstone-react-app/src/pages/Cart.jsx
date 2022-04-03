import {  CssBaseline,  Grid, Typography,  CardActionArea } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';


// This is the shopping cart page
function cartPage() {



  return (
  <CssBaseline>
    <Paper elevation={3} sx={{ maxWidth: 750, marginX: 'auto', marginY: 10}}>
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{display: 'flex'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Product Image"
                height="400"
                image="https://source.unsplash.com/random"
                title="Product Image"
              />
            </CardActionArea>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', pl:1, pb: 1}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="h4" component="h4">
              Product Name
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              $10.00
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              Size: Shmedium
            </Typography>
            <Button variant="outlined" color="secondary">
              Remove from Cart
            </Button>
          </CardContent>
        </Box>
        </Card>
      </Grid>
    </Grid>
    </Paper>
  </CssBaseline>
  )
}

export default cartPage;
