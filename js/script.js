$(document).ready(function () {
    
});
$(window).on('scroll',function(){
    var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(posTop>100){
        $('#navmenu').css({
            'height':'60px',
            'background-color':'rgba(0,0,0,0.8)','border-bottom':'1px solid white','transition-duration':'1.0s'
        });
        $('#navmenu>.nav').css({
            'margin-top':'0px',
            'margin-bottom':'0px',
            'transition-duration':'1.0s'
        })
    }
    else{
        $('#navmenu').css({
            'height':'100px',
            'background-color':'rgba(0,0,0,0.0)','border-bottom':'1px solid rgba(0,0,0,0)','transition-duration':'1.0s'
        });
        $('#navmenu>.nav').css({
            'margin-top':'20px',
            'margin-bottom':'20px',
            'transition-duration':'1.0s'
        })
    }
});