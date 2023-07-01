



// var factorial = function fact(n){  //named function expression
//     var ans = 1;
//     for(var i=1 ;i<=n;i++) {
//     ans = ans*i;
//     }
//     return ans;
// };
 

//  var factorial2 = function (n){  //annonomus  function expression
//     var ans = 1;
//     for(var i=1 ;i<=n;i++) {
//     ans = ans*i;
//     }
//     return ans;
// };

// console.log(factorial);
// console.log(factorial2);







// function expression and function decleration is differed by hoisting function declaration usses hoisting concept whereas function expression gives undefined
console.log(fact(5)); // using hoisting
console.log(factorial2);//this will give undifined

   function fact(n){  //function decleration
    var ans = 1;
    for(var i=1 ;i<=n;i++) {
    ans = ans*i;
    }
    return ans;
};
 

 var factorial2 = function fact(n){ //function exression, in this caese var factorial only will be hoisted rest of the code will not work
    var ans = 1;
    for(var i=1 ;i<=n;i++) {
    ans = ans*i;
    }
    return ans;
};
