import React from 'react'

function Card(image,title,price) {
  return (
    <div style={{height:"400px",width:"300px",textAlign:"center",border:"1px black solid"}}>
        
        <img src={image} alt=""
        height={250} width={250}></img>
        <h2 style={{textDecorationColor:"red"}}>{title}</h2>
        <p>{price}</p>
        
    </div>
  )
}

export default Card