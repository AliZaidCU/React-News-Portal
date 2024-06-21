import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite } from '../redux/favoritesSlice';

const ArticleCard = ({ article }) => {
    const placeholderImage = 'https://via.placeholder.com/150';
    const dispatch = useDispatch();

    const handleError = (e) => {
        e.target.src = placeholderImage;
    };

    const imageUrl = article.urlToImage ? article.urlToImage : placeholderImage;

    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={article.title} onError={handleError} />
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <Link to={`/article/${encodeURIComponent(article.url)}`} className="btn btn-primary">
                    Read More
                </Link>
                <button
                    className="btn btn-secondary"
                    onClick={() => dispatch(addFavorite(article))}
                >
                    Add to Favorites
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;



