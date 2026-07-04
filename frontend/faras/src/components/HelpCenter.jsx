import React from 'react'

const HelpCenter = () => {
    return (
        <>
            <section className="help-center py-5">
                <div className="container">
                    <div className="help-wrapper">
                        <div className="row align-items-center">

                            {/* <!-- Left --> */}

                            <div className="col-lg-7">
                                <span className="mini-title"> EXPERT ASSISTANCE </span>

                                <h2 className="section-heading mt-3">
                                    Not Sure Which Product
                                    Is Right For Your Project?
                                </h2>

                                <p className="section-description"> Our experienced construction specialists are ready to
                                    help you choose the right materials, tools,
                                    electrical products and industrial equipment.</p>

                                <div className="help-features">
                                    <div className="help-item">
                                        <i className="bi bi-check-circle-fill"></i> Product Recommendations
                                    </div>

                                    <div className="help-item">
                                        <i className="bi bi-check-circle-fill"></i>   Bulk Order Assistance
                                    </div>

                                    <div className="help-item">
                                        <i className="bi bi-check-circle-fill"></i>Contractor Pricing
                                    </div>

                                    <div className="help-item">
                                        <i className="bi bi-check-circle-fill"></i> Fast Delivery Support
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Right --> */}
                            <div className="col-lg-5">
                                <div className="support-card">
                                    <div className="support-icon">
                                        <i className="bi bi-headset"></i>
                                    </div>

                                    <h3>  Talk To An Expert </h3>
                                    <p>Monday - Saturday <br /> 8:00 AM - 8:00 PM</p>

                                    <div className="support-buttons">
                                        <a href="#" className="btn btn-whatsapp">
                                            <i className="bi bi-whatsapp"></i>WhatsApp </a>

                                        <a href="#" className="btn btn-call">
                                            <i className="bi bi-telephone-fill"></i>Call Now
                                        </a>

                                        <a href="#" className="btn btn-email">
                                            <i className="bi bi-envelope-fill"></i> Email Us </a>
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

export default HelpCenter
