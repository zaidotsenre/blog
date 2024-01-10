import { Form, redirect, useLoaderData } from 'react-router-dom';
import { getArticle, postArticle, updateArticle } from '../requests';

export async function loader({ params }) {
    const article = await getArticle(params.articleId);
    return { article };
}

export async function writeAction({ request, params }) {
    const formData = await request.formData();
    const article = Object.fromEntries(formData);
    await postArticle(article);
    return redirect('/');
}

export async function editAction({ request, params }) {
    const formData = await request.formData();
    const article = Object.fromEntries(formData);
    console.log(article);
    await updateArticle(article);
    return redirect(`/read/${params.articleId}`);
}



export default function Editor() {
    const { article } = useLoaderData();
    return (
        <div className='Editor'>
            <Form method='post' encType='multipart/form-data'>
                <input name='id' type='hidden' value={article.id}></input>
                <img src={article.thumbnail} alt='Current thumbnail'></img>
                <input name='thumbnail' type='file' ></input>
                <textarea name='summary' placeholder='Sumary...' defaultValue={article.summary}></textarea>
                <input name='seriesid' type='number' defaultValue={article.seriesID}></input>
                <input name='title' type='text' placeholder='Title' defaultValue={article.title}></input>
                <textarea name='body' placeholder='Type your content here...' defaultValue={article.body}></textarea>
                <button type='submit'>Done</button>
            </Form>
        </div >
    );
}