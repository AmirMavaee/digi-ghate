$(document).ready(function () {
    $(".question-header").click(function (e) { 
        e.preventDefault();        
        $(this).find('.pluse-image').toggleClass('rotate-135');
    });
});