var FoodMath = {

  pi: function(flavor) {
    if (flavor == 'Dutch Apple a la mode')
      return "is the very best!";

    if (!flavor || /^\s*$/.test(flavor))
      return '';

    return "is yummy!";
  }

};

(function($){
  $.fn.flavorInfoSetter = function() {
    $(this).change(function() {
      var newInfo = FoodMath.pi( $(this).val() );
      $('#flavor_info').html(newInfo);
    });
  };
})(jQuery);

$(function() {
  $("#flavor_select").flavorInfoSetter();
});