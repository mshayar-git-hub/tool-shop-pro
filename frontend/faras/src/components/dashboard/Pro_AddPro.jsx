import React, { useState, useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext';
import { Link , useNavigate } from 'react-router-dom';


const Pro_AddPro = () => {

    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState(null);
    const { postProduct , category, getCategory} = useContext(DashContext);
    console.log(category);
    const [formData, setFormData] = useState({
        category_id: "",
        product_name: "",
        description: "",
        price: "",
        trending: false,
        in_stock: true,
        image: null
    })


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPreviewImage(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                        ? files[0]
                        : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("category_id", formData.category_id);
        data.append("product_name", formData.product_name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("trending", formData.trending);
        data.append("in_stock", formData.in_stock);

        if (formData.image) {
            data.append("image", formData.image);
        }
        postProduct(formData);
        alert("product added successfully!");
        navigate("/dashboard/products")
    }

    useEffect(()=>{
        getCategory();
    },[])


    return (
        <>
        <div className="col-lg-9 col-xl-10">
            <div className="dashboard">

                <main className="main-content">

                    <div className="content-box">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <h2 className="mb-1">Add Product</h2>
                                <p className="text-muted mb-0">
                                    Create a new product for your store.
                                </p>
                            </div>

                            <Link to='/dashboard/products' className="btn btn-outline-secondary">
                                <i className="bi bi-arrow-left"></i> Back
                            </Link>
                        </div>

                        <form id="productForm" onSubmit={handleSubmit}>

                            <div className="bv-card">

                                <h5 className="mb-4">Product Information</h5>

                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Category</label>

                                        <select
                                            className="form-select"
                                            name="category_id"
                                            value={formData.category_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Category</option>

                                            {category.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.cat_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Product Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="product_name"
                                            placeholder="Enter product name"
                                            value={formData.product_name}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-12 mb-3">

                                        <label className="form-label">
                                            Description
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            name="description"
                                            placeholder="Write product description..."
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">Price</label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            name="price"
                                            placeholder="0.000"
                                            value={formData.price}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Product Image
                                            <small className="text-muted">
                                                (Optional)
                                            </small>
                                        </label>

                                        <input
                                            type="file"
                                            className="form-control"
                                            name="image"
                                            onChange={(e) => {
                                                handleChange(e);
                                                setPreviewImage(URL.createObjectURL(e.target.files[0]));
                                            }}
                                        />

                                    </div>

                                    {previewImage && (
                                        <div className="col-12">

                                            <div className="image-preview-box">

                                                <img
                                                    src={previewImage}
                                                    alt="Preview"
                                                    className="img-fluid"
                                                    style={{
                                                        width: "180px",
                                                        height: "180px",
                                                        objectFit: "cover",
                                                        borderRadius: "10px",
                                                        border: "1px solid #ddd"
                                                    }}
                                                />

                                            </div>

                                        </div>
                                    )}

                                </div>

                            </div>

                            <div className="bv-card mt-4">

                                <h5 className="mb-3">Product Status</h5>

                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="stock"
                                        name="in_stock"
                                        checked={formData.in_stock}
                                        onChange={handleChange}
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor="stock"
                                    >
                                        In Stock
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="trending"
                                        name="trending"
                                        checked={formData.trending}
                                        onChange={handleChange}
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor="trending"
                                    >
                                        Trending Product
                                    </label>
                                </div>

                            </div>

                            <div className="text-end mt-4">

                                <button
                                    type="reset"
                                    className="btn btn-light me-2"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Save Product
                                </button>

                            </div>

                        </form>

                    </div>

                </main>

            </div>
            </div>
        </>
    )
}

export default Pro_AddPro