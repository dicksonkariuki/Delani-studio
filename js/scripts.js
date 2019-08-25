$(document).ready(function() {
  $("#design").click(function() {
    $(".dezine").toggle(1000);
    $(".img1").toggle(1000);
  });
  $("#development").click(function() {
    $(".developments").toggle(1000);
    $(".img2").toggle(1000);
  });
  $(".management").click(function() {
    $(".productsm").toggle(100);
  });
  $(".what").css("text-align", "center");
});
$("form.data").submit(function(event) {
  var name = $("input#name").val();
  var email = $("input#email").val();
  var textarea = $("input textarea").val();
  if (
    $("input#name").val() &&
    $("input#email").val() &&
    $("input textarea").val() != ""
  ) {
    alert(name + ".We have received your message.Thankyou for reaching us.");
  } else {
    alert("please input all your details");
  }
  event.preventDefault();
});
