
import { useLoaderData } from 'react-router';
import placeholder from '../img/placeholder.png';
import { getArticle } from '../requests';
import './Reader.css';


export async function loader({ params }) {
    const article = await getArticle(params.articleId);
    return { article };
}

export default function Reader() {

    const { article } = useLoaderData();
    return (
        <div className="Reader">
            <img src={article.thumbnail}></img>
            <h1>{article.title}</h1>
            <i>{new Date(article.date).toLocaleDateString()}</i>
            <br></br>
            <br></br>
            <div>{article.body}</div>
        </div >
    );
}
