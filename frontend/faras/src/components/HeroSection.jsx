import React from 'react'

const HeroSection = () => {
    return (
        <>


            <section className="hero-section">

            <div className="hero-bg-circle hero-circle-1"></div>

            <div className="hero-bg-circle hero-circle-2"></div>

            <div className="hero-bg-circle hero-circle-3"></div>


            <div className="container">

            <div className="row align-items-center py-5">






            <div className="col-lg-6 mt-5 mt-lg-0">

            <div className="hero-tag">

            <i className="bi bi-stars"></i>

            Trusted by 10,000+ Builders

            </div>


            <h1>

            Everything You Need

            <span>

            To Build Better

            </span>

            </h1>


            <p>

            Premium building materials, industrial tools,
            electrical accessories, plumbing supplies,
            hardware and safety equipment delivered
            to your doorstep.

            </p>



            <div className="hero-buttons">

            <a href="#" className="btn btn-shop">

            Shop Now

            <i className="bi bi-arrow-right"></i>

            </a>


            <a href="#" className="btn btn-outline-custom">

            Explore

            </a>

            </div>



            <div className="hero-stats">

            <div className="stat-box">

            <h2>

            5000+

            </h2>

            <span>

            Products

            </span>

            </div>


            <div className="stat-box">

            <h2>

            120+

            </h2>

            <span>

            Brands

            </span>

            </div>


            <div className="stat-box">

            <h2>

            25+

            </h2>

            <span>

            Years

            </span>

            </div>

            </div>

            </div>




            {/* <!-- Right --> */}

            <div className="col-lg-6 mt-5 mt-lg-0">

            <div className="hero-image-area">

            {/* <img src="images/hero/drill.png" className="img-fluid hero-image" alt=""> */}



            <div className="floating-card card-one">

            <i className="bi bi-truck"></i>

            Fast Delivery

            </div>


            <div className="floating-card card-two">

            <i className="bi bi-patch-check-fill"></i>

            Premium Quality

            </div>


            <div className="floating-card card-three">

            <i className="bi bi-award-fill"></i>

            Top Brands

            </div>


            <div className="floating-card card-four">

            <i className="bi bi-tools"></i>

            Professional Tools

            </div>


            </div>

            </div>



            </div>

            </div>

            </section>
    </>
  )
}

export default HeroSection
