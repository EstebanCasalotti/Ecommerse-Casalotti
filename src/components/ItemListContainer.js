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
const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
      resolve(items);
  },2000);
});
promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
