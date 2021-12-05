import products from './products';

let productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.filter(product => product.name === productName)[0];
console.log(product)

if(product.preOrder === 'true'){
  console.log('We will send you a message when its on its way')
}
