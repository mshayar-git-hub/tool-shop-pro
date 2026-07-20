import React, {useContext, useEffect} from 'react'
import { DashContext } from '../../context/DashContext'

const Users = () => {
    const {getUsers, allUsers} = useContext(DashContext);

    useEffect(()=>{
        getUsers();
    } , []);

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

                                {allUsers.map((users)=>(
                                <tbody>

                                    <tr>

                                        <td>{users.user.id} </td>

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <img src="images/user1.jpg" className="user-img me-3"/>

                                                <div>

                                                    <strong>{users.user.username} </strong><br/>

                                                </div>

                                            </div>

                                        </td>

                                        <td>{users.user.email} </td>

                                        <td>+91 XXXXXXXXX</td>

                                        <td>08 Jul 2026</td>

                                            <td>
                                                {users.user.is_superuser ? (
                                                    <span className="badge bg-primary">
                                                        Super User
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-primary">
                                                        Staff
                                                    </span>
                                                )}


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
                                ))}

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
