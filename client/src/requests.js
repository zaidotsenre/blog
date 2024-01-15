import settings from './settings.json';

export async function getArticles(page) {
    let response = await fetch(`${settings.urls.api}/articles/${page}`);
    response = await response.json();
    response.forEach(r => {
        //r.thumbnail = atob(r.thumbnail);
    });
    return response;
}


export async function getArticle(articleId) {
    let response = await fetch(`${settings.urls.api}/article/${articleId}`);
    response = await response.json();
    //response.thumbnail = atob(response.thumbnail);
    return response;
}

export async function postArticle(article) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(article.thumbnail);
    fileReader.onload = async function () {
        //article.thumbnail = btoa(fileReader.result);
        article.seriesid = parseInt(article.seriesid);
        article.seriesorder = parseInt(article.seriesorder)
        await fetch(`${settings.urls.api}/article`, {
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
        //article.thumbnail = btoa(fileReader.result);
        article.seriesid = parseInt(article.seriesid);
        await fetch(`${settings.urls.api}/article/${article.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        });
    }
    return
}

export async function deleteArticle(articleID) {
    const response = await fetch(`${settings.urls.api}/article/${articleID}`, {
        method: 'DELETE',
    });
    return response;
}
