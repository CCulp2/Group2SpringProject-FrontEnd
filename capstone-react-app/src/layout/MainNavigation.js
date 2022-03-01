import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, Button, Box, IconButton, makeStyles, rgbToHex, } from '@mui/material';
import { AccountCircle, ShoppingCartRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



function MainNavigation() {
    const navigate = useNavigate();

    const handleNavClick = (destination) => {
        navigate(destination);
    }

    return (
        <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='relative' >
                <Toolbar>
                    <Box sx={{ m: 0}}>
                    
                        <Button variant='text' color='secondary' size='large' onClick={() => {
                            handleNavClick('/')
                        }}>
                            PrickleBack
                        </Button>

                    
                        <Button variant='contained' color='secondary' size='small' onClick={() => {
                            handleNavClick('/test')
                        }}>
                            getSendTest
                        </Button>
                    </Box>   
                    <Box sx={{ ml: "auto"}}> 
                    <IconButton aria-label='Profile' color='secondary' onClick={() => {
                            handleNavClick('/login');
                        }}>
                        <AccountCircle />
                    </IconButton>
                    <IconButton aria-label='ShoppingCartIcon' color='secondary'   >
                        <ShoppingCartRounded />
                    </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default MainNavigation;