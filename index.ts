import products from './products';

let productName: string = 'shirt';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = 'House no 81/4, Akosua Ave. Street';

const product = products.filter(product => product.name === productName)[0];
console.log(product)

if(product.preOrder === 'true'){
  console.log('We will send you a message when its on its way')
}

if(Number(product.price) >= 25){
  shipping = 0
  console.log('We provide free shipping for this product')
}else{
  shipping = 5
}
