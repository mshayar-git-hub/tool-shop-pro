import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row gy-5">

                        {/* <!-- Company --> */}
                        <div className="col-lg-4">
                            <a href="#" className="footer-logo">BUILD<span>VERSE</span> </a>

                            <p className="mt-4">
                                Your trusted destination for premium building
                                materials, industrial equipment,
                                power tools and construction supplies.
                            </p>

                            <div className="social-icons">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-youtube"></i></a>
                            </div>
                        </div>



                        {/* <!-- Links --> */}

                        <div className="col-lg-2 col-6">
                            <h5>Company</h5>

                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Brands</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>



                        {/* <!-- Categories -->/ */}

                        <div className="col-lg-3 col-6">
                            <h5>Categories </h5>
                            <ul>
                                <li><a href="#">Power Tools</a></li>
                                <li><a href="#">Building Materials</a></li>
                                <li><a href="#">Electrical</a></li>
                                <li><a href="#">Safety Equipment</a></li>
                                <li><a href="#">Hand Tools</a></li>
                            </ul>
                        </div>



                        {/* <!-- Contact --> */}

                        <div className="col-lg-3" id='contact'>
                            <h5>Contact </h5>

                            <ul className="contact-info">
                                <li>
                                    <i className="bi bi-geo-alt-fill"></i> Kuwait</li>

                                <li>
                                    <i className="bi bi-telephone-fill"></i> +965 XXXX XXXX </li>

                                <li>
                                    <i className="bi bi-envelope-fill"></i>info@buildverse.com</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="copyright">
                        © 2026 BuildVerse.
                        All Rights Reserved.
                    </div>
                </div>
            </footer>

            {/* <!-- Floating Buttons --> */}
            <a href="#" className="scroll-top"> <i className="bi bi-arrow-up"></i> </a>
            <a href="#" className="floating-whatsapp"><i className="bi bi-whatsapp"></i> </a>
        </>
    )
}

export default Footer
