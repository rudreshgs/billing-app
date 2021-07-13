import React from 'react'
import {Route, withRouter, Switch} from 'react-router-dom'
import Profile from './Profile'
import Customers from './Customers'
import Products from './Products'

const Dashboard = (props) => {

    return (
        <div>
            {/* <Switch> */}
            {/* <Route path='/dashboard/profile' component={Profile} exact={true}/> */}
                <Profile />
                <Customers />
                <Products />
            {/* </Switch> */}
        </div>
    )
}

export default withRouter(Dashboard)