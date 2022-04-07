import {  CssBaseline,  Grid, Typography,  CardActionArea } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function ItemDisplayCard(props) {
    
    return  (
        <>
        <CssBaseline>
        <Grid container spacing={3} >
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image={props.product_img_url}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {props.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
        </Grid>
        </CssBaseline> 
        </>
    )
}

export default ItemDisplayCard;