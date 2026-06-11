import React from 'react'

function Header() {
  return (
    <header style={{display:"flex",justifyContent:"space-evenly"}}>
      <img src='https://zerodha.com/static/images/logo.svg' alt="logo" height="30" width="70"></img>
      <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>
    <a href="">Signup</a>
    <a href="">About</a>
    <a href="">Pricing</a>
    <a href="">Products</a>
    <a href="">Support</a>
      </nav>
    </header>
    
  )
}

export default Header