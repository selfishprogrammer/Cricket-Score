import React, { Fragment } from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { getScore } from './Fetch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Card1 = ({ match }) => {
    const [score, setScore] = useState([]);
    const [open, setOpen] = useState(false);
    const handelScore = (id) => {
        getScore(id).then((data) => { setScore(data);
            console.log(data) }).catch((error) => console.log(error));
        console.log(score);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const getDialog = () => {
        return ( <
            Dialog open = { open }

            onClose = { handleClose }

            >
            <
            DialogTitle id = "alert-dialog-slide-title" > { "Match Report" } < /DialogTitle> <
            DialogContent >
            <
            DialogContentText id = "alert-dialog-slide-description" >
            <
            Typography > { score.stat }

            <
            /Typography> <
            Typography style = {
                { fontStyle: "italic", fontWeight: "bold" } } > { score.matchStarted ? "Started" : "Still Not Started" } { " " }

            <
            /Typography>

            <
            Typography style = {
                { fontStyle: "italic", fontWeight: "bold" } } > { score.score }

            <
            /Typography> <
            /DialogContentText> <
            /DialogContent> <
            DialogActions >
            <
            Button onClick = { handleClose }
            variant = "outlined"
            color = "primary" >
            Disagree <
            /Button>

            <
            /DialogActions> <
            /Dialog>

        );
    }

    return ( <
        Fragment >

        <
        Card style = {
            { marginTop: 20, borderRadius: 15 } } >
        <
        CardContent >
        <
        Grid container justify = "center" >
        <
        Typography style = {
            { fontFamily: "itailic" } }
        variant = "h4" >


        Live Score Tracker



        <
        /Typography> <
        /Grid> <
        Grid container style = {
            { marginTop: 30, } } >
        <
        Grid sm = "2" > < /Grid> <
        Grid sm = "8" >
        <
        Typography variant = "h5"
        style = {
            { color: "green", fontStyle: "italic" } } > { match["team-1"] } <
        /Typography>

        <
        Typography color = "textSecondary" >
        <
        img src = { require("./vs.png") }
        style = {
            { height: 80, width: 100 } }
        /> <
        /Typography>


        <
        Typography variant = "h5"
        style = {
            { color: "red", fontStyle: "italic" } } > { match["team-2"] } <
        /Typography> <
        /Grid> <
        Grid sm = "2" > < /Grid> <
        /Grid> <
        /CardContent> <
        CardActions >
        <
        Grid container justify = "center" >
        <
        Button onClick = {
            () => {
                handelScore(match.unique_id);

                handleClickOpen();
            }
        }
        style = {
            { margin: 10 } }
        variant = "contained"
        color = "primary" >
        SCORE <
        /Button> <
        Button style = {
            { margin: 10 } }
        variant = "contained"
        color = "secondary" >

        { new Date(match.dateTimeGMT).toLocaleString() } <
        /Button> <
        /Grid> <
        /CardActions> <
        /Card> { getDialog() }

        <
        /Fragment>

    )






}




export default Card1;