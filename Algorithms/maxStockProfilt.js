function maxStockProfit (pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  
  var changeBuyPrice = true;
  
  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  
  return maxProfit;
}
 
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);

// My SOLUTION, But With Error
// Doesn't return proper if final items are low price

// var maxStockProfilt = pricesArr => {
//   let highPrice = 0
//   let lowPrice = pricesArr[0]

//   for (let x = 0; x < pricesArr.length; x++) {
//     if (pricesArr[x] < lowPrice) {
//       lowPrice = pricesArr[x]
//       highPrice = 0
//     }
//     else if (pricesArr[x] > highPrice) highPrice = pricesArr[x]
//   }

//   if (highPrice < lowPrice) return -1
//   else return highPrice - lowPrice
// }

// var pricesArr = [32,46,26,38,40,48,42]
// maxStockProfilt(pricesArr)