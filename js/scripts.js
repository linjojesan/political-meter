$(document).ready(function() {
  $("#poly").submit(function(event) {
    event.preventDefault()
    console.log("working");

//
  var war = parseInt$("input:radio[name=military]:checked").val();

  var sameSex = parseInt$("input:radio[name=legal]:checked").val();

  var climate = parseInt$("input:radio[name=evironment]:checked").val();

  var ammend = parseInt$("input:radio[name=ammendment]:checked").val();

  var gun = parseInt$("input:radio[name=assault]:checked").val();

  var trade = parseInt$("input:radio[name=nafta]:checked").val();

  var welfare = parseInt$("input:radio[name=public]:checked").val();

  var tested = parseInt$("input:radio[name=drugs]:checked").val();

  var construction = parseInt$("input:radio[name=dakota]:checked").val();


  var politicalScore = war + sameSex + climate + ammend + gun + trade + welfare + tested + construction;


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
