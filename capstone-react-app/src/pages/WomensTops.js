import { Container, CssBaseline, Divider, Grid, Typography, makeStyles, CardActionArea } from "@mui/material";
import { maxWidth } from "@mui/system";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';




function MensTops() {

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
                        image="https://images.unsplash.com/photo-1604342681413-6954ddca1e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB0JTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Essential Crewneck Black
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
                            image="https://images.unsplash.com/photo-1519345997025-14aba50d7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvbWFuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Essential Crewneck Grey
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
                        image="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Essential Crewneck Yellow
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
                        image="https://images.unsplash.com/photo-1622445275649-b1922cc3e837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjB0JTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Essential Crewneck White
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

export default MensTops;