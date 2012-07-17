var FoodMath = function () {
};

FoodMath.RaiseAlert = function(msg) {
  alert(msg);
};

FoodMath.prototype.pi = function(flavor) {
  var ret = "it is yummy!"

  if (flavor == 'mincemeat')
    return "the horror! the horror!"

  if (flavor == 'raspberry')
    ret = "most excellent!";

  if (flavor == 'rhubarb') {
    ret = "one of the best!";
    FoodMath.RaiseAlert("but none of that strawberry-rhubarb stuff please");
  }

  if (flavor == 'Dutch Apple a la mode') {
    ret = "the very best!"
    FoodMath.RaiseAlert("ZOMG I LOVE DUTCH APPLE A LA MODE TOO!");
  }

  if (flavor == 'I mean it') {
    ret = 3.1415926536;
  }

  return ret;
};