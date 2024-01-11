import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getArticle } from '../requests';
import settings from '../settings.json';

export default function FeaturedArticle() {
    const [article, setArticle] = useState();
    useEffect(() => {
        getArticle(settings.featuredArticle.id).then((response) => setArticle(response));
    }, []);
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${article && article.thumbnail})`,
                minHeight: 300,
                height: { md: 400, },
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={article && article.thumbnail} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.5)',
                    height: '100%'
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom  >
                            {article && article.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {article && article.summary}
                        </Typography>
                        <Button variant='contained' component={RouterLink} to={`/read/${article && article.id}`}>Continue reading...</Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper >
    );
}