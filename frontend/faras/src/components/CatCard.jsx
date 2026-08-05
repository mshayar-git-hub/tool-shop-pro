import React, { useState, useEffect, useContext } from 'react'
import api from "./api/api";
import { DashContext } from '../context/DashContext';
import Loading from './Loading';
import { AuthContext } from '../context/AuthContext';

const CatCard = () => {

    const {category , setCategory, getCategory} = useContext(DashContext);
    const {loading} = useContext(AuthContext);

    useEffect( () => {
            getCategory();
        }, [] );

    if (loading) {
        return (
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <Loading /></div></div>)
    }


    return (
        <>
            <section className="quick-shop">
                <div className="container">
                    <div className="row">

                        {
                            category.map((category) => (
                                    <div className="col-lg-3 col-md-6" key={category.id}>
                                        <div className="quick-card">
                                            <div className="quick-icon">
                                                <i className="bi bi-hammer"></i>
                                            </div>

                                            <h5>{category.cat_name}</h5>
                                        </div>
                                    </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default CatCard
