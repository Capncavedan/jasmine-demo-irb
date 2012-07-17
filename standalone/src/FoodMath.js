var FoodMath = function () {
};

FoodMath.RaiseAlert = function(msg) {
  alert(msg);
};

FoodMath.prototype.pi = function(flavor) {
  if (flavor == 'raspberry')
    return "most excellent!";

  if (flavor == 'rhubarb')
    return "one of the best!";

  if (flavor == 'mincemeat')
    return "the horror! the horror!"

  if (flavor == 'Dutch Apple a la mode') {
    FoodMath.RaiseAlert("ZOMG I LOVE DUTCH APPLE A LA MODE TOO!");
    return "the very best!"
  }

  return "it is yummy!";
};