import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import ContactCard from '../components/ContactCard';
import FeaturedArticle from '../components/FeaturedArticle';
import Navbar from '../components/Navbar';
import Paginator from '../components/Paginator';
import { getArticles } from '../requests';
import settings from '../settings.json';


export async function loader({ params }) {
    const articles = await getArticles(params.page ? params.page : 1);
    return [{ articles }, params.page];
}

export default function Home() {
    const [{ articles }, page] = useLoaderData();
    return (
        <Container maxWidth="md">
            <Navbar />
            <FeaturedArticle />
            <Grid container spacing={4}>
                <Grid xs={12} md={7}>
                    <Stack spacing={2}>
                        {
                            articles?.map((article) => (
                                <ArticleCard key={article.id} articleId={article.id} thumbnail={article.thumbnail} title={article.title} summary={article.summary} date={article.date} />
                            ))
                        }
                        {console.log(page)}
                        <Paginator page={page}></Paginator>
                    </Stack>
                </Grid>
                <Grid xs={12} md={5}>
                    {settings.features.about_me ? <ContactCard /> : null}
                </Grid>
            </Grid >
        </Container>
    );
}


