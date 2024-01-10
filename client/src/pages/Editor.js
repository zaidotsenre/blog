import { Form, redirect } from 'react-router-dom';
import { postArticle } from '../requests';

export async function action({ request, params }) {
    const formData = await request.formData();
    const article = Object.fromEntries(formData);
    console.log(article);
    await postArticle(article);
    return redirect('/');
}

export default function Editor() {
    return (
        <div className='Editor'>
            <Form method='post' encType='multipart/form-data'>
                <input name='thumbnail' type='file'></input>
                <textarea name='summary' placeholder='Sumary...'></textarea>
                <input name='seriesid' type='number'></input>
                <input name='title' type='text' placeholder='Title'></input>
                <textarea name='body' placeholder='Type your content here...'></textarea>
                <button type='submit'>Done</button>
            </Form>
        </div>
    );
}