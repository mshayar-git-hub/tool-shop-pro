import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AddressCard = ({ address }) => {

    const {deleteAddress} = useContext(AuthContext);

    return (
        <div className="card shadow-sm">

            <div className="card-body">

                <h5>Address ID: {address.id}</h5>

                <p className="mb-1">
                    Floor / Building : {address.building_floor}
                </p>

                <p className="mb-1">
                    Street / Block : {address.block_street}
                </p>

                <p className="mb-1">
                    Area: {address.area}
                </p>

                <p className="mb-3">
                    Country : {address.country}
                </p>

                <div className="d-flex gap-2">

                    <Link className="btn btn-warning btn-sm" to={`/user_profile/address/edit/${address.id}`}>
                        Edit
                    </Link>

                    <button className="btn btn-danger btn-sm"  onClick={() => deleteAddress(address.id)}>
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AddressCard;