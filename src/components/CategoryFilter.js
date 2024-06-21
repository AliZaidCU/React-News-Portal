import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/categoriesSlice';

const categories = ['general', 'business', 'technology', 'entertainment', 'health', 'science', 'sports'];

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.categories);

    return (
        <div className="mb-3">
            <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => dispatch(setCategory(e.target.value))}
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
