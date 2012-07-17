describe("FoodMath", function() {
  var maths;

  beforeEach(function() {
    maths = new FoodMath();
  });

  it("should be able to tell us about pi generally", function() {
    expect( maths.pi() ).toEqual('it is yummy!');
  });

  it("should be able to tell us about raspberry pi", function() {
    expect( maths.pi('raspberry') ).toEqual('most excellent!');
  });

  it("should be able to tell us about rhubarb pi", function() {
    expect( maths.pi('rhubarb') ).toEqual('one of the best!');
  });

  it("should know the truth about mincemeat", function() {
    expect( maths.pi('mincemeat') ).toEqual('the horror! the horror!');
  });

  it("should confirm the best variety", function () {
    spyOn( FoodMath, 'RaiseAlert' );
    expect( maths.pi('Dutch Apple a la mode') ).toEqual('the very best!');
    expect( FoodMath.RaiseAlert).toHaveBeenCalledWith('ZOMG I LOVE DUTCH APPLE A LA MODE TOO!');
  });

});