var user = prompt("What is your name? ")
function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
   var yearsRemianing =  90 - age;
    var days = yearsRemianing * 365;
    var weeks = yearsRemianing * 52;
    var months = yearsRemianing * 12;
    console.log(`"Dear, ${user}` + " You have " + days + " days," + weeks + " weeks," + " and " + months + " months left.")
    
    
    
/*************Don't change the code below**********/
}
lifeInWeeks(51);
