'use strict';
var stocks = [
{ symbol: 'XFX', price: 240.30, volume: 23432 },
{ symbol: 'TNZ', price: 85.20, volume: 240 },
{ symbol: 'JXJ', price: 205.50, volume: 5333 }
];

var filteredStockSymbols =
  stocks.
    filter(function(stock){
      return stock.price >= 150.00;
    }).
    map(function(stock){
      return stock.symbol;
    });

filteredStockSymbols.forEach(function(symbol){
  console.log(symbol);
});
