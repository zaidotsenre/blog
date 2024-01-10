import Navbar from '../components/Navbar';
import { useRouteError } from 'react-router';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BackButton from '../components/BackButton';

function ErrorPage(props) {

    const error = useRouteError();
    console.error(error);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" >
                <Navbar />
                <Box>
                    <Typography variant='h1' textAlign={'center'}>
                        Oops!
                    </Typography>
                    <Typography variant='body1' paragraph textAlign={'center'}>
                        Sorry, an error has occured.
                    </Typography>
                    <Typography variant='subtitle2' textAlign={'center'}>
                        {error.statusText || error.message}
                    </Typography>
                    <BackButton />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ErrorPage;
