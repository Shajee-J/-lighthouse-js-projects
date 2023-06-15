// //         attempt 3.5

function lastIndexOf(num, val) {
// so y which will be recorded value of the last seen index holding the val specified 
  let y = 0;
// loop will itterate backwards accross the array following the index
  for (let i = num.length-1; i >= 0; i--){
// activates if the value held in this index of the array specified is === to the val
  if (val === num[i]) {
// should replace the current y
      y = i;  
      return y
    }
  }
// returns final y value in literally any case other than the one in the if condition
   return -1;
}






//              testing values:

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ],       5),  "=?", 2);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([],                3), "=?", -1);