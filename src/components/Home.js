import React from 'react'

const mystyle = {
    marginTop : "30px"
}

const Home = (props) => {
    return (
        <>
        <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-secondary">
                        <h4 className="text-white">Test Credentials</h4>
                    </div>
                    <div className="card-body">
                        <b> Please use the below credentials to test the App </b>
                        <div>
                            <br />
                            <p><b>Email : test@xyz.com </b></p>
                            <p><b>Password : secret123 </b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="jumborton bg-secondary" style={mystyle}>
                    <h1 className="display-1 text-white"> Welcome to Web based Billing App</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home