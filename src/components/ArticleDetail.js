import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
    const { url } = useParams();
    const decodedUrl = decodeURIComponent(url);
    const article = useSelector((state) =>
        state.articles.articles.find((article) => article.url === decodedUrl)
    );

    console.log('URL:', decodedUrl);
    console.log('Article:', article);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <p>{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read the full article</a>
        </div>
    );
};

export default ArticleDetail;



