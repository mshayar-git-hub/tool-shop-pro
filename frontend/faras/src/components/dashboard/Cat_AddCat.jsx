import React, { useState, useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading';
import { AuthContext } from '../../context/AuthContext';


const Cat_AddCat = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const {loading} = useContext(AuthContext);
    const {category,getCategory,postCategory} = useContext(DashContext);
    const [formData, setFormData] = useState({
        cat_name: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            await postCategory(formData);
            setFormData({
                cat_name: ""
            });
            alert("Category added successfully");
            navigate('/dashboard/categories/');
        }catch(error){
            console.log("error--> ", error)
        }
    };

    useEffect(() => {
        getCategory();
    }, [])




    if (loading) {
        return (
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <Loading /></div></div>)
    }


    return (
        <>
            
                    <div className="col-lg-9 col-xl-10">
                        <div className="dashboard">

                            <main className="main-content">

                                <div className="content-box">

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <h2 className="mb-1">Add Category</h2>
                                            <p className="text-muted mb-0">
                                                Create a new Category for your store.
                                            </p>
                                        </div>

                                        <Link to='/dashboard/products' className="btn btn-outline-secondary">
                                            <i className="bi bi-arrow-left"></i> Back
                                        </Link>
                                    </div>

                                    <form id="productForm" onSubmit={handleSubmit}>

                                        <div className="bv-card">

                                            <h5 className="mb-4">Category Information</h5>

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
                                                Save Category
                                            </button>

                                        </div>

                                    </form>

                                </div>

                            </main>

                        </div>
                    </div>
                </>

            
)}


export default Cat_AddCat