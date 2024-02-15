$(document).ready(function () {
    $(".question-header").click(function (e) { 
        e.preventDefault();        
        $(this).find('.pluse-image').toggleClass('rotate-135');
    });

    let badgeText = parseInt($(".badge").text());
    $(".add-cart").click(function () { 
        $(".badge").removeClass("d-none");
        badgeText+=1;
        $(".badge").text(badgeText)
    });
    $(".cart").click(function () { 
        if(badgeText === 1) 
        $(".badge").addClass("d-none");
        badgeText-=1;
        $(".badge").text(badgeText)
    });
});