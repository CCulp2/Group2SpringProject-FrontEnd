import { Container, CssBaseline, Divider, Grid, Typography, makeStyles, CardActionArea } from "@mui/material";
import { maxWidth } from "@mui/system";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';




function MensShorts() {

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
                        image="https://images.unsplash.com/photo-1597361768670-1831fdf2baef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHRhbiUyMHNob3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Chill Chino Sand
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
                            image="https://images.unsplash.com/photo-1586996387152-993a91b29f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGtoYWtpJTIwc2hvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Chill Chino Grey
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
                        image="https://images.unsplash.com/photo-1597361767997-7b0433fe5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtoYWtpJTIwc2hvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Chill Chino Olive
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
                        image="https://images.unsplash.com/photo-1498424677430-1fa28d453897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Chill Chino Black
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

export default MensShorts;