describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
    // your code here
  });

  it('is able to split an array of odd length into two halves', function() {expect(split([1,2,3,4,5])).toEqual([[1,2, 3],[4, 5]])
    // your code here
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([2, 4], [3, 5])).toEqual([2, 3, 4, 5])
  });

  it('is able to merge two sorted arrays with more complexity', function(){
    // test the merging algorithm
    expect(merge([2, 4, 7, 26, 30], [3, 5, 6, 25])).toEqual([2, 3, 4, 5, 6, 7, 25, 26, 30])
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([10], [2, 4, 5, 6, 7, 9, 10, 11, 13, 19])).toEqual([2, 4, 5, 6, 7, 9, 10, 10, 11, 13, 19])
  });

  it('throws an error when input is not an array', function(){
    expect( function() {merge([1, 2], "test"); }).toThrowError(TypeError, 'merge expected arrays');
    });
});

describe('Merge Sort', function() {
  it('can sort array', function() {expect(mergeSort([2, 3, 4, 1])).toEqual([1,2,3,4])
    // your code here
  });

  it('can sort a long array', function() {expect(mergeSort([1, 12, 6, 2, 11, 16, 7, 5, 8, 19])).toEqual([1, 2, 5, 6, 7, 8, 11, 12, 16, 19])
    // your code here
  });
});
