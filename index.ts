import products from './products';

let productName: string = 'shirt';

const product = products.filter(product => product.name === productName)[0];
console.log(product)
