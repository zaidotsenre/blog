export async function getArticle() {
    const response = await fetch(`http://localhost:5220/article`);
    return response.json;
}


export async function getArticle(articleId) {
    const response = await fetch(`http://localhost:5220/article/${articleId}`);
    return response.json;
}

