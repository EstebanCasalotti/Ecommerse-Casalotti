import React, { useState, useEffect } from 'react';
import {ItemDetail} from './ItemDetail';
export function ItemDetailConteiner (){
    return <>
        <GetItem />
    </>


}

const GetItem = () => {

  const [controller, setController] = useState(false)

  

    useEffect(() => {const promise = new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve(true);

        },2000);

      });

      promise.then(

        (result) => {

          console.log(result);

          setController(result);

        },

        (error) => {

          console.log(error);

        }

      )},[])

      return(

        <div>

           { controller && <ItemDetail/>}

        </div>

      )} 
