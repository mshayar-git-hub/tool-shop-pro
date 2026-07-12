import React from 'react'

const Users = () => {
  return (
    <>
      <div className="col-lg-9 col-xl-10">

                    <div className="content-box">

                        {/* <!-- Header --> */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h2 className="mb-0">Users</h2>

                            <button className="btn btn-primary">
                                <i className="bi bi-person-plus"></i>
                                Add User
                            </button>

                        </div>

                        {/* <!-- Search --> */}

                        <div className="row g-3 mb-4">

                            <div className="col-lg-9">

                                <input type="text" className="form-control" placeholder="Search by name or email"/>

                            </div>

                            <div className="col-lg-3">

                                <button className="btn btn-outline-primary w-100">
                                    Search
                                </button>

                            </div>

                        </div>

                        {/* <!-- Users Table --> */}

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>

                                    <tr>

                                        <th>#</th>
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Joined</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>1</td>

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <img src="images/user1.jpg" className="user-img me-3"/>

                                                <div>

                                                    <strong>John Smith</strong><br/>

                                                    <small className="text-muted">
                                                        johnsmith
                                                    </small>

                                                </div>

                                            </div>

                                        </td>

                                        <td>john@gmail.com</td>

                                        <td>+91 9876543210</td>

                                        <td>08 Jul 2026</td>

                                        <td>

                                            <span className="badge bg-primary">
                                                Customer
                                            </span>

                                        </td>

                                        <td>

                                            <span className="badge bg-success">
                                                Active
                                            </span>

                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>2</td>

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <img src="images/user2.jpg" className="user-img me-3"/>

                                                <div>

                                                    <strong>Emma Watson</strong><br/>

                                                    <small className="text-muted">
                                                        emma
                                                    </small>

                                                </div>

                                            </div>

                                        </td>

                                        <td>emma@gmail.com</td>

                                        <td>+91 9988776655</td>

                                        <td>05 Jul 2026</td>

                                        <td>

                                            <span className="badge bg-primary">
                                                Customer
                                            </span>

                                        </td>

                                        <td>

                                            <span className="badge bg-success">
                                                Active
                                            </span>

                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>3</td>

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <img src="images/user3.jpg" className="user-img me-3"/>

                                                <div>

                                                    <strong>David Lee</strong><br/>

                                                    <small className="text-muted">
                                                        davidlee
                                                    </small>

                                                </div>

                                            </div>

                                        </td>

                                        <td>david@gmail.com</td>

                                        <td>+91 8877665544</td>

                                        <td>02 Jul 2026</td>

                                        <td>

                                            <span className="badge bg-dark">
                                                Admin
                                            </span>

                                        </td>

                                        <td>

                                            <span className="badge bg-success">
                                                Active
                                            </span>

                                        </td>

                                        <td>

                                            <button className="btn btn-sm btn-info">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className="btn btn-sm btn-warning">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

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
                                    <a className="page-link">Next</a>
                                </li>

                            </ul>

                        </nav>

                    </div>

                </div>
    </>
  )
}

export default Users
