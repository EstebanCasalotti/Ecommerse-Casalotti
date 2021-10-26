import React, { useState, useEffect } from 'react'
export const ItemListContainer = (greeting) => {
  return(
      <h2>{greeting.Name}</h2>
  )
  
};
const items = [
  { id: 'pant', price: '100', name: 'pantalon' },
  { id: 'shirt', price: '150', name: 'camisa' },
  { id: 'shoe', price: '200', name: 'zapato' },
];
const Producto = ({nombre, precio}) => {
  return <>
      <h1>{nombre}</h1>
      <h1>Precio: {precio}</h1>
    </>
}

export const Elementos = () => {
  const [productos, setProductos] = useState(null);
  useEffect(() => {const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(items);
    },2000);
  });
  promise.then(
    (result) => {
      console.log(result);
      setProductos(result);
    },
    (error) => {
      console.log(error);
    }
  );},[])
  return(
    <div className = "conteiner">
      {productos?.map(producto => <Producto nombre={producto.name} precio={producto.price}/>)}
    </div>
)
}

