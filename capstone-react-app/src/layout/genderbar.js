import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, Button, Box, IconButton, Divider, } from '@mui/material';

function genderbar() {
    return (
        <>
        <CssBaseline />
        <Container disableGutters maxWidth="false" >
            <Grid container spacing={3} alignItems="center" justifyItems="center" justifyContent="center" sx={{ bgcolor: '#DCEEF2', height: '10vh' }}>
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