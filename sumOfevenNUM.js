function sumOFeven(n){
    var sum = 0;
    for(var i=0;i<=n ;i+=2){
        sum = sum+i;
    }
    return sum;
}

  var N = 10 // Read input as integer

  var result = sumOFeven(N); // Call the function to calculate the sum of even numbers

  console.log(result); // Print the result

