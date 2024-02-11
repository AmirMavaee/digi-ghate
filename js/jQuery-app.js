$(document).ready(function () {
    $(".question-header").click(function(){
        $(".question-desc").css("display", "block").animate({ top: '0' }, 1000);
    })
});