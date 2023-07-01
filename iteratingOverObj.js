/* for this we cane use fon in loop */
var student = {
    "name"  : "abc",
    rollno : 1047,
    marks : 90
};
for(var prop in student){
   // console.log(prop);// we can also print the propety
    console.log(prop, student[prop]); //as well as there  values
}