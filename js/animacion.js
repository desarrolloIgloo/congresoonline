$(document).ready(function() {
   

     //var ua = navigator.userAgent.toLowerCase(); 
     /*if (ua.indexOf('safari') != -1) { 
       if (ua.indexOf('chrome') > -1) {
           //alert("1") // Chrome
       } else {
           //alert("2") // Safari
           $('#video1').prop('autoplay', false);
           $('img').css('display', "block");
           document.ontouchmove = function(event){
               event.preventDefault();
           }
       }
     }*/
     $(window).load(function(){
         $("#ingreso").css('display','block')
     });
       
});

function ingresar(pabellon) {
    $("#ingreso").addClass('zoom');
    /*$("#ingreso").animate({
        left: 520,
        top: -300,
    },5);*/
    $("#ingreso").css('z-index', 1);
    // $("#ingreso").fadeOut(1000);
    // $("#ingreso").animate({duration:1000,function(){$("#ingreso").css('display','none'); }});
    $("#menu-inicio").css('z-index', 2);
    $("#menu-inicio").css('display', 'none');
    setTimeout(function(){$(pabellon).fadeIn(1000);
    $("#nav").fadeIn(1000);},2000); 
   
}
function animarIngreso(pabellon){
    
}
function mostrarPabellon(){
    //$("#ingreso").css('display', 'none');
    //$("#interior").css('z-index', 3);
    //$("#interior").css('display', 'block');
    
}                   
function mostrarMenu() {
   
}

function iniciar() {
    var videoInt = $('#video1');
    videoInt[0].play();
    $('#inicio-safari').css('display', "none");
}
function cambiarPabellon(pabNuevo) {
    var pabAnterior = $(".pabellon").filter(function() {
        return $(this).css("display") === "block";
    });

    pabAnterior = $(pabAnterior).attr("id");
    var pabOculto = '#' + pabAnterior;
    $(pabOculto).fadeOut(1000);
    $(pabNuevo).fadeIn(1000);
    /*if ($(pabAnterior + '> video').css('display') !== 'none') {
        $(pabOculto).css({
            opacity: 1.0,
            visibility: "visible"
        }).animate({
            opacity: 0
        }, 700, function() {
            $('.video-interna').css('display', 'none');
            $(pabOculto).css('visibility', 'hidden');
            $('.pabellon > img').css('display', 'block');
            $(pabNuevo).css({
                opacity: 0,
                visibility: "visible"
            }).animate({
                opacity: 1
            }, 600);

        });
    }
    else {
        if ($(pabAnterior + '> video').css('display') === 'none') {
            $(pabOculto).css({
                opacity: 1.0,
                visibility: "visible"
            }).animate({
                opacity: 0
            }, 700, function() {
                $(pabOculto).css('visibility', 'hidden');
                $(pabNuevo).css({
                    opacity: 0,
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, 600);

            });
        }
    }*/

}