import { useContext, useEffect, useState } from "react";
import AddressCard from "../components/AddressCard"
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import WhyFaras from "../components/WhyFaras";
import Footer from "../components/Footer";

const AddressPage = () => {

    const {getAddress,address} = useContext(AuthContext);


    useEffect(()=>{
        getAddress();
    },[]);


    return (
        <>
        <Navbar/>
        <br/><br/><br/><br/>
        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>My Addresses</h3>

                <Link className="btn btn-primary" to='/user_profile/address/add'>
                    + Add Address
                </Link>
            </div>

            <div className="row">

                {address.map(address => (
                    <div className="col-md-6 mb-3" key={address.id}>
                        <AddressCard address={address} />
                    </div>
                ))}

            </div>

        </div>
        <WhyFaras/>
        <Footer/>
        </>
    );
};

export default AddressPage;