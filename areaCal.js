function calculateRectangleArea(length, width){
  if (length > -1 && width > -1){
    const rectangle = length * width;
    return rectangle;
  }
  else {
    console.log(undefined);
  }
}

function calculateTriangleArea(base, height){
  if (base > -1 && height > -1){
    const triangle = base * height / 2;
    return triangle; 
  }
  else {
    console.log(undefined);
  }
}

function calculateCircleArea(radius){
  if (radius > -1) {
    let PI = Math.PI;
    const circle = PI * (radius ** 2);
    return circle;
  }
  else {
    console.log(undefined);
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined