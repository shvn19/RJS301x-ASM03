export const priceTransform = (price) => {
  const priceS = "" + price;
  const s = priceS.split("");
  let count = 0;
  for(let i=s.length-1; i>=0; i--) {
    count++;
    if (count==3&&i!=0) {
      s.splice(i,0,".");
      count=0;
    }
  }
  let res = s.join("");
  return res;
}