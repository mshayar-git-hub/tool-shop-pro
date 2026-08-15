import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddAddressPage = () => {

    const {postAddress} = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        building_floor: "",
        block_street: "",
        area: "",
        country: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postAddress(formData);
        alert("Address Added Successfully !");
        navigate("/user_profile/address");
    };


    return (
        <>
        <Navbar/> <br/><br/><br/>
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-7">

                    <div className="card shadow">

                        <div className="card-header">
                            <h3 className="mb-0">Add New Address</h3>
                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                {/* Building */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Floor / Building
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="building_floor"
                                        placeholder="e.g. 3/39"
                                        value={formData.building_floor}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Street */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Street / Block
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="block_street"
                                        placeholder="e.g. 5 / Street name"
                                        value={formData.block_street}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Area */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Area
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="area"
                                        placeholder="e.g. jahra"
                                        value={formData.area}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Country */}
                                <div className="mb-4">
                                    <label className="form-label">
                                        Country
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                        placeholder="e.g. Kuwait"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Save Address
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
};

export default AddAddressPage;