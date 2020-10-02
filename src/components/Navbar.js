import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

   const Navbar = (props) => {
  // setTimeout(()=>{
  //   props.history.push('/about')
  // }, 2000)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Frz'Times</a>
        <ul className='right'>
          <li><Link to='/'>Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {/* <li><a href="#" className='btn-floating btn-small red darken-4'><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" className='btn-floating btn-small red darken-4'><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className='btn-floating btn-small red darken-4'><i className="fab fa-linkedin"></i></a></li> */}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter (Navbar)
