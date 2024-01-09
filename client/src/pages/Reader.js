
import { useLoaderData } from 'react-router';
import placeholder from '../img/placeholder.png';
import { getPost } from '../requests';
import './Reader.css';


export async function loader({ params }) {
    const post = await getPost(params.postId);
    return { post };
}

export default function Reader(props) {

    const { post } = useLoaderData();

    return (
        <div className="Reader">
            <img src={placeholder}></img>
            <h1>{post.title}</h1>
            {post.body}
        </div >
    );
}
