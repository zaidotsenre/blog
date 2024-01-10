import searchIcon from '../img/search.png';
import settings from '../settings.json';
import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { borderBottom } from "@mui/system";
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Navbar() {

    const navbarLinks = (
        <>
            <div className='navbar-bottom'>
                <h4>Option 1</h4>
                <h4>Option 2</h4>
                <h4>Option 3</h4>
            </div>

        </>
    );
    const navbarSearch = (
        <>
            <div className="navbar-search">
                <img src={searchIcon} alt='Search Icon'></img>
            </div>
        </>
    );
    return (


        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    Blog Name
                </Typography>
                {settings.features.search ? navbarSearch : null}
            </Toolbar >
            <Toolbar>
                {settings.features.navbar_links ? navbarLinks : null}
            </Toolbar>

        </React.Fragment>
    );
}

export default Navbar;
