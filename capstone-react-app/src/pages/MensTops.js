import {  CssBaseline,  Grid, Typography,  CardActionArea } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {getItemsByType} from '../Components/Items/ItemsService';
import {mensTops} from "../data";


function MensTops() {


    const [items, setItems] = React.useState(0) 

    React.useEffect(() => {
        getItemsByType("MENS", "TOPS").then((data) => setItems(data));
    })

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
                        image={item.img}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {item.title}
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

export default MensTops;
