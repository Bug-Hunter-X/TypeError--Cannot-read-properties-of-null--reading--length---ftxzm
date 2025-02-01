function foo(x){
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; //This line throws an error if x is not an object with a length property
}