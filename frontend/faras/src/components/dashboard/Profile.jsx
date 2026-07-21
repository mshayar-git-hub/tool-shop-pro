import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Profile = () => {

    const { user, updateUser } = useContext(AuthContext);
    const [form,setForm] = useState({
        username : "",
        email : "",
        first_name:"",
        last_name:"",
        phone_number:"",
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await updateUser(form);
            alert("profile updated successfully!");
        }catch (error) {
            console.error(error);
            alert("Failed to update profile.");
        }
    };

    useEffect(() => {
        if (user) {
            setForm({
                username: user.username || "",
                email: user.email || "",
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                phone_number: user.profile.phone_number || "",
            })
        }
    },[user]);

    return (
        <>
            {user && (
                <div className="col-lg-9 col-xl-10">
                    <div className="content-box">
                        <h2 className="mb-4">My Profile</h2>

                        <div className="row g-4">

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

                                    <button className="btn btn-primary mt-3" onClick={()=> alert("Edit profile on right side and click 'save changes' button.")}>
                                        Edit Profile
                                    </button>

                                </div>
                            </div>

                            {/* Right */}
                            <div className="col-lg-8">
                                <form onSubmit={handleSubmit}>
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
                                                    name="username"
                                                    value={form.username}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            username: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            email: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label>First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="first_name"
                                                    value={form.first_name}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            first_name: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label>Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="last_name"
                                                    value={form.last_name}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            last_name: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label>Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone_number"
                                                    value={form.phone_number}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            phone_number: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>

                                        </div>

                                        <button className="btn btn-success mt-3" type='submit'>
                                            Save Changes
                                        </button>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile
