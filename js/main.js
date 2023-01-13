$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
<!--text animation effect-->
<script>
    var global-services = document.getElementById("global-services-h1")
    /*cover*/
    function scrolListener1(e) {
    var screenTop1 = document.scrollingElement.scrollTop;
    var screenBottom1 = screenTop + innerHeight;
    var coverTop = global-services.getBoundingClientRect().top
    if (coverTop < screenBottom1 && coverTop < screenTop1) {
    global-services.classList.remove("hidetext");
    global-services.classList.add("showtext");
    global-services.classList.add("animate__flipInX");
    global-services.children[0].classList.remove("hidetext");
    global-services.children[0].classList.add("showtext");
    global-services.children[0].classList.add("animate__flipInX");

}
}
    document.onscroll = scrolListener1
</script>



