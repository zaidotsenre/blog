import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
import DashboardArticleCard from '../components/DashboardArticleCard';
import { getArticles } from '../requests';
import settings from '../settings.json';

export async function loader({ params }) {
    const articles = await getArticles(params.page ? params.page : 1);
    return [{ articles }, params.page];
}

export default function Dashboard() {
    const navigate = useNavigate();
    const [sidebarState, setSidebarState] = useState('false');
    const [{ articles }, page] = useLoaderData();

    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <IconButton onClick={() => { setSidebarState(!sidebarState) }}>
                    <MenuIcon />
                </IconButton >
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {settings.appTitle}
                </Typography>
            </Toolbar >
            <Grid container>
                <Grid xs={12} md={3} sx={{ p: 2, display: sidebarState ? 'flex' : 'none' }}>
                    <List >
                        <ListItem>
                            <ListItemText primary="Articles" />
                        </ListItem>
                        <Divider variant="middle" component="li" />
                    </List>
                </Grid>
                <Grid container spacing={2} xs={12} md={sidebarState ? 9 : 12} sx={{ p: 2, display: { xs: sidebarState ? 'none' : 'flex', md: 'flex' } }}>
                    {
                        articles?.map((article) => (
                            <Grid xs={12} md={6} key={article.id}>
                                <DashboardArticleCard key={article.id} articleId={article.id} thumbnail={article.thumbnail} title={article.title} summary={article.summary} date={article.date} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid >

            <IconButton onClick={() => navigate('/write')} color="primary" sx={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                height: '100px',
                width: '100px'
            }}>
                <AddCircleIcon color='primary' sx={{
                    height: '100%',
                    width: '100%'
                }} />
            </IconButton>
        </>

    );
}


