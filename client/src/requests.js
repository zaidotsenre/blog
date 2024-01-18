import settings from './settings.json';

export async function getArticles(page) {
    let response;
    try {
        response = await fetch(`${settings.urls.api}/articles/${page}`);
        response = await response.json();
        response.forEach(r => {
            r.thumbnail = atob(r.thumbnail);
        });
    } catch (e) {
        console.log(`requests.js = getArticle: ${e}`);
    }
    return response;
}


export async function getArticle(articleId) {
    let response;
    try {
        response = await fetch(`${settings.urls.api}/article/${articleId}`);
        response = await response.json();
        response.thumbnail = atob(response?.thumbnail);
    } catch (e) {
        console.log(`requests.js - getArticle: ${e}`);
    }
    return response;
}

export async function postArticle(article) {
    let fileReader;
    try {
        fileReader = new FileReader();
        fileReader.readAsDataURL(article?.thumbnail);
        fileReader.onload = async function () {
            article.thumbnail = btoa(fileReader.result);
            await fetch(`${settings.urls.api}/article`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(article),
            });
        }
    } catch (e) {
        console.log(`requests.js - postArticle: ${e}`);
    }

    return;
}

export async function updateArticle(article) {
    let response;
    try {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(article?.thumbnail);
        fileReader.onload = async function () {
            article.thumbnail = btoa(fileReader?.result);
            response = await fetch(`${settings.urls.api}/article/${article.id}`, {
                method: 'PUT',
                headers: {
                    "accept": "image/jpeg",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(article),
            });
        }
    } catch (e) {
        console.log(`requests.js - updateArticle: ${e}`);
    }

    return
}

export async function deleteArticle(articleID) {
    let response;
    try {
        response = await fetch(`${settings.urls.api}/article/${articleID}`, {
            method: 'DELETE',
        });
    } catch (e) {
        console.log(`requests.js - deleteArticle: ${e}`);
    }
    return response;
}
