
//                    attempt 1.5: 

function range(start, end, step){
  //so the array can be accessed locally 
  const num = [];
  // if statment to filter out all error proc, note: there is probably a short way of doing this
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)){
    // returns just the empty array if errors are proced 
    return num; 
  }
  // if no errors are found, actual loop will activate
else {
  // start = the # at index 0, end = the # at the end of the index in other words the "limit", step = increments to go up by.  
  for (let i = start; i <= end; i += step){
    // current "i" value gained through current loop is .push() to the end of the array noted as num. 
    num.push(i);
    } 
  }
  // after all loops are done, this will return the final form of the array after all the nmumbers have been added, also note 'return' prevents an infinite loop error.   
  return num;
}


//                    reverse attempt:

// function range(start, end, step){
//   const num =[];
//   if ((start !== undefined || end !== undefined || step !== undefined) && (start < end) && (step > 0)) {
//     for (let i = start; i <= end; step ++) {
//      return num.push(num[i]+step);
      
//   }
//   }

//   else { 
//     return num;
//     }  
//   } 



//            testing values:
    console.log(range(0, 10, 2));
    console.log(range(10, 30, 5));
    console.log(range(-5, 2, 3));