import React, { useEffect, useState } from 'react'
import api from './api/api';

const Sidebar = () => {

    const [category, setCategory] = useState([])

    useEffect(
        () => {
            api.get('categories/')
                .then((response) => {
                    setCategory(response.data);
                })
                .catch((error) => {
                    console.log("error");
                })
        }, []
    );

    return (
        <>
            <div className="col-lg-3">

                <div className="product-sidebar">

                    <div className="filter-box">
                        <h4>Search</h4>

                        <div className="position-relative">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Products..."
                            />
                            <i className="bi bi-search search-icon"></i>
                        </div>
                    </div>

                    <div className="filter-box mt-4">
                        <h4>Categories</h4>

                        <ul>
                            {category.map((category) => (
                                <li key={category.id}>
                                    <input type="checkbox" /> {category.cat_name}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Sidebar
