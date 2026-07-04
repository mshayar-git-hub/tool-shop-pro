import React from 'react'

const Advertise = () => {
    return (
        <>
            <section className="promo-section py-5">

                <div className="container">

                    <div className="row g-4">

                        {/* <!-- Left Banner --> */}

                        <div className="col-lg-7">

                            <div className="promo-card promo-left">

                                <div className="promo-overlay"></div>

                                <div className="promo-content">

                                    <span className="offer-tag">

                                        LIMITED TIME OFFER

                                    </span>

                                    <h2>

                                        Professional Power Tools

                                    </h2>

                                    <h1>

                                        UP TO

                                        <span>

                                            40% OFF

                                        </span>

                                    </h1>

                                    <p>

                                        Explore premium drills, grinders, saws,
                                        welding machines and industrial equipment
                                        from the world's leading brands.

                                    </p>

                                    <a href="#" className="btn btn-shop">

                                        Shop Collection

                                        <i className="bi bi-arrow-right"></i>

                                    </a>

                                </div>

                                <img src="images/banner/drill.png"
                                    className="promo-image"
                                    alt="" />

                            </div>

                        </div>



                        {/* <!-- Right Column --> */}

                        <div className="col-lg-5">

                            <div className="row g-4">

                                {/* <!-- Card 1 --> */}

                                <div className="col-12">

                                    <div className="mini-banner electrical">

                                        <div>

                                            <small>

                                                NEW ARRIVAL

                                            </small>

                                            <h3>

                                                Electrical Accessories

                                            </h3>

                                            <a href="#">

                                                Explore →

                                            </a>

                                        </div>

                                        <img src="images/banner/electrical.png"
                                            alt="" />

                                    </div>

                                </div>




                                <div className="col-12">

                                    <div className="mini-banner safety">

                                        <div>

                                            <small>

                                                PREMIUM QUALITY

                                            </small>

                                            <h3>

                                                Safety Equipment

                                            </h3>

                                            <a href="#">

                                                Shop Now →

                                            </a>

                                        </div>

                                        <img src="images/banner/helmet.png"
                                            alt="" />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Advertise
