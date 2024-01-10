
import { Avatar, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { auto } from '@popperjs/core';
import * as React from 'react';
import avatar from '../img/avatar.png';
import SocialLinks from './SocialLinks';


export default function ContactCard(props) {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardContent >
                <Box width={'100%'} justifyItems={'center'} alignItems={'center'}>
                    <Avatar src={avatar} alt="Headshot of the author" sx={{
                        ml: auto,
                        mr: auto,
                        mb: 3,
                        mt: 2,
                        minHeight: 100,
                        minWidth: 100
                    }} />
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                    Ernesto Diaz
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <SocialLinks />
            </CardActions>
        </Card >
    );

}


