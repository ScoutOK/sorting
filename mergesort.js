function split(wholeArray){
  var splitArray = [];
  // console.log('whole-array: ' + wholeArray);
  // console.log('array length: ' + wholeArray.length);
  if(wholeArray.length == 1) {
    return wholeArray;
  }
  var half = Math.ceil(wholeArray.length/2);
  splitArray.push(wholeArray.slice(0, half));
  splitArray.push(wholeArray.slice(half));
  return splitArray;
}

function merge(arr1, arr2){
  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    throw new TypeError('merge expected arrays')
  }

  // var pointer1 = 0;
  // var pointer2 = 0;
  var sortedArr = [];
  // while(pointer1 < arr1.length && pointer2 < arr2.length){
  //   if(arr1[pointer1] <= arr2[pointer2]){
  //     sortedArr.push(arr1[pointer1])
  //     pointer1 ++;
  //   }
  //   else{
  //     sortedArr.push(arr2[pointer2])
  //     pointer2++;
  //   }
  // }

  while(arr1.length && arr2.length){
    if(arr1[0] <= arr2[0]){
      sortedArr.push(arr1.shift())
    }
    else{
      sortedArr.push(arr2.shift())
    }
  }
  var remainder = arr2.length >= arr1.length ? arr2 : arr1;
  sortedArr = sortedArr.concat(remainder);
  return sortedArr;


}

function mergeSort(array) {
  if (array.length < 2){
    return array;
  }

  else{
    // console.log(array);

    var splitArray = split(array);
    // console.log(splitArray[0], splitArray[1]);
    returnArray = merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));

    // console.log(returnArray);
    return returnArray;
  }

  // if(array.length > 1) {
  //   array = split(array);
  //   array += array.forEach(mergeSort);
  // } else {
  //   return array;
  // }
  // return array;
}

