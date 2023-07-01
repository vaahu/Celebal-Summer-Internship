/*
  non-premitive datatype
  collection of key value pairs

*/
var student = {
     "name"  : "abc",
     rollno : 1047,
     marks : 90
};
// console.log(student);
// console.log(student.marks);
// console.log(student["marks"]);//SQUARE BRACKET NOTATION
// console.log(student.rollno);
// console.log(student.name);
// console.log(student.sem);//if we want to add a new key at any given point of time then we can do that by just defining them 
// console.log(student.sem=4);
// console.log(student);// so a new property is created in this 

var obj = {};//empty object 
/*  where ce cannot use dot notation 
- if any of the property is not valid ex-
 -name so ,
 student.-name wont work but student["-name"] will work 
*/ 




function printproperty(obj, prop){
    console.log(obj[prop]);
}

var prop = "marks";
printproperty(student, prop);


/*
How to delete the property in objects.
delete obj_name.property
for ex - delete student.marks or delete student["marks"]
*/  
console.log(delete student.marks);
console.log(student);
/*
  How objects are stored in js-
  soo in the below example

*/ 

var obj = {// obj is pointing to the memory where obj is stored in memory
    "p1":10
};
var obj2 = obj ; //obj 2 is also reffering to the memory obj  is stored
console.log(obj);                                        
console.log(obj2);
console.log(obj2.p1=100);
console.log(obj);//this shows that they are reffering to the same memory
console.log(obj === obj2);
console.log(obj2 = {"p2":100});
console.log(obj==obj2);// now it will give false because since the properties are same but they are stored in different locations