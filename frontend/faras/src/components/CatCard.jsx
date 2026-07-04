import React, { useState, useEffect } from 'react'
import api from "./api/api";

const CatCard = () => {

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
