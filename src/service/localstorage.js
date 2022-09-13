export const getListArticles = () => {
	if (!localStorage["articles"]) {
		localStorage["articles"] = "[]";
	}
	let articles = localStorage["articles"];
	articles = JSON.parse(articles);
	return articles;
};

export const addArticle = (article) => {
	const articles = getListArticles();
	articles.push(article);
	localStorage["articles"] = JSON.stringify(articles);
};

export const getArticleById = (id) => {
	const articles = getListArticles();
	const article = articles.find((article) => article.id === id);
	return article;
};
