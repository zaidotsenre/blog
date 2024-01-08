import { useState } from 'react';
import { useEffect } from 'react';
import './Reader.css';

function Reader(props) {

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5220/post/${props.id}`).then(
            (response) => response.json().then(
                result => setPost(result)
            )
        );
    });

    return (
        <div className="Reader">
            <header className='Reader-header'>
                <h1>{post.title}</h1>
            </header>
            <main className='Reader-main'>
                <p>
                    {post.body}
                </p>
            </main>
        </div>
    );
}

export default Reader;
