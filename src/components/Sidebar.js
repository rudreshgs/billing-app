import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = (props) =>{
    return(
        <>
            <div className="sidenav bg-dark">
                <Link to='/dashboard' style={{marginTop: "50px",fontSize: "25px", marginBottom: "30px"}}>Dashboard</Link>
                <Link to="/dashboard/customers" style={{marginBottom: "30px", fontSize: "25px"}}>Customers</Link>
                <Link to="/dashboard/products" style={{marginBottom: "30px", fontSize: "25px"}}>Products</Link>
                <Link to="/dashboard/billing" style={{marginBottom: "30px", fontSize: "25px"}}>Billing</Link>
                <Link to="/dashboard/profile" style={{fontSize: "25px"}} >Profile</Link>
            </div>
        </>
    )
}

export default Sidebar