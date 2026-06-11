import './App.css'
import Header from './Header.jsx'
import Products from './Products.jsx'

function App() {
  let company="flipkart";
  let pos="developer"
  return (
    <>
    <section style={{textAlign:"center"}}>
      <Header/>
     
    <img src="https://zerodha.com/static/images/landing.svg"></img>
    <h2>Invest in everything</h2>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id="btn">Sign up for free</button>
    </section>
    <section style={{display:"flex",justifyContent:"space-evenly"}}>
      <Products/>
      </section>
    </>     
  )
}                     

export default App
