import { Card, CardContent, CardMedia, Container, CssBaseline, Grid, Typography, makeStyles, CardHeader, CardActions, Button } from "@mui/material";
import { maxWidth } from "@mui/system";

function HomePage() {
    return ( 
        <>
        <CssBaseline>
            <Container maxWidth='xl'>
            <Grid container spacing={1} direction="row" justifyContent="center" >
                <Grid item>
                    <Card>
                        <CardMedia
                            component="img"
                            height="500"
                            image="https://images.unsplash.com/photo-1644347542604-2ae09ac7f24a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            />
                        <CardActions>
                            <Button variant="secondary">Shop the Men's Collection
                            </Button>
                        </CardActions>     
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardMedia
                        component="img"
                        height="500"
                        image="https://images.unsplash.com/photo-1643932696437-c5747e988b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        />
                        <CardActions>
                            <Button variant="secondary"> Shop the Women's Collection</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </CssBaseline> 
        </>
    )
}

export default HomePage;