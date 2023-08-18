import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery, Typography, Grid } from '@mui/material';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card'; // 追加
import CardContent from '@mui/material/CardContent'; // 追加
import Container from "@mui/material/Container";

// assets
// import { IconChevronRight } from '@tabler/icons';


import Header from './Header';
import Sidebar from './Sidebar';

import Home from "../../views/Home";

const drawerWidth = 260

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const TestLayout = () => {

    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Main open={true}>
                <DrawerHeader />
                <Outlet />
            </Main>

        </Box>

        // <Grid container>
        //     <Grid item xs={12}>
        //         {/* <Header /> */}
        //     </Grid>
        //     <Grid item xs>
        //         {/* <Card>
        //             <CardContent>
        //                 <Outlet />
        //             </CardContent>
        //         </Card> */}
        //         {/* main content */}
        //         <Main theme={theme} open={true}>
        //             {/* breadcrumb */}
        //             {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
        //             <Outlet />
        //         </Main>
        //     </Grid>
        // </Grid>
    )
};


export default TestLayout;

