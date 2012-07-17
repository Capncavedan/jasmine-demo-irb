describe("FoodMath", function() {
  var maths;

  beforeEach(function() {
    spyOn( FoodMath, 'RaiseAlert' );
    maths = new FoodMath();
  });

  it("should be able to tell us about pi generally", function() {
    expect( maths.pi() ).toEqual('it is yummy!');
    expect( FoodMath.RaiseAlert ).not.toHaveBeenCalled();
  });

  it("should be able to tell us about raspberry pi", function() {
    expect( maths.pi('raspberry') ).toEqual('most excellent!');
    expect( FoodMath.RaiseAlert ).not.toHaveBeenCalled();
  });

  it("should be able to tell us about rhubarb pi", function() {
    expect( maths.pi('rhubarb') ).toEqual('one of the best!');
    expect( FoodMath.RaiseAlert ).toHaveBeenCalled();
  });

  it("should know the truth about mincemeat", function() {
    expect( maths.pi('mincemeat') ).toEqual('the horror! the horror!');
    expect( FoodMath.RaiseAlert ).not.toHaveBeenCalled();
  });

  it("should confirm the best variety", function() {
    expect( maths.pi('Dutch Apple a la mode') ).toEqual('the very best!');
    expect( FoodMath.RaiseAlert ).toHaveBeenCalledWith('ZOMG I LOVE DUTCH APPLE A LA MODE TOO!');
  });

  it("should give us pi when we really mean it", function() {
    expect( maths.pi('I mean it') ).toEqual(3.1415926536);
  });

});