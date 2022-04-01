import {  CssBaseline,  Grid, Typography,  CardActionArea } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {mensSweaters} from '../data'
import {getItemsByGenderAndType} from '../Components/Items/ItemsService'




function MensSweaters() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {
        getItemsByGenderAndType("MALE", "SWEATERS").then((data) => {
            return setItems(data);
        });
    },[]);

    return  (
        <>
        <CssBaseline>
        <Grid container spacing={3} >
                {items.map(item => (
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image={item.product_img_url}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {item.product_name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                    ))}
        </Grid>
        </CssBaseline> 
        </>
    )
}

export default MensSweaters;
