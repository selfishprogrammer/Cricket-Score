import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import Card1 from './Card1';

import Navbar from './Navbar';
import { getMatches } from './Fetch';

function App() {

    const [matches, setmatches] = useState([]);

    useEffect(() => {
        getMatches().then((data) => setmatches(data.matches)).catch()

    }, [])

    console.log(matches)

    return ( <
        div className = "App" >

        <
        Navbar / >
        <
        Grid container >
        <
        Grid sm = "3" > < /Grid> <
        Grid sm = "6" > {

            matches.map((match) => ( <
                Card1 key = { match.uniqueId }
                match = { match }
                />
            ))


        }

        <
        /Grid> <
        Grid sm = "3" > < /Grid> <
        /Grid> <
        /div>
    );
}

export default App;