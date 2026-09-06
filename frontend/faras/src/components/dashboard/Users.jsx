import React, { useContext, useEffect } from 'react'
import { DashContext } from '../../context/DashContext'
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading';
import { AuthContext } from '../../context/AuthContext';
import { SearchContext } from '../../context/SearchContext';

const Users = () => {
    const { getUsers, allUsers, deleteSingleUser } = useContext(DashContext);
    const { loading } = useContext(AuthContext);
    const { searchUser, setSearchUser, getSearchUser } = useContext(SearchContext);
    const { id } = useParams();

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return (
            <div className="col-lg-9 col-xl-10">
                <div className="content-box">
                    <Loading /></div></div>)
    }


    return (
        <>
            <div className="col-lg-9 col-xl-10">

                <div className="content-box">

                    {/* <!-- Header --> */}

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h2 className="mb-0">Users</h2>

                        <Link className="btn btn-primary" to='/register'>
                            <i className="bi bi-person-plus"></i>
                            Add User
                        </Link>

                    </div>

                    {/* <!-- Search --> */}
                    <form onSubmit={getSearchUser}>
                        <div className="row g-3 mb-4 input-group">

                            <div className="col-lg-9">

                                <input type="text"
                                    className="form-control"
                                    value={searchUser}
                                    onChange={(e) => setSearchUser(e.target.value)}
                                    placeholder="Search by name or email" />

                            </div>

                            <div className="col-lg-3">

                                <button className="btn btn-outline-primary w-100">
                                    Search
                                </button>

                            </div>


                        </div>
                    </form>

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

                            {allUsers.map((users) => (
                                <tbody>

                                    <tr>

                                        <td>{users.id} </td>

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <img src="images/user1.jpg" className="user-img me-3" />

                                                <div>

                                                    <strong>{users.username} </strong><br />

                                                </div>

                                            </div>

                                        </td>

                                        <td>{users.email}</td>

                                        <td>{users.profile?.phone_number}</td>

                                        <td>{users.profile?.created_at} </td>

                                        <td>
                                            {users.is_superuser ? (
                                                <span className="badge bg-primary">
                                                    Super User
                                                </span>
                                            ) : 
                                                users.is_staff ? (
                                                    <span className="badge bg-primary">
                                                        Staff
                                                    </span>
                                                ):(
                                                    <span className="badge bg-primary">
                                                        Customer
                                                    </span>
                                                )
                                                
                                            }


                                        </td>

                                        <td>
                                            {users.is_active ? (
                                                <span className="badge bg-success">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="badge bg-success">
                                                    De Active
                                                </span>
                                            )}


                                        </td>

                                        <td>

                                            <Link className="btn btn-sm btn-warning" to={`/dashboard/users/${users.id}`}>
                                                <i className="bi bi-pencil"></i>
                                            </Link>

                                            <button className="btn btn-sm btn-danger" onClick={() => { if (window.confirm("Are you sure wanted to delete this User?")) { deleteSingleUser(users.id); } }}>
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
