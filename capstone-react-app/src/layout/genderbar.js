import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, Button, Box, IconButton, } from '@mui/material';

function genderbar() {
    return (
        <>
        <CssBaseline />
        <Container maxWidth="sm" align="center" display="flex" justifyContent="center">
            <Grid container spacing={2} align="center" padding="10px">
                <Grid item>
                    <Link to="/Men">
                        <Button variant='outlined' color='secondary'>
                            Men
                        </Button>
                    </Link>    
                </Grid>
                <Grid item>
                    <Link to="/Women">
                        <Button variant='outlined' color='secondary'>
                            Women
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default genderbar;