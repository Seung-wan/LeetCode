var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }
  return maxProfit;
};

/*
시간 복잡도 실패
let answer=0;
for(let i=0; i<prices.length-1; i++){ 
  for(let j=i+1; j<prices.length; j++){
      let profit = prices[j] - prices[i];
     if(profit >answer) answer = profit 
  }
} 
  return answer
*/
