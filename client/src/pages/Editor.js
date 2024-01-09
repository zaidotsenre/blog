import { Form } from 'react-router-dom';
import { createArticle } from '../requests';

export async function action() {
    const post = await createArticle();
    return { post };
}

export default function Editor() {
    return (
        <div className='Editor'>
            <Form method='post'>
                <input type='text' placeholder='Title'></input>
                <textarea placeholder='Type your content here...'></textarea>
                <button type='submit'>Done</button>
            </Form>
        </div>
    );
}