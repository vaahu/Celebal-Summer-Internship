/* thisfunction is used to make changes to the array  -
-add n elements to the array 
-delete n element from the array 

arguments to this func(starting index,delition index, elements to be inserted(optional))
1. stating index 
2. deletion index
3. elements thaat are to be inserted (optional arg)
*/

var arr = [1,2,3,4,5,6];
arr.splice(1,1);// starting from index 1 , and delele 1 element 
console.log(arr);
arr.splice(1,);// if we will not mention the deletion count then, it will delete all the elements starting from index mentioned  
console.log(arr);
arr.splice(2,0,5,6,7,8,9);//to insert n element starting from index 2 and will not delete anything 
console.log(arr);
arr.splice(2,2,40,50);//to replace the element starting from the specified index
console.log(arr);

var color = ['red', 'orange', 'blue', 'violet'];

var removed = color.splice(2);

console.log(color);
console.log(removed);

