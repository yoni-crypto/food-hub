import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("Home")
  const navigate=useNavigate()
  const { getTotalCartAmount,token,setToken} = useContext(StoreContext)
  // const [token, setToken ]=useState(localStorage.getItem("token"))

  const logout =()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")

  }

  return (
    <div>
      <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" style={{ width: "40px" }} /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={() => setMenu('Home')} className={menu === "Home" ? "active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => setMenu('Menu')} className={menu === "Menu" ? "active" : ""}>Menu</a>
          <a href='#app-download' onClick={() => setMenu('Mobile-app')} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
          <a href='#footer' onClick={() => setMenu('Contact Us')} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" style={{ width: "30px" }} />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" style={{ width: "30px" }} /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> 
          : <div className='navbar-profile'>
                  <img src={assets.user} style={{width:"30px"}}/>
                  <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout} alt="" /><p>Logout</p></li>
                  </ul>
          </div>}

        </div>
      </div>
    </div>
  )
}

export default Navbar
