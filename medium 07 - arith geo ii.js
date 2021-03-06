function ArithGeoII(arr) { 

  if(arr.length == 1) return -1;

  var a = arr[arr.length - 1] - arr[arr.length - 2];
  var g = arr[arr.length - 1] / arr[arr.length - 2];
  
  for(var i = 0; i < arr.length - 1; i ++) {
    if(arr[i] + a !== arr[i + 1]) {
      if(arr[i] * g !== arr[i + 1]) {
        return -1;
      } else {
        return "Geometric";
      }
    } else {
      return "Arithmetic";
    }
  }       
}
