

// function outer(){
//       var outerVar = 10;
//       function inner(){
//         console.log(outerVar);
//       }
//       inner();  
//     }
//     outer();// in this case it will print 10 since it does not have any variale inside inner function so it will look refer to outer func
 
 

    // function outer(){
    //     var outerVar = 10;
    //     function inner(){
    //       var innerVar = 100;
    //       console.log(outerVar);
    //     }
    //     inner();
    //      console.log(innerVar);// it will give error since it is not in the scope of inner functionits scope is limited to the inner function 
    //   }
    //   outer();
   

    // var name = "global"
    // function outer(){
    //     var name = "outer";
    //     function inner(){
    //       var name = "inner"
    //       console.log(name);
  
    //     }
    //  inner();
    //  console.log(name);
    //   }
    //   outer();
    //   console.log(name);
   

    //   function a() {
    //     console.log("Inside a");
    
    //     function b() {
    //         console.log("Inside b");
    //     }
    // }
    
    // a();

    function a() {
        console.log("Inside a");
    
        function b(){
            console.log("Inside b");
        }
    }
    
    b();