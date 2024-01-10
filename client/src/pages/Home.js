import Stack from '@mui/material/Stack';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useLoaderData } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import ContactCard from '../components/ContactCard';
import FeaturedArticle from '../components/FeaturedArticle';
import { getArticles } from '../requests';
import settings from '../settings.json';



export async function loader() {
    const articles = await getArticles();
    return { articles };
}

export default function Home() {

    // TODO: modify client/API to retrieve only the necessary data. ie. not the full post, and not all the posts.
    const { articles } = useLoaderData();
    const featuredArticle = articles.shift();
    return (
        <>
            <FeaturedArticle id={featuredArticle.id} thumbnail={featuredArticle.thumbnail} title={featuredArticle.title} summary={featuredArticle.summary} />
            <Grid container spacing={4}>
                <Grid xs={12} md={7}>
                    <Stack spacing={2}>
                        {
                            articles?.map((article) => (
                                <ArticleCard key={article.id} articleId={article.id} thumbnail={article.thumbnail} title={article.title} summary={article.summary} />
                            ))
                        }
                    </Stack>
                </Grid>
                <Grid xs={12} md={5}>
                    {settings.features.about_me ? <ContactCard /> : null}
                </Grid>
            </Grid >
        </>

    );
}


