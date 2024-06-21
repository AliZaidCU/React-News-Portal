import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Favorites from './components/Favorites';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ArticleList />} />
                    <Route path="/article/:url" element={<ArticleDetail />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

