import { func } from "prop-types";
import { json } from "react-router";

export async function getArticles() {
    let response = (await fetch(`http://localhost:5220/articles`));
    response = await response.json();
    response.forEach(r => {
        r.thumbnail = atob(r.thumbnail);
    });
    console.log(response);
    return response;
}


export async function getArticle(articleId) {
    let response = await fetch(`http://localhost:5220/article/${articleId}`);
    response = await response.json();
    response.thumbnail = atob(response.thumbnail);
    console.log(response);
    return response;
}

export async function postArticle(article) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(article.thumbnail);
    fileReader.onload = async function () {
        article.thumbnail = btoa(fileReader.result);
        article.seriesid = parseInt(article.seriesid);
        const response = await fetch(`http://localhost:5220/article`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        });
    }

    return;
}

export async function updateArticle(article) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(article.thumbnail);
    fileReader.onload = async function () {
        article.thumbnail = btoa(fileReader.result);
        article.seriesid = parseInt(article.seriesid);
        const response = await fetch(`http://localhost:5220/article/${article.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        });
    }
    return
}
