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
// function getStockSymbols(stocks) {
//   var symbols = [];
//
// stocks.forEach(function(stock){
//   symbols.push(stock.symbol);
// });
//
//   return symbols;
// }

function getStockSymbols(stocks) {
  return stocks.map(function(stock){
    return stock.symbol;
  });
}

//
// Array.prototype.map = function(projection) {
//   var results = [];
//
//   this.forEach(function(item) {
//     results.push(projection(item));
//   });
//
//   return results;
// };


// function getStocksOver(stocks, minPrice) {
//   var results = [];
//   stocks.forEach(function(stock) {
//     if(stock.price >= minPrice){
//       results.push(stock);
//     }
//   });
//
//   return results;
// }


function getStocksOver(stocks, minPrice) {
  return stocks.filter(function(stock){
    return stock.price >= minPrice;
  });
}

var expensiveStocks = getStocksOver([
   { symbol: 'ABC', price: 1240.30, volume: 23432 },
   { symbol: 'DEF', price: 815.20, volume: 240 },
   { symbol: 'GHI', price: 2015.50, volume: 5333 },
  ], 900);

console.log('Expensive stocks' + JSON.stringify(expensiveStocks));


var symbols = getStockSymbols([
   { symbol: 'XFX', price: 240.30, volume: 23432 },
   { symbol: 'TNZ', price: 85.20, volume: 240 },
   { symbol: 'JXJ', price: 205.50, volume: 5333 },
  ]);

// console.log(JSON.stringify(symbols));
