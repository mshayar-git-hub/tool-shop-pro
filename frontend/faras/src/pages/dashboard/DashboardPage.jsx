import React from 'react'
import DashSidebar from '../../components/dashboard/DashSidebar'
import Main from '../../components/dashboard/Main'
import Profile from '../../components/dashboard/Profile';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DashboardPage = () => {
  return (
    <>
      <Navbar/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>

      <section className="dashboard py-4">
            <div className="container-fluid">
                <div className="row">

                    <DashSidebar />

                    <Outlet/>

                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default DashboardPage
