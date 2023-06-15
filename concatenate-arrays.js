function concat(x, y){
  // will loop through y array
for (let i = 0; i < y.length; i++){
  // will push y value corralted to current index value onto x array
x.push(y[i]);
}
// will return x array after all y values have been added via the "for loop"
return x
}


//           testing values:
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);