$(document).ready(function () {
  // executes when HTML-Document is loaded and DOM is ready

  $(".card").hover(
    function () {
      $(this).addClass("shadow-lg").css("cursor", "pointer");
    },
    function () {
      $(this).removeClass("shadow-lg");
    }
  );

  // document ready
});

//----------------------------------

// $(document).ready(function () {
//   $(".card").hover(
//     // trigger when mouse hover
//     function () {
//       $(this).animate({
//           marginTop: "-=1%",
//         },200);
//     },

//     // trigger when mouse out
//     function () {
//       $(this).animate({
//           marginTop: "0%",
//         },200);
//     }
//   );
// });
