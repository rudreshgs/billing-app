import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleAuth = () => {
    setLoggedIn(!loggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return (
    <div>
      <Navbar loggedIn={loggedIn} handleAuth={handleAuth} />
      {loggedIn? <Dashboard loggedIn={loggedIn} /> : <Redirect to="/"/>}
    </div>
  )
}

export default App