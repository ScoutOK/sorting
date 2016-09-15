describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('properly sorts array', function(){
    expect( bubbleSort([1, 8, 2, 28]) ).toEqual( [1, 2, 8, 28] );
  });

  it('properly sorts array', function(){
    expect( bubbleSort([15, 5, 1, 6, 12, 9, 18, 13, 11, 4]) ).toEqual( [1, 4, 5, 6, 9, 11, 12, 13, 15, 18] );
  });

  it('properly sorts array', function(){
    expect( bubbleSort([337, 53, 692, 951, 198, 893, 410, 921, 534, 800, 335, 193, 476, 601, 73, 69, 751, 578, 664, 244, 257, 798, 324, 600, 202, 373, 736, 744, 654, 298, 71, 851, 553, 965, 547, 620, 88, 635, 150, 681, 843, 40, 131, 243, 639, 684, 482, 343, 1, 219]) ).toEqual( [1, 40, 53, 69, 71, 73, 88, 131, 150, 193, 198, 202, 219, 243, 244, 257, 298, 324, 335, 337, 343, 373, 410, 476, 482, 534, 547, 553, 578, 600, 601, 620, 635, 639, 654, 664, 681, 684, 692, 736, 744, 751, 798, 800, 843, 851, 893, 921, 951, 965] );
  });

  it('throws an error when input is not an array', function(){
    expect( function() {bubbleSort("test"); }).toThrowError(TypeError, 'Please insert array');
    });

  it('throws an error when input is not an array', function(){
    expect( function() {bubbleSort([15, 5, 1, 6, "twelve", 9, 18, 13, 11, 4]); }).toThrowError(TypeError, 'Please insert array of numbers');
    });

});
