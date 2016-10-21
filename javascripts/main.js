 function random(n, m) {
console.log(n,m);
result = Math.ceil(Math.random() * (m - n) + n);

return result;
}