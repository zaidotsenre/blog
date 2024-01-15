import { Card, CardContent, Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import moment from 'moment';
import * as React from 'react';
import { useLoaderData } from 'react-router';
import BackButton from '../components/BackButton';
import { getArticle } from '../requests';
import Navbar from '../components/Navbar';

export async function loader({ params }) {
    const article = await getArticle(params.articleId);
    return { article };
}

export default function Reader() {
    const { article } = useLoaderData();
    return (
        <Container maxWidth="md">
            <Navbar />
            <Card>
                <CardContent>
                    <Paper
                        sx={{
                            position: 'relative',
                            backgroundColor: 'grey.800',
                            color: '#fff',
                            mb: 4,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(data:image/jpeg;base64,${article?.thumbnail})`,
                            minHeight: 300,
                            height: { md: 400, },
                        }}
                    >
                        {/* Increase the priority of the hero background image */}
                        {<img style={{ display: 'none' }} src={article.thumbnail} alt='Thumbnail' />}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                backgroundColor: 'rgba(0,0,0,.3)',
                            }}
                        />
                    </Paper>
                    <Typography gutterBottom variant="h3" component="div">
                        {article.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {moment(article.date).format('LL')}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {article.body}
                    </Typography>
                </CardContent>
                <BackButton />
            </Card >
        </Container>

    );
}
