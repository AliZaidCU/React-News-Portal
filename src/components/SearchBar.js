import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticlesAsync } from '../redux/articlesSlice';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchArticlesAsync({ category: '', query, page: 1 }));
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for articles..."
                className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-2">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
