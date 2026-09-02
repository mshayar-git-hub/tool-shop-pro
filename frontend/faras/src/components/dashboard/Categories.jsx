import React, { useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext';
import { Link } from 'react-router-dom';

const Categories = () => {

    const {getCategory,category, deleteCategory } = useContext(DashContext);

    useEffect(()=>{
        getCategory();
    },[])

  return (
    <>
      <div className="col-lg-9 col-xl-10">

                    <div className="content-box">

                        {/* <!-- Header --> */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h2 className="mb-0">Categories</h2>

                            <Link to='/dashboard/categories/add' className="btn btn-primary">
                                <i className="bi bi-plus-circle"></i>
                                Add Category
                            </Link>

                        </div>

                        {/* <!-- Filters --> */}

                        

                        {/* <!-- Products Table --> */}

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>

                                    <tr>

                                        <th>ID</th>
                                        <th>Category</th>
                                        <th>Actions</th>

                                    </tr>

                                </thead>

                                <tbody>
                                    {category.map((cat)=>(
                                    <tr>

                                        <td>{cat.id} </td>

                                

                                        <td>{cat.cat_name} </td>

                                        
                                        <td>
                                            <div className="d-flex gap-2">
                                                <Link className="btn btn-sm btn-warning" to={`/dashboard/categories/${cat.id}/`}>
                                                    <i className="bi bi-pencil"></i>
                                                </Link>

                                                <button className="btn btn-sm btn-danger" onClick={()=>{if (window.confirm("Are you sure want to delete this Category ?" )){deleteCategory(cat.id);}}}>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>

                                        </td>

                                    </tr>
                                   ))}

                                </tbody>

                            </table>

                        </div>

                        {/* <!-- Pagination --> */}

                        <nav className="mt-4">

                            <ul className="pagination justify-content-end">

                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>

                                <li className="page-item active">
                                    <a className="page-link">1</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link">2</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link">3</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link">Next</a>
                                </li>

                            </ul>

                        </nav>

                    </div>

                </div>
    </>
  )
}

export default Categories
