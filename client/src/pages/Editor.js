import ImageIcon from '@mui/icons-material/Image';
import { Button, Container, Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import ImageDisplay from '../components/ImageDisplay';
import Navbar from '../components/Navbar';
import { getArticle, postArticle, updateArticle } from '../requests';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export async function loader({ params }) {
    const article = await getArticle(params.articleId);
    return { article };
}

export async function writeAction({ request, params }) {
    const formData = await request.formData();
    const article = Object.fromEntries(formData);
    delete article.id;
    await postArticle(article);
    return redirect('/dashboard');
}

export async function editAction({ request, params }) {
    const formData = await request.formData();
    console.log(formData.thumbnail);
    const article = Object.fromEntries(formData);
    console.log(article);
    await updateArticle(article);
    return redirect(`/read/${params.articleId}`);
}



export default function Editor() {
    const { article } = useLoaderData() ?? '';
    const [image, setImage] = useState(article?.thumbnail);
    const navigate = useNavigate();
    return (
        <Form method='post' encType='multipart/form-data'>
            <Container maxWidth="md">
                <Navbar />
                <ImageDisplay image={image} />
                <Grid container spacing={3}>

                    <VisuallyHiddenInput name='id' type='number' value={article?.id} />

                    <Grid item xs={10} >
                        <TextField fullWidth name='title' defaultValue={article?.title} id="title" label="Title" variant="outlined" />

                    </Grid>
                    <Grid item xs={1}>
                        <Button component="label" variant="contained" startIcon={<ImageIcon />} for={'thumbnail'}>
                            <VisuallyHiddenInput name='thumbnail' id='thumbnail' accept='image/jpeg' type="file" />
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth multiline name='summary' defaultValue={article?.summary} id="summary" label="Summary" variant="outlined" minRows={5} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth multiline name='body' defaultValue={article?.body} id="body" label="Body" variant="outlined" minRows={10} />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack direction={'row'}>
                            <Button type='submit'>Done</Button>
                            <Button onClick={() => { navigate(-1) }}>Cancel</Button>
                        </Stack>
                    </Grid>

                </Grid>

            </Container>
        </Form >
    );
}