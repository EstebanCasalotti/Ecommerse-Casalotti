import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
export const ItemListContainer = (greeting) => {
  return(
      <h2>{greeting.Name}</h2>
  )
  
};
export const data =[
    { 
      id: '1',
      price: '100',
      name: 'pantalon',
      image:'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { id: '2',
      price: '150',
      name: 'remera',
      image:'https://media.istockphoto.com/photos/mens-white-blank-tshirt-templatefrom-two-sides-natural-shape-on-for-picture-id1151955708?b=1&k=20&m=1151955708&s=170667a&w=0&h=g35sZS5Nw1P0HD8gqGrcl1t-oY-1bgmpxQcWn0RqBW4='
    },
    { id: '3',
      price: '200',
      name: 'zapato',
      image:'https://media.istockphoto.com/photos/brown-leather-shoe-picture-id187310279?b=1&k=20&m=187310279&s=170667a&w=0&h=5Fc9XC5hfvpffZwfE-BzK6DcajqdN3sQjnPJa-Z0Rnk='
    }
]
const Producto = ({name, price, image}) => {
  return(
    <div className="card-img-top" style={{width: "18rem;"}}>
          <img className='image' src={image} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <a href="#" className="btn btn-primary">Finalizar compra</a>
      </div>
  </div>

  )
}

export const Elementos = () => {

  const {ItemListContainerId} = useParams();
  const [productos, setProductos] = useState(null);
  useEffect(() => {const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data);
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
      {productos?.map(producto => <Producto key={producto.id} name={producto.name} image={producto.image} price={producto.price}/>)}
    </div>
)
}
