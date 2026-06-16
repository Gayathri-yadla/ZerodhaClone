import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";

function Header(setsearchquery) {
  let togglemode=()=>{
  document.body.classList.toggle("change")
  }

   const [search, setSearch] = useState("");

  return (
    <>
     <header style={{display:"flex",justifyContent:"space-evenly"}}   >
    <Link to={'/'}><img  height={30} width={100}      src="https://zerodha.com/static/images/logo.svg" alt="logo" /></Link>
    
    <input onChange={(e)=>{setsearchquery(e.target.value)}}  type="text" placeholder="🔎search products..."
           value={search}
           onChange={(e) => setSearch(e.target.value)} />
    
    <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>

      
      <Link to={'/register'}><a href="">Signup</a></Link>
      <Link to={'/about'}><a href="">About</a></Link>
      <Link to={'products'}><a href="">Products</a></Link>
      <Link to={'login'}> <a href="">Sign in</a></Link>
        
   
    <button onClick={togglemode} >dark/light</button>
    </nav>

    </header>
    </>
  )
}
export default Header