import './App.css'

function App() {
  let company="flipkart";
  let pos="developer"
  return (
    <>
    <section style={{textAlign:"center"}}>
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
    
    <img src="https://zerodha.com/static/images/landing.svg"></img>
    <h2>Invest in everything</h2>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id="btn">Sign up for free</button>
    </section>
    </>     
  )
}                     

export default App
