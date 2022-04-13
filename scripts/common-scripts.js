
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
        
        $('#tab-content-wrap div.tab-content').hide();
        $('#tab-content-wrap div.tab-content').eq(0).show();
        $('#tab_list li').eq(0).addClass('active');
        
        $('#tab_list li').each(function(i){
            $(this).click(function(){
                if($(this).hasClass('active')) return false
                else{
                    $('#tab_list li').removeClass('active')
                    $(this).addClass('active')
                    $('#tab-content-wrap div.tab-content').hide();
                    $('#tab-content-wrap div.tab-content').eq(i).show()
                }
            });
        });
		
        $('input:text,input:password,textarea').focus(function(){
            if(this.value==this.defaultValue){
                this.value='';

            }
        })
        $('input:text,input:password,textarea').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $(this).removeClass('value-added')
            }
            else{
                $(this).addClass('value-added')
            }

        })
        
        // Selectric styled dropdown calling
        if($('select.styled-select').length){
            $('select.styled-select').selectric();
        }

        $('#phone-nav').click(function(){
            $('.main-nav').slideToggle();
        });
        
        $(window).scroll(function(){
           if($(window).scrollTop() > 250){
               $('.main-header').addClass('fixedTop')
           }
            else{
                $('.main-header').removeClass('fixedTop')
            }
        });
        
        if($('#content-nav').length){

            // Set variable for content nav section
            if($(window).width() > 767){
                var contentNav = $('#content-nav').offset().top - 96
            }
            else{
                var contentNav = $('#content-nav').offset().top - 50
            }

            //var contentNav = $('#content-nav').offset().top

            $(window).scroll(function(){

                if($(window).scrollTop() >= contentNav ){
                    $('#content-nav').addClass('fixedNav')
                    $('#who-we-are').addClass('content-nav-fixed')
                }
                else{
                    $('#content-nav').removeClass('fixedNav')
                    $('#who-we-are').removeClass('content-nav-fixed')
                }
            })
            
            $('.content-nav-section ul li a').click(function(e){
                e.preventDefault()
                $('.content-nav-section ul li').removeClass('active')
                $(this).parent('li').addClass('active')

                if($(window).width() > 991){
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top - 155
                    }, 1000, 'easeInOutCubic');
                    
                }
                else{
                    $('html, body').animate({
                        scrollTop: $($(this).attr('href')).offset().top - 148
                    }, 1000, 'easeInOutCubic');
                }
            });
        
        }
        $('#tabs-states > img').hide()
        $('#tabs-states > img').eq(0).show()
        $('#tab-contents-container > div.tab-contents').hide()
        $('#tab-contents-container > div.tab-contents').eq(0).show()
        $('#tabs-map > area').each(function(i){
            
            $(this).click(function(e){
                e.preventDefault()
                $('#tabs-states > img').hide()
                $('#tabs-states > img').eq(i).show()
                $('#tab-contents-container > div.tab-contents').hide()
                $('#tab-contents-container > div.tab-contents').eq(i).show()
                
            })

           if($(window).width() > 1024){
                $(this).mouseenter(function(e){
                    $('#hover-states > img').hide()
                    $('#hover-states > img').eq(i).show()

                    
                })

                $(this).mouseleave(function(){
                   $('#hover-states > img').hide()
                })
           }
            
        })
        
        if( $('#circle-tab-section').length){
            $('img[usemap]').rwdImageMaps();
        }
        
        
	})// End ready function.



    $(window).load(function(){
        // Begin common slider
        if ( $('#hero-slider-wrap').length == 0 ) return false

        $('#hero-slider-wrap').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: false,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })  
        

    })
		

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})