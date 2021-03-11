module.exports = function reverse (n) {
  if(n<0){
    return +(new String(n).split('').slice(1).reverse().join(''));
  };
  return +(new String(n).split('').reverse().join(''));
}
