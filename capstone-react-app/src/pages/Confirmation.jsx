import {  CssBaseline,  Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

// This is the confirmation page, which is displayed after the user has completed an order.

function confirmation() {
  return (
    <CssBaseline>
      <Paper elevation={3} sx={{ maxWidth: 750, marginX: 'auto', marginY: 15}}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" color="secondary" fontWeight="bold">
            Thank you for your order!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Your order number is:         
            </Typography>
        </Grid>

        {/* @OrderNumber */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" fontWeight="bold" color="secondary">
            #123456789
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            If you have any questions, please call us at 1-800-555-1234.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" fontWeight="bold" sx={{pb: 10}}>
            Thank you for shopping with us!
          </Typography>
        </Grid>
      </Grid>
      </Paper>
    </CssBaseline>
  )
}

export default confirmation;
