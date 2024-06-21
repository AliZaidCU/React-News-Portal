import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/paginationSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.pagination);

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => dispatch(setPage(page - 1))}>
                        Previous
                    </button>
                </li>
                <li className="page-item">
                    <span className="page-link">{page}</span>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={() => dispatch(setPage(page + 1))}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
