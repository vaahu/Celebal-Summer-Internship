var arr = [2,3,4,5,6,7];
/*simple way to iterate an array 
 for(var i=0;i<=arr.length;i++){
    console.log(arr[i]); //pass the value as the argument 
 }*/

/*using for each
FOR EACH METHOD
two optional argument can pass the index as well as array */

function print(element){//  can also pass index and arr as an argument ,function print(element,index,array)
    console.log(element);
}
arr.forEach(print);// for each function apply's the frnction to each element of the array at least once