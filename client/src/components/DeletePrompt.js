import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { deleteArticle } from "../requests";

export async function deleteAction({ request, params }) {
    const formData = await request.formData();
    const article = Object.fromEntries(formData);
    await deleteArticle(article);
    return redirect(`/`);
}

export async function loader({ params }) {
    return params.articleId;
}

export default function DeletePrompt() {

    const articleId = useLoaderData();

    return (
        <div className="DeletePrompt">
            <Form method='post' encType='multipart/form-data'>
                <p>Are you sure you want to delete this article?</p>
                <input name='id' type='hidden' value={articleId}></input>
                <button type='submit'>Delete</button>
                <Link to={`/read/${articleId}`} >Cancel</Link>
            </Form>
        </div >
    );
}