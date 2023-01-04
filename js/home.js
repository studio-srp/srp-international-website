//scroll effect
var text = document.getElementById("what-we-offer-h1");

function scrolListener(e) {
  var screenTop = document.scrollingElement.scrollTop;
  var screenBottom = screenTop + innerHeight;
  var textTop = text.getBoundingClientRect().top;
  if (textTop < screenBottom && textTop < screenTop) {
    text.classList.remove("hidetext");
    text.classList.add("showtext");
    text.classList.add("animate__flipInX");
    text.children[0].classList.remove("hidetext");
    text.children[0].classList.add("showtext");
    text.children[0].classList.add("animate__flipInX");
  }
}

document.onscroll = scrolListener;

$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        //chnage count up speed here
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
