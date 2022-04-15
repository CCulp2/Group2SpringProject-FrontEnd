import { CssBaseline, Grid, Typography, CardActionArea } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  calculateTax,
  formatTax,
  formatTotals,
  getShoppingCartItems,
  priceOfAllCartItems,
} from "./CartService";
import CartItem from "./CartItem";

// This is the shopping cart page
// This function maps the items in the cart to the cart page

function CartPage() {
  const navigate = useNavigate();
  const [currentCart, setCurrentCart] = React.useState(getShoppingCartItems());

  const handleNavClick = (destination) => {
    navigate(destination);
  };

  let totals = {
    price: 0,
    tax: 0,
    total: 0,
  };

  const handleRemove = (key) => {
      setCurrentCart(currentCart.filter((item, index) => item[index] !== key))
    
  };

  const [cartTotals, setCartTotals] = React.useState(0);



  if (currentCart === undefined) {
    return <p>Cart is empty.</p>;
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
              {currentCart.map((item, index) => (
                <CartItem
                  key={index}
                  productImgUrl={item.productImgUrl}
                  name={item.name}
                  unit_price={item.unit_price}
                  productSize={item.productSize}
                  handleRemove={() => handleRemove}
                />
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Cart @Summary */}
        {/* This half of the grid shows the total price of the items in the cart. */}

        <Grid item xs={4} sx={{ marginY: 10 }}>
          <Box sx={{ textAlign: "right", pr: 12 }}>
            <Typography variant="h4" component="h4">
              Cart Total: {formatTotals(totals.price)}
            </Typography>
            <Typography variant="h4" component="h4">
              Tax: {formatTax(totals.tax)}
            </Typography>
            <Typography variant="h4" component="h4">
              -----------------------------
            </Typography>
            <Typography variant="h4" component="h4" color="secondary">
              Total: {formatTotals(totals.total)}
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
