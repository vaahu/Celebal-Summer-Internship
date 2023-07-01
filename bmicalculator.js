function calculateBMI(height,weight){
    var bmi = weight/(height*height);
    return bmi;
}
function getBMI(bmi){
    if(bmi<=18.5){
        return "underweight";
    }
    else if (bmi>=18.5 && bmi<=24.9){
        return "Healthy";
    }
    else if (bmi>=25 && bmi<=25.9){
        return"Overweight";
    }
    else{
        return "obsese";
    }
} 

    var height = 1.60;
    var weight = 58;
    var bmi = calculateBMI(height,weight);
    var categery = getBMI(bmi);
    
    console.log(bmi);
    console.log(categery);
    