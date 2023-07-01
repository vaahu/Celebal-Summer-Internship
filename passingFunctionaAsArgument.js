var factorial = function fact(n){
 var ans = 1 ;
 for( var i=1;i<=n;i++){
    ans = ans * i;
 }
 return ans;
};

function ncr(n,r, factorial){ // we can pass function as an argument in js
    return factorial(n)/factorial(r) * factorial(n-r);
}

console.log(ncr(5,2, factorial));

//another example
var add = function (a, b) {
    return a+b;
}

var subtract = function (a, b) {
    return a-b;
}

var op = function (func) {
    var x = 2;
    var y = 3;
    return func(x, y);
}
console.log(op(subtract));

