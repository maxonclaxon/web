$(document).ready(function () {
    
    
    
});
$(window).on('scroll',function(){
    var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(posTop>100){
        $('#navmenu').css({'background-color':'rgba(0,0,0,0.8)','transition-duration':'1.0s','border-bottom':'1px solid white'});
    }
    else{
        $('#navmenu').css({'background-color':'inherit','transition-duration':'1.0s'});
    }
});