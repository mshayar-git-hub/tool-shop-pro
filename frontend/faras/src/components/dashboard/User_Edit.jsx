import React, { useState, useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext'
import { useParams , Link , useNavigate } from 'react-router-dom';

const User_Edit = () => {

    const { loadSingleUser, singleUser , updateSingleUser} = useContext(DashContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        is_active: false,
        is_staff: false,
        is_superuser: false,
    });

    useEffect(() => {
        loadSingleUser(id);
    }, [id])

    useEffect(() => {
        if (singleUser) {
            setFormData({
                username: singleUser.username || "",
                first_name: singleUser.first_name || "",
                last_name: singleUser.last_name || "",
                email: singleUser.email || "",
                phone_number: singleUser.profile?.phone_number || "",
                is_active: singleUser.is_active,
                is_staff: singleUser.is_staff,
                is_superuser: singleUser.is_superuser,
            });
        }
    }, [singleUser]);

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            await updateSingleUser(id, formData);
            alert("Your form submitted successfully!");
            navigate('/dashboard/users');
        }catch(err){
            console.log("error: ",err);
        }
    };

    return (
        <>
        <div className="col-lg-9 col-xl-10">
            {singleUser && (

                <div className="container py-5">
                    <Link to='/dashboard/users' className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left"></i> Back
                    </Link>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            <div className="card shadow-lg border-0 rounded-4">

                                <div className="card-header bg-primary text-white text-center py-3">
                                    <h3 className="mb-0">User Form</h3>
                                </div>

                                <div className="card-body p-4">

                                    <form method="POST" onSubmit={handleSubmit}>

                                        {/* <!-- Username --> */}
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.username}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, username: e.target.value })
                                                } />
                                        </div>

                                        

                                        <div className="row">

                                            {/* <!-- First Name --> */}
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.first_name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, first_name: e.target.value })
                                                    } />
                                            </div>

                                            {/* <!-- Last Name --> */}
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.last_name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, last_name: e.target.value })
                                                    } />
                                            </div>

                                        </div>

                                        {/* <!-- Email --> */}
                                        <div className="mb-3">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                } />
                                        </div>

                                        { }
                                        <div className="mb-4">
                                            <label className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                value={formData.phone_number}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone_number: e.target.value })
                                                } />
                                        </div>

                                        { }
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="active"
                                                        checked={formData.is_active}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                is_active: e.target.checked,
                                                            })
                                                        }
                                                    />
                                                    <label className="form-check-label" htmlFor="active">
                                                        Is Active
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="staff"
                                                        checked={formData.is_staff}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                is_staff: e.target.checked,
                                                            })
                                                        }
                                                    />
                                                    <label className="form-check-label" htmlFor="staff">
                                                        Staff
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="admin"
                                                        checked={formData.is_superuser}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                is_superuser: e.target.checked,
                                                            })
                                                        }
                                                    />
                                                    <label className="form-check-label" htmlFor="admin">
                                                        Admin
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                        <hr />

                                        <div className="d-flex justify-content-end gap-2">

                                            <button type="reset" className="btn btn-outline-secondary">
                                                Reset
                                            </button>

                                            <button type="submit" className="btn btn-primary">
                                                Save User
                                            </button>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            )}
            </div>
        </>
    )
}

export default User_Edit
