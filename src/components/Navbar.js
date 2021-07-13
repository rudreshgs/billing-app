import React from 'react'
import {Link, Route, Redirect, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
// import Dashboard from './Dashboard'


const Navbar = (props) => {
    const {loggedIn, handleAuth} = props

    return (
        <div>
            <h2>Billing App</h2>
            <div>
            {loggedIn ? (
                <>
                    <Link onClick={()=> {
                        localStorage.removeItem('token')
                        alert('successfully logged out')
                        handleAuth()
                        props.history.push('/login')
                    }}> Logout</Link>
                </>
            ) : (
                <>
                    <Link to="/" >Home</Link>
                    <Link to="/register"> Register </Link>
                    <Link to="/login"> Login  </Link>
                </>
            )
            }
                <Switch>
                {loggedIn? <Redirect to="/dashboard"/> : <>
                    {!loggedIn && <Route path="/" component={Home} exact={true}/>}
                    <Route path="/register" component={Register} exact={true}/>
                    <Route path="/login" render = {(props)=>{

                        return <Login {...props} handleAuth={handleAuth}/>
                    }} exact={true}/></>}
                    {/* <Route path="/" component={Home} exact={true} />
                    <Route path="/register" component={Register} exact={true}/>
                    <Route path="/dashboard" component={Dashboard} exact={true} />
                    <Route path="/login" render={(props) => {
                        return <Login {...props} handleAuth={handleAuth} />
                    }} exact={true} /> */}
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(Navbar)