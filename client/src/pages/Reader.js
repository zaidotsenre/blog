import { Card, CardContent, Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import moment from 'moment';
import * as React from 'react';
import { useLoaderData } from 'react-router';
import BackButton from '../components/BackButton';
import { getArticle } from '../requests';
import Navbar from '../components/Navbar';
import ImageDisplay from '../components/ImageDisplay';

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
                    <ImageDisplay image={article.thumbnail} />
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
