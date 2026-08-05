import React, { useEffect, useState, useContext } from 'react'
import api from './api/api';
import { DashContext } from '../context/DashContext';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

const Sidebar = () => {

    // const [category, setCategory] = useState([]);
    const {getCategory, setSelectedCategory , category, selectedCategory, clearFilter} = useContext(DashContext);
    const {loading} = useContext(AuthContext);
    

    useEffect(
        () => {
            getCategory();
        }, [selectedCategory]
    );

    if (loading) {
        return (
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <Loading /></div></div>)
    }

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
                                    <input type="radio" 
                                            name='category'
                                            value = {category.id}
                                            checked = {selectedCategory == category.id }
                                            onChange={(e)=> setSelectedCategory(e.target.value)} /> 
                                    {" "}
                                    {category.cat_name}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={clearFilter}>
                        <b>Clear Filters</b>
                    </button>

                </div>


            </div>



            

        </>
    )
}

export default Sidebar
