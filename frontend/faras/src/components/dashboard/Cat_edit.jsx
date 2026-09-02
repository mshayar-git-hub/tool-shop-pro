import React, { useState, useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading';
import { AuthContext } from '../../context/AuthContext';


const Cat_edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const { loading } = useContext(AuthContext);

    const {
        getSingleCategory,
        editSingleCategory
    } = useContext(DashContext);

    const [formData, setFormData] = useState({
        cat_name: ""
    });

    const [categoryLoading, setCategoryLoading] = useState(true);


    // Get existing category
    useEffect(() => {

        const fetchCategory = async () => {
            try {
                const data = await getSingleCategory(id);
                setFormData({
                    cat_name: data.cat_name
                });
            } catch (error) {
                console.log(error);
            } finally {
                setCategoryLoading(false);
            }
        };

        fetchCategory();

    }, [id]);


    // Handle input change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    // Handle submit
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await editSingleCategory(id, formData);

            navigate('/dashboard/categories');

        } catch (error) {

            console.log(error);

        }

    };


    if (loading || categoryLoading) {
        return (
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <Loading />
                </div>
            </div>
        );
    }


    return (
        <>
            <div className="col-lg-9 col-xl-10">

                <div className="dashboard">

                    <main className="main-content">

                        <div className="content-box">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <div>
                                    <h2 className="mb-1">Edit Category</h2>

                                    <p className="text-muted mb-0">
                                        Edit Category for your store.
                                    </p>
                                </div>

                                <Link
                                    to="/dashboard/categories"
                                    className="btn btn-outline-secondary"
                                >
                                    <i className="bi bi-arrow-left"></i> Back
                                </Link>

                            </div>


                            <form id="productForm" onSubmit={handleSubmit}>

                                <div className="bv-card">

                                    <h5 className="mb-4">
                                        Category Information
                                    </h5>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Category Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                name="cat_name"
                                                placeholder="Enter Category Name"
                                                value={formData.cat_name}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>

                                </div>


                                <div className="text-end mt-4">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update Category
                                    </button>

                                </div>

                            </form>

                        </div>

                    </main>

                </div>

            </div>
        </>
    );
}


export default Cat_edit;