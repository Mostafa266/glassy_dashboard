$(function () {

    $(".hiddenBtn").each(function (i) {
        $(this).on('click', function (e) {
             $(e.currentTarget.children[0]).toggleClass('is-open')

        })
    });


})