import { Container, CssBaseline, Divider, Grid, Typography, makeStyles, CardActionArea } from "@mui/material";
import { maxWidth } from "@mui/system";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';




function MensSweaters() {

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
                        image="https://images.unsplash.com/photo-1519805614447-6f49142e6697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwc3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Everyday Knit Sand
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 500}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300"
                            image="https://images.unsplash.com/photo-1531750535072-7f76473f90ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwc3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Everyday Knit Grey
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Everyday Knit Maroon
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        image="https://images.unsplash.com/photo-1606246521962-399c38ab3d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fG1hbiUyMHN3ZWF0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Everyday Knit Cream
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

export default MensSweaters;