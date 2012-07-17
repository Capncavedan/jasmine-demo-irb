describe("FoodMath", function() {

  // context: class methods
  it("should confirm that pi in general is yummy", function() {
    expect( FoodMath.pi('any') ).toBe('is yummy!');
  })

  it("should confirm the best kind of pi", function() {
    expect( FoodMath.pi("Dutch Apple a la mode") ).toBe('is the very best!');
  })

  it("should handle a pi with no flavor", function() {
    expect( FoodMath.pi() ).toBe('');
    expect( FoodMath.pi('') ).toBe('');
    expect( FoodMath.pi(' ') ).toBe('');
  })

  // context: DOM interaction
  it("should display text with information about a flavor of pi", function() {
    loadFixtures('food_math.html');
    $("#flavor_select").flavorInfoSetter();
    $('#flavor_select').val("Raspberry");
    expect( $('#flavor_select').val() ).toBe('Raspberry');
    $('#flavor_select').trigger('change');
    expect( $('#flavor_info').html() ).toBe('is yummy!');
  })

  it("should display text with information about the best flavor of pi", function() {
    loadFixtures('food_math.html');
    $("#flavor_select").flavorInfoSetter();
    $('#flavor_select').val("Dutch Apple a la mode");
    expect( $('#flavor_select').val() ).toBe('Dutch Apple a la mode');
    $('#flavor_select').trigger('change');
    expect( $('#flavor_info').html() ).toBe('is the very best!');
  })

  it("should clear out the text area when no pi is selected", function() {
    loadFixtures('food_math.html');
    $("#flavor_select").flavorInfoSetter();
    $('#flavor_select').val("- pick one -");
    expect( $('#flavor_select').val() ).toBe('');
    $('#flavor_select').trigger('change');
    expect( $('#flavor_info').html() ).toBe('');
  })

});