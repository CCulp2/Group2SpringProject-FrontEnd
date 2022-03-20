import {
  Button,
  Card,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  Paper,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { getAllItems } from '../Components/Items/ItemsService'


function Item() {
  // Handles Product @Size ---------{
  const [size, setSize] = React.useState("medium");

  const handleSize = (event, newSize) => {
    setSize(newSize);
  };
// }--------------------------------------------------

  // Handles Product @Quantity ---------{
  const [quantity, setQuantity] = React.useState("1");

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };
// }---------------------------------------------------

// fetch for items on the items page
const [items, setItems] = React.useState(0)

React.useEffect(() => {
  getAllItems().then(data => setItems(data));
}, []);


  return (
    <>
      <CssBaseline>
        <Container maxWidth="lg" sx={{ pt: "40px" }}>
          <Paper elevation={3} maxWidth="500px">
            <Grid container spacing={2}>

              {/* This is the left side of the Paper */}
              {/* This contains on the Product @Photo */}

              <Grid item md={6}
                    sx={{
                  mb: '20px', 
                }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="700"
                    image="https://images.unsplash.com/photo-1620456456327-264dbf934b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGJsYWNrJTIwdCUyMHNoaXJ0JTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                  />
                </Card>
              </Grid>
              <Grid item md={6} justifyContent="center">
                <Grid
                  container
                  spacing={6}
                  direction="row"
                  justifyContent="center"
                  >
                  
                  {/* Product @Name */}
                  <Grid item sm={12}>
                    <Typography variant="h2">
                      Essential Crewneck Black
                    </Typography>
                  </Grid>

                    {/* Product @Size S M L XL */}
                  <Grid item sm={12} justifyContent="center">
                    <ToggleButtonGroup
                      color="secondary"
                      exclusive
                      value={size}
                      onChange={handleSize}
                    >
                      <ToggleButton value="small">S</ToggleButton>
                      <ToggleButton value="medium">M</ToggleButton>
                      <ToggleButton value="large">L</ToggleButton>
                      <ToggleButton value="x-large">XL</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

                    {/* Product @Quantity */}
                    {/* Only goes from 1-3 */}
                  <Grid item sm={12}>
                    <Select
                      labelId="item-quantity-select-label"
                      id="item-quantity-select"
                      value={quantity}
                      label="Quantity"
                      onChange={handleQuantity}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </Grid>

                    {/* Product @Price */}
                  <Grid item
                        xs={12}
                        justifyContent="center">
                  <Typography variant="h4">
                    $29.99
                  </Typography>
                  </Grid>

                    {/* @Add to Cart Button */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    justifyContent="center"
                    justifyItems="center"
                  >
                    <Button variant="contained" color="secondary">
                      Add to Cart
                    </Button>
                  </Grid>

                    {/* Product @Description */}
                  <Grid item sm={12}>
                    <Typography>
                      Our essential crewneck t-shirt, in a color that goes with
                      everything. Wear it everyday, with everything.
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </CssBaseline>
    </>
  );
}

export default Item;