$(document).ready(function() {
  $("form#poly").submit(function(event) {
    event.preventDefault()
    console.log(event);

//
  var con = parseInt$("input:radio[name=conservative]:checked").val();
  console.log(con);
  var lib = parseInt$("input:radio[name=liberal]:checked").val();
  var mod = parseInt$("input:radio[name=moderate]:checked").val();


  var politicalScore = con + lib + mod;


  if (politicalScore <= 9) {
    ("#conservative").show();
  } else if (politicalScore >= 18 && politicalScore >= 9) {
    ("#liberal").show();
  }
    else if (politicalScore > 18) {
      ("moderate").show();
    }
});

});
