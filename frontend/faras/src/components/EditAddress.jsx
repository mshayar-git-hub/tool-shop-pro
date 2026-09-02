import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthContext";
import { useNavigate , useParams } from "react-router-dom";
import Loading from "./Loading";

const EditAddress = () => {

    const {address, editAddress,getAddress} = useContext(AuthContext);
    const {id} = useParams();
    const {loading} = useContext(AuthContext);
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
        editAddress(id , formData);
        alert("Address Added Successfully !");
        navigate("/user_profile/address");
    };

    

    useEffect(()=>{
        getAddress();
    },[])

    useEffect(() => {
        if (address) {
            setFormData({
                building_floor: address.building_floor,
                block_street: address.block_street,
                area: address.area,
                country: address.country,
            });
        }
    }, [address]);

    if (loading) {
        return (
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <Loading /></div></div>)
    }


    return (
        <>
        {address && (
            <>
            <Navbar/> <br/><br/><br/>
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-7">

                    <div className="card shadow">

                        <div className="card-header">
                            <h3 className="mb-0">Edit Address</h3>
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
        )}
        
        </>
    );
};

export default EditAddress;