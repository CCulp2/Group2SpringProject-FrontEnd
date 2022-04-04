import {  CssBaseline,  Grid, Typography,  CardActionArea } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


// This is the shopping cart page
function CartPage() {
  const navigate = useNavigate();

  const handleNavClick = (destination) => {
    navigate(destination);
  };




  return (
  <CssBaseline>
    <Grid container>
    {/* Array of items in @cart */}
    <Grid item xs={8}>
      <Paper elevation={3} sx={{ maxWidth: 750, marginX: 'auto', marginY: 10}}>
      <Grid container>
        <Grid item xs={12}>
          <Card sx={{display: 'flex'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column'}} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Product Image"
                  height="250"
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
    </Grid>

    {/* Cart @Summary */}
    <Grid item xs={4} sx={{ marginY: 10}}>
          <Box sx={{textAlign: 'right', pr: 12}}>
          <Typography variant="h4" component="h4">
            Cart Total: $10.00
          </Typography>
          <Typography variant="h4" component="h4">  
            Tax: $0.00
          </Typography>
          <Typography variant="h4" component="h4">
            -----------------------------
          </Typography>
          <Typography variant="h4" component="h4" color="secondary">
            Total: $10.00
          </Typography>
          </Box>
            <Box textAlign="center" sx={{ p: 4}}>
            <Button variant="contained"
              color="secondary"
              size="large"
              style={{ width: 220, height: 50}}
              onClick={() => {
              handleNavClick('/Confirmation');
              }}
            >
              Confirm Purchase
            </Button>
            </Box>
    </Grid>
    </Grid>
  </CssBaseline>
  )
}

export default CartPage;
