$(function () {

    $('#portfolio').on('click', function (event) {
        if ($('#contact').val('style' === "display") ){
            $('#contact').val('style', "display: none;")
        } else {
            $('#main').toggle('show');
        }
    });

    $('#contact').on('click', function (event) {
        if ($('#portfolio').val('style' === "display") ){
            $('#portfolio').val('style', "display: none;")
        } else {
            $('#main').toggle('show');
        }
    });

    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });

});