import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="col-lg-9 col-xl-10">

                <div className="content-box">

                    <h2 className="mb-4">My Profile</h2>

                    <div className="row">

                        {/* <!-- Left --> */}

                        <div className="col-lg-4">

                            <div className="profile-card text-center">

                                <img src="images/profile.jpg" alt="Profile" />

                                <h4 className="mt-3">John Smith</h4>

                                <p className="text-muted mb-1">
                                    Administrator
                                </p>

                                <button className="btn btn-primary mt-3">
                                    Edit Profile
                                </button>

                            </div>

                        </div>

                        {/* <!-- Right --> */}

                        <div className="col-lg-8">

                            <div className="profile-details">

                                <h4 className="mb-4">
                                    Personal Information
                                </h4>

                                <div className="row">

                                    <div className="col-md-6 mb-4">

                                        <label>Name</label>

                                        <input type="text" className="form-control" value="John Smith" />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <label>Email</label>

                                        <input type="email" className="form-control" value="john@gmail.com" />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <label>Phone</label>

                                        <input type="text" className="form-control" value="+91 9876543210" />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <label>Role</label>

                                        <input type="text" className="form-control" value="Administrator" />

                                    </div>

                                    <div className="col-12">

                                        <label>Address</label>

                                        <textarea className="form-control" rows="4">New York, USA</textarea>

                                    </div>

                                </div>

                                <button className="btn btn-success mt-4">
                                    Save Changes
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile
