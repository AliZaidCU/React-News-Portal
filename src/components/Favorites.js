import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h2>Favorites</h2>
            {favorites.length > 0 ? (
                <div className="row">
                    {favorites.map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <img src={article.urlToImage || 'https://via.placeholder.com/150'} className="card-img-top" alt={article.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => dispatch(removeFavorite(article))}
                                    >
                                        Remove from Favorites
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;
