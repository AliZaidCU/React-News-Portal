import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticlesAsync } from '../redux/articlesSlice';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

const ArticleList = () => {
    const dispatch = useDispatch();
    const { articles, status, error } = useSelector((state) => state.articles);
    const category = useSelector((state) => state.categories);
    const page = useSelector((state) => state.pagination);

    useEffect(() => {
        dispatch(fetchArticlesAsync({ category, page }));
    }, [dispatch, category, page]);

    if (status === 'loading') {
        return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>;
    }

    if (status === 'failed') {
        return <div>Page Not Found</div>;
    }

    return (
        <div className="container">
            <SearchBar />
            <div className="select-container">
                <CategoryFilter />
            </div>
            <div className="row">
                {articles.map((article) => (
                    <div className="col-md-4" key={article.url}>
                        <ArticleCard article={article} />
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default ArticleList;


