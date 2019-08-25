$(document).ready(function() {
  $("#design").click(function() {
    $(".dezine").toggle(1000);
    $(".img1").toggle(1000);
  });
  $("#development").click(function() {
    $(".develo").toggle(1000);
    $(".img2").toggle(1000);
  });
  $("#management").click(function() {
    $(".work3").toggle("slow");
    $(".produce").toggle("slow");
  });
  $(".what").css("text-align", "center");
  $(".what").css("font-weight", "bold");
});
$("form.data").submit(function(event) {
  var name = $("input#name").val();
  var email = $("input#email").val();
  var textarea = $("input#message").val();
  if (
    $("input#name").val() &&
    $("input#email").val() &&
    $("input#message").val() != ""
  ) {
    alert(name + ".We have received your message.Thankyou for reaching us.");
  } else {
    alert("please input all your details");
  }
  event.preventDefault();
});
$(document).ready(function() {
  $("#work4")
    .mouseenter(function() {
      $(".cover4").show();
    })
    .mouseleave(function() {
      $(".cover4").hide();
    });

  $("#work3")
    .mouseenter(function() {
      $(".cover3").show();
    })
    .mouseleave(function() {
      $(".cover3").hide();
    });

  $("#work2")
    .mouseenter(function() {
      $(".cover2").show();
    })
    .mouseleave(function() {
      $(".cover2").hide();
    });

  $("#work1")
    .mouseenter(function() {
      $(".cover1").show();
    })
    .mouseleave(function() {
      $(".cover1").hide();
    });
});

$(document).ready(function() {
  $("#work5")
    .mouseenter(function() {
      $(".cover5").show();
    })
    .mouseleave(function() {
      $(".cover5").hide();
    });

  $("#work6")
    .mouseenter(function() {
      $(".cover6").show();
    })
    .mouseleave(function() {
      $(".cover6").hide();
    });

  $("#work7")
    .mouseenter(function() {
      $(".cover7").show();
    })
    .mouseleave(function() {
      $(".cover7").hide();
    });

  $("#work8")
    .mouseenter(function() {
      $(".cover8").show();
    })
    .mouseleave(function() {
      $(".cover8").hide();
    });
});
