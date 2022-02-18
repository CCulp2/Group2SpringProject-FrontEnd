import { Container, CssBaseline, Divider, Grid, Typography, makeStyles, CardActionArea } from "@mui/material";
import { maxWidth } from "@mui/system";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';




function MensPants() {

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
                        image="https://images.unsplash.com/photo-1511105043137-7e66f28270e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Selvedge Denim
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
                            image="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lbnMlMjBwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Everyday Chinos Sand
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
                        image="https://images.unsplash.com/photo-1625622885449-eb5f44a84794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2xpdmUlMjBwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Everyday Chinos Olive
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
                        image="https://images.unsplash.com/photo-1559582800-b7f6bf426431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1599&q=80"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Everyday Chinos Grey
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

export default MensPants;