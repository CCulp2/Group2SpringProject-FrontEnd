import { Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'; 
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container, Button, Box, IconButton, Tabs, Tab } from '@mui/material';

const drawerWidth = 100;

function LeftNavBar() {
    return (
        <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                aria-label="LeftNavBar"
                sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Tab label='Tops'></Tab>
                    <Tab label='Bottoms'></Tab>
                    <Tab label='Accessories'></Tab>
                    <Tab label='OuterWear'></Tab>                   
            </Tabs>
        </Box>
        </>
    )
}

export default LeftNavBar;