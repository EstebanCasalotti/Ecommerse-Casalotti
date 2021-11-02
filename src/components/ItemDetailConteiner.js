import React, { useState, useEffect } from 'react';
import {ItemDetail} from './ItemDetail';
export function ItemDetailConteiner (){
    return <>
        <GetItem />
    </>


}

const GetItem = () => {
    useEffect(() => {const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(ItemDetail);
        },2000);
      });
      promise.then(
        (result) => {
          console.log(result);
          ItemDetail(result);
        },
        (error) => {
          console.log(error);
        }
      )},[])
      return(
        <div>
            <ItemDetail />
        </div>
      )}
