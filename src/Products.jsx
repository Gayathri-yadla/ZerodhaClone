import { useState, useEffect } from "react"
import Card from "./Card.jsx"

function Products() {
  const [products, setProducts] = useState([])

  //fetch the product data from the fake store Api
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, [])
  
  return (
    <>
      {products.map((p) => (
        <Card key={p.id} image={p.image} title={p.title} price={p.price} />
      ))}
    </>
  )
}

export default Products;


