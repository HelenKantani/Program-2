let price = Number(prompt('Enter your price'))

if (price > 100 && price < 3000) {
  console.log(price-price*0.03);
}
else if (price > 3000 && price < 10000) {
 console.log (price-price*0.05);
} 
else if (price >= 10000) {
  console.log (price-price*0.07);
}
else {
  alert (`No sale ${price}`)
}