function fibo(number){
    var a =0;
    var b = 1;
    var c = a+b;
    if(number == 0 || number == 0){
        return true;
    }
    while(c<= number){
        if(c==number){
            return true;
        }

        a = b;
        b = c;
        c= a+b;
    }
    return false 
}
 var N = 5; // Read input as integer

var result = fibo(N); // Call the function to calculate the sum of even numbers
 console.log(result); // Print the result