import React from 'react'
import {Link, Route, Redirect, Switch, withRouter} from 'react-router-dom'
import swal from 'sweetalert'
import Home from './Home'
import Register from './Register'
import Login from './Login'

const Navbar = (props) => {
    const {loggedIn, handleAuth} = props

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary" style={{zIndex:1}}>
                <a className="navbar-brand" href="#">Billing App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {loggedIn ? (
                            <li className="nav-item active">
                                <Link className="nav-link" onClick={()=>{
                                    swal({
                                        title: "Are you sure?",
                                        icon: "warning",
                                        buttons: ['Cancel','Yes'],
                                        dangerMode: true,
                                    })
                                    .then((willlogout) => {
                                            if (willlogout) {
                                                localStorage.removeItem('token')
                                                swal('Success!','logged out successfully!','success')
                                                handleAuth()
                                                props.history.push('/login')
                                            }
                                    })
                                }}>Logout <i className="fas fa-power-off"></i></Link>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/register" className="nav-link" >Register</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link" >Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>    
            </nav>
                <Switch>
                    {loggedIn? <Redirect to="/dashboard"/> : <>
                    {!loggedIn && <Route path="/" component={Home} exact={true}/>}
                    <Route path="/register" component={Register} exact={true}/>
                    <Route path="/login" render = {(props)=>{
                        return <Login {...props} handleAuth={handleAuth}/>
                    }} exact={true}/></>}
                </Switch>
            
        </>
    )
}

export default withRouter(Navbar)