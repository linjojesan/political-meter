$(document).ready(function() {
  $(".form-check").submit(function(event) {
  var mil = $("input:radio[name=military]:checked").val();
  var legal = $("input:radio[name=samesex]:checked").val();
  var environ = $("input:radio[name=evironment]:checked").val();
  var sec = $("input:radio[name=second]:checked").val();
  var banning = $("input:radio[name=ban]:checked").val();
  var nafta = $("input:radio[name=freetrade]:checked").val();
  var pub = $("input:radio[name=cuts]:checked").val();
  var drug = $("input:radio[name=drugs]:checked").val();
  var dak = $("input:radio[name=dakota]:checked").val();

  if (mil === 1)
  console.log(mil);

});
});
