
// VERSION 1.0 

// let age = ""

// if whichSchool {
//   // Elementary School if age is below 13
//   case (age < 13) :
//     whichSchool = "Elementary School";
//       break;
//       // Secondary School if age is between 13 and 18 (both inclusive)
//   case ((age >= 13) || (age <= 18)) :
//     whichSchool = "Secondary School";
//       break;
//     }
//     // Lighthouse Labs in all other cases.
//   else {
//       whichSchool = Lighthouse Labs
//     }

//     console.log("i am ${age} and will be going to ${whichSchool}")



// If-Statement VERSION 2.0
const whichSchool = function (age){


if (age < 13) {
  console.log(age, whichSchool);
  return "Elementary School";
}
else if (age >= 13 && age < 19 ){
  console.log(age, whichSchool);
  return "Secondary School";
}
else if (age > 18) {
  console.log(age, whichSchool);
  return "Lighthouse Labs";
}

}