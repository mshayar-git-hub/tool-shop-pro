import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            {user && (
                <div className="col-lg-9 col-xl-10">
                    <div className="content-box">
                        <h2 className="mb-4">My Profile</h2>

                        <div className="row">

                            {/* Left */}
                            <div className="col-lg-4">
                                <div className="profile-card text-center">

                                    <img src="images/profile.jpg" alt="Profile" />

                                    <h4 className="mt-3">{user.username}</h4>

                                    <p className="text-muted mb-1">
                                        {user.is_superuser
                                            ? "Super User"
                                            : user.is_staff
                                                ? "Staff"
                                                : "Customer"}
                                    </p>

                                    <button className="btn btn-primary mt-3">
                                        Edit Profile
                                    </button>

                                </div>
                            </div>

                            {/* Right */}
                            <div className="col-lg-8">
                                <div className="profile-details">

                                    <h4 className="mb-4">
                                        Personal Information
                                    </h4>

                                    <div className="row">

                                        <div className="col-md-6 mb-4">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.username || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={user.email || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.first_name || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.last_name || ""}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <label>Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.profile?.phone_number || ""}
                                                readOnly
                                            />
                                        </div>

                                    </div>

                                    <button className="btn btn-success mt-3">
                                        Save Changes
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile
