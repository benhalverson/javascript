'use strict';
// function getStockSymbols(stocks) {
//   var symbols = [];
//   var counter;
//   var stock;
//
//   for (counter = 0; counter < stocks.length; counter++ ) {
//     stock = stocks[counter];
//     symbols.push(stock.symbol);
//   }
//
//   return symbols;
// }

// this code is the same as running the above code.
function getStockSymbols(stocks) {
  var symbols = [];

stocks.forEach(function(stock){
  symbols.push(stock.symbol);
});

  return symbols;
}

var symbols = getStockSymbols([
   { symbol: 'XFX', price: 240.30, volume: 23432 },
   { symbol: 'TNZ', price: 85.20, volume: 240 },
   { symbol: 'JXJ', price: 205.50, volume: 5333 },
  ]);

console.log(JSON.stringify(symbols));
