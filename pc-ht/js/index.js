$(function(){
			/*设置容器的宽度*/
			var bgw;
			var bgwHerf;
			function a(){
				bgw = $('.bg').width();
				$("#container").css('width',bgw);
				bgwHerf = -(bgw/2);
				$("#container").css('margin-left',bgwHerf);
			}
			$("body").show();
			a();
			$(window).resize(function() {
				a();
			});

			/*球动画*/
			$(window).load(function() { 
				$("#ball").css('animation','bounce 5s linear'); 
				var bounceEnd = $("#ball");
				bounceEnd.bind("webkitAnimationEnd", function() {
				   $("#ball").css('animation','float 4s linear infinite'); 
				});
        	});

			/*菜单*/
			var check = true;
			$("#menu_title").click(function(){
				$("#not_click").toggle();
				$("body").css("overflow-y","hidden");
    			if (check) {
	     			$("#t1").text("收");
					$("#t2").text("起");
					$("#menu_title").css("background-color","#2f2725");
					$("#menu_contant").animate({left:52},500);
					check = false;
				}else{
					$(".nav_title").removeClass("menuHover");
					$(".nav_title").parent("li").find("ul").fadeOut(100);
					$("#t1").text("菜");
					$("#t2").text("单");
					$("#menu_title").css("background-color","rgba(0,0,0,0.7)");
					$("#menu_contant").animate({left:-338},500);
					check = true;
				}
  			});
  			$("#not_click").click(function(){

  				$(".nav_title").removeClass("menuHover");
				$(".nav_title").parent("li").find("ul").fadeOut(100);

  				$("#not_click").hide();
  				$("body").css("overflow-y","visible");
  				$("#menu_contant").animate({left:-338},500);
				$("#t1").text("菜");
				$("#t2").text("单");
				$("#menu_title").css("background-color","rgba(0,0,0,0.7)");
				check = true;
  			});
			// $('.nav li ul').hover(
			//     function(){
			//         $(this).siblings('.nav_title').parent("li").addClass('current');
			//     },
			//     function(){
			//         $(this).siblings('.nav_title').parent("li").removeClass('current');
			//     }
			// );

  			$(".nav_title").hover(function(){
				$(".nav_title").removeClass("menuHover");
				$(".nav_title").parent("li").find("ul").fadeOut(100);
				$(this).addClass("menuHover");
				$(this).parent("li").find("ul").not(".navabout .brand_detail").fadeIn(100);
				$(this).parents(".nav").find("li.current").addClass('current2').removeClass('current');
  			},function(){
				$(this).parents(".nav").find("li.current2").addClass('current').removeClass('current2');
				$(this).removeClass("menuHover");
  			});
  			$(".navabout").find(".content2").mouseenter(function(){
  				$(".brand_detail").fadeIn(100);
  			});


			/*产品中心*/
			$('.navproduct .picScroll-left ul li').hover(
			    function(){
			    	$(this).find("img:first-child").animate({opacity:"0"},300);
			        $(this).find("img:last-child").animate({"opacity":"1","top":"-30"},300);
			    },
			    function(){
			    	$(this).find("img:first-child").animate({opacity:"1"},300);
			    	$(this).find("img:last-child").animate({"opacity":"0","top":"0"},300);	
			    }
			);
			
			var thisimg;
			var n;
			$(".navproduct .picScroll-left ul li").click(function(){
				thisimg = $(this).find("img").attr("src");
				n = thisimg.replace(/[^0-9]/ig, "")
				$(".pro_imgdetial").find("img").attr("src", "img/book"+n+"_1_1.jpg");  
  				$(".pro_imgdetial").fadeIn(100);
  			});
  			$("#pro_back").click(function(){
  				$(".pro_imgdetial").fadeOut(100);
  			});

			// 解决插件的问题
			$(window).resize(function() {
				var w = $(".navproduct").find(".picScroll-left").find(".bd img").width();
				var num;
           		$(".navproduct .picScroll-left .bd ul").each(function(){
                	num = $(this).find('img').length;
           		})
           		var c = w*num;
            	$(".picScroll-left").find(".tempWrap").find("ul li").width(w);
            	$(".picScroll-left").find(".tempWrap").width(c);
            	$(".picScroll-left").find(".tempWrap").find("ul").width(c);
           	});

			/*手机端*/
			$(".menu_icon").click(function(){
				$(".list_con").animate({height:"100vh"},500);
				$(".list_con").css("overflow","scroll");
			})
			$(".c2").click(function(){
				$(".list_con").animate({height:"0"},500);
			})
			$(".ul1_headline").click(function(){
				$(this).parent("li").find(".ul1_con").animate({height:"46.1rem"},500);
			})
			$(".ul1_con .ul1_t").click(function(){
				$(this).parent(".ul1_con").animate({height:"0"},500);
			})
  			/*页面拖动*/
			var drag=function(obj){  
                obj.bind("mousedown",start);
                var L1;
                var L2;
                var Cx1,Cx2,Cx3;
                var origin;
                var ballLStart = parseFloat($('#ball').css('left'));
                var ballWidthH = parseFloat($('#ball').width()/2);

                var b1 = parseFloat($('.ball1').css('left'));
	            var b2 = parseFloat($('.ball2').css('left'));
	            var b5 = parseFloat($('.ball5').css('left'));
	            var f1 = parseFloat($('.flower1').css('left'));
	            var f5 = parseFloat($('.flower5').css('left'));
	            var f6 = parseFloat($('.flower6').css('left'));
	            var b7 = parseFloat($('.ball7').css('left'));
	            var b3 = parseFloat($('.ball3').css('left'));
	            var b4 = parseFloat($('.ball4').css('left'));
	            var f3 = parseFloat($('.flower3').css('left'));
	            var f7 = parseFloat($('.flower7').css('left'));


                function start(event){          
                    if(event.button==0){
                    	L1 = obj.offset().left;
						origin = parseInt($('#container').css('margin-left'))
                    	Cx1 = event.clientX;
                    	Cx3 = Cx1;
                        gapX=event.clientX-L1;
                        gapY=event.clientY-obj.offset().top; 
                        $(document).bind("mousemove",move);  
                        $(document).bind("mouseup",stop);       
                    }  
                    return false;  
                }


                function move(event){
					var ballTop = parseInt($('#ball').css('margin-top'));
                    var containerLeft = parseInt($('#container').css('margin-left'));
                	$("#ball").css({"margin-left":"0","margin-top":"0"});
                    var windowWidth = $(window).width()/2;
                	Cx2 = event.clientX;
					if(Cx2-Cx1>0){
                        if(containerLeft-windowWidth<-bgw+10)
                            return
					}else{
                        if(containerLeft>-windowWidth)
                            return
					}
					if(Cx2 > $(window).width()-10)
					    return
                	L2 = event.clientX-gapX;
                    obj.css({  
                        "left":L2+"px",
                        "top":(event.clientY-gapY-ballTop)+"px"
                    })
					var per = (Cx2-Cx1)/(windowWidth);
					//console.log(per);
					var result = origin-((-bgwHerf-windowWidth)*per);
                    $("#container").css('margin-left',result);

                	/*移到文字文字显示*/
	               	$(".adwordL").fadeIn(1000);
	               	$(".adwordR").fadeIn(1000);
	               

 					/*小元素浮动*/
					var R1 = (Cx2-Cx3)*0.1;
					var R3 = (Cx2-Cx3)*0.05;
	          
	                var ball1 = parseFloat($('.ball1').css('left'));
	                var ball2 = parseFloat($('.ball2').css('left'));
	                var ball5 = parseFloat($('.ball5').css('left'));
	                var flower1 = parseFloat($('.flower1').css('left'));
	                var flower5 = parseFloat($('.flower5').css('left'));
	                var flower6 = parseFloat($('.flower6').css('left'));

	                var ball7 = parseFloat($('.ball7').css('left'));
	                var ball3 = parseFloat($('.ball3').css('left'));
	                var ball4 = parseFloat($('.ball4').css('left'));
	                var flower3 = parseFloat($('.flower3').css('left'));
	                var flower7 = parseFloat($('.flower7').css('left'));
	            
	                function scroll(){
	                	if(Cx2-Cx3!=0){
	                		$(".ball1").css('left',ball1-R3);
	            			$(".ball2").css('left',ball2-R3)
	            			$(".ball5").css('left',ball5-R3);
	            			$(".ball7").css('left',ball7-R1);
	            			$(".ball3").css('left',ball3-R1);
	            			$(".ball4").css('left',ball4-R1);
	            			$(".flower1").css('left',flower1-R3);
	                		$(".flower5").css('left',flower5-R3);
	                		$(".flower6").css('left',flower6-R3);
	                		$(".flower3").css('left',flower3-R1);
	                		$(".flower7").css('left',flower7-R1);
	                	}else{
	                		return false;
	                	}
	                }
	                scroll();
	                Cx3 = Cx2;
                    return false;
                }

                
                function stop(){    
                    $(document).unbind("mousemove",move);  
                    $(document).unbind("mouseup",stop);
                    $(".adwordL").fadeOut(1000);
                    $(".adwordR").fadeOut(1000); 

                    function back(){
                    	$("#ball").animate({"left":ballLStart-ballWidthH,"top":"50%"},1000); 
                    	$("#container").animate({marginLeft:bgwHerf},1000);
                    	$(".ball1").animate({left:b1},1000);
                    	$(".ball2").animate({left:b2},1000);
                    	$(".ball3").animate({left:b3},1000); 
                    	$(".ball4").animate({left:b4},1000);
                    	$(".ball5").animate({left:b5},1000);
                    	$(".ball7").animate({left:b7},1000);
                    	$(".flower1").animate({left:f1},1000);
                    	$(".flower3").animate({left:f3},1000);
                    	$(".flower5").animate({left:f5},1000);
                    	$(".flower6").animate({left:f6},1000);
                    	$(".flower7").animate({left:f7},1000);
                    } 
                    back();
               	}  
            }
            obj=$("#ball");  
            drag(obj); 
		})