$(document).ready(function () {
    var str = "We are a creative design agency specialized in interactive and engaging experiences. Get in touch to build your own!"

    $("#en").on("click", function () {
        str = "We are a creative design agency specialized in interactive and engaging experiences. Get in touch to build your own!"
        $("#en").addClass("active")
        $("#ru").removeClass("active")
        typeText()
    })

    $("#ru").on("click", function () {
        str = "Мы - креативное дизайнерское агентство, специализирующееся на интерактивном и увлекательном опыте. Свяжитесь, чтобы создать свой собственный!"
        $("#ru").addClass("active")
        $("#en").removeClass("active")
        typeText()
    })

    typeText = () => {
        $('.css-typing').html('')
        var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
        $(spans).hide().appendTo('.css-typing').each(function (i) {
            $(this).delay(100 * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, 100);
        });
    }

    typeText()
})