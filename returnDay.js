
function ReturnDay(num){
    arr = [ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    if(num >= 1 && num<=7){
        return arr[num-1];
    }
    else {
        return null
    }
}
console.log(ReturnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));
console.log(returnDay(8));