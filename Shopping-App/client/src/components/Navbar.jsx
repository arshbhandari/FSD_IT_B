import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/about">About | </Link>
      <Link to="/contact">Contact |</Link>
      <Link to="/login">Login | </Link>
      <Link to="/register">Register </Link>
    </div>
  )
}

export default Navbar
