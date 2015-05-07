Solutions to the in-class exercises:
```///

function myEach(arr, cb){
  var len = arr.length;
  for(var i=0; i<len; i++){
     cb(arr[i], i, arr);
  }
}

///

function myMap(arr, cb){
  var len = arr.length;
  var newArr = [];
  for(var i=0; i<len; i++){
     newArr[i] = cb(arr[i], i, arr);
  }
  return newArr;
}

///

function myReduce(arr, cb, val){
  var len = arr.length;
  val = val || 0;
  for(var i=0; i<len; i++){
     val = cb(val, arr[i], i, arr)
  }
  return val;
