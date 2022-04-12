import { CssBaseline, Grid, Typography, CardActionArea } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// This is the shopping cart page
// This function maps the items in the cart to the cart page

function CartPage(props) {
  const navigate = useNavigate();
  const { cartItems } = props;

  const handleNavClick = (destination) => {
    navigate(destination);
  };

  if (cartItems.length === 0) {
    return (<p>Cart is empty.</p>)
  }
  return (
    <CssBaseline>
      <Grid container>

        {/* Cart @Contents */}
        {/* This part of the grid displays all the items in the user's cart */}

        <Grid item xs={8}>
          <Paper
            elevation={3}
            sx={{ maxWidth: 750, marginX: "auto", marginY: 10 }}
          >
            <Grid container>
              {/* Map over Items in Cart*/}
              {/* eslint-disable-next-line */}
              {cartItems.map((item) => {
                <Grid item xs={12}>
                  <Card sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Product Image"
                          height="250"
                          image={item.product_img_url}
                          title="Product Image"
                        />
                      </CardActionArea>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography gutterBottom variant="h4" component="h4">
                          {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                          {item.unit_price}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                          Size: {item.productSize}
                        </Typography>
                        <Button variant="outlined" color="secondary">
                          Remove from Cart
                        </Button>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>;
              })}
            </Grid>
          </Paper>
        </Grid>

        {/* Cart @Summary */}
        {/* This half of the grid shows the total price of the items in the cart. */}

        <Grid item xs={4} sx={{ marginY: 10 }}>
          <Box sx={{ textAlign: "right", pr: 12 }}>
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
          <Box textAlign="center" sx={{ p: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 220, height: 50 }}
              onClick={() => {
                handleNavClick("/Confirmation");
              }}
            >
              Confirm Purchase
            </Button>
          </Box>
        </Grid>
      </Grid>
    </CssBaseline>
  );
}

export default CartPage;
