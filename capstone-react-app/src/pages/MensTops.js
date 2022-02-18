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
                        image="https://images.unsplash.com/photo-1620456456327-264dbf934b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGJsYWNrJTIwdCUyMHNoaXJ0JTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
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
                            image="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
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
                        image="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Essential Crewneck Olive
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
                        image="https://images.unsplash.com/photo-1592728036073-d0ae31a18fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fG1hbGUlMjBzaGlydCUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
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