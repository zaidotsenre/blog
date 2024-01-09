export async function getPosts() {
    const posts = await fetch(`http://localhost:5220/posts`).then(
        (response) => response.json().then(
            result => result
        )
    );
    return posts;
}


export async function getPost(postID) {
    const post = await fetch(`http://localhost:5220/post/${postID}`).then(
        (response) => response.json().then(
            (result) => { return result; }
        )
    );
    return post;
}