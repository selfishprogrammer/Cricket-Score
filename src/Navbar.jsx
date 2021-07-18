import { AppBar, Button, IconButton, Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';


const Navbar = () => {



    return (

        <
        AppBar position = "static" >
        <
        Toolbar >
        <
        IconButton edge = "start"
        color = "inherit" >
        <
        MenuIcon / >
        <
        /IconButton> <
        Typography variant = "h6" >
        Live Score Tracker <
        /Typography>

        <
        /Toolbar> <
        /AppBar>

    );
}

export default Navbar;