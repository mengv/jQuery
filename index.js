
// class
// $("h1").addClass("big-title margin-50");


// attribute
$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");


// event listener
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });


// JS
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// // jquery
// $("button").click(function() {
//   $("h1").css("color", "purple");
// });




// $("input").keypress(function() {
//   console.log(event.key);
// });

// Event listener click/keypress
// $(document).keypress(function(event) {
//   $("h1").text(event.key);
// });


// Method : On, change between such as mouseover, click.
//
// $("h1").on("mouseover", function () {
//   $("h1").css("color", "purple");
// })


$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
