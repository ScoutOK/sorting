var bubbleSort = function (array) {
  if(!Array.isArray(array)) {//if input is not an array
    throw new TypeError("Please insert array");
  }

  if (array.length <= 1) {//for empty or array with one element
    return array;
  }
  var lastUnsorted = array.length - 1;//where the last unsort data piece is
  while(lastUnsorted){
    var i = 0;//starting index for bubble
    while (i < lastUnsorted) {
      if(typeof array[i] !== 'number' || typeof array[i + 1] !== 'number' ) {//take care of a non-number array element
        throw new TypeError("Please insert array of numbers");
      }
      if (array[i] > array[i+1]) {//see if numbers need to be swapped
        var tempStore = array[i];
        array[i] = array[i+1];
        array[i+1] = tempStore;
      }
      i++
    }
    lastUnsorted--
  }
  return array;

}
