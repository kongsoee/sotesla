$(document).ready(function(){
	

	//top_btn---------------------------------------

	$(".top_btn").hide();  //탑버튼 숨기기

	//스크롤이 350이상일때  TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
	$(window).scroll(function(){

		if($(this).scrollTop()>950){
			$(".top_btn").fadeIn();
		}else{
			$(".top_btn").fadeOut();
		}

	});
	
	//TOP버튼 클릭시 맨위로
	$(".top_btn a").click(function(){
		$("html,body").animate({scrollTop:"0"});
		return false;
	});


	$(".navi>li").hover(function(){
		// $(this).find("a").css({"opacity":"1"}).animate({top:"43px"});
		$(this).find(">ul").stop(true,true).slideDown();

	},function(){
		// $(this).find("a").css({"opacity":"0"}).animate({top:"50px"});
		$(this).find(">ul").stop(true,true).slideUp();
	});	

	var scrollEvent = false;
	var count = 0;

	$("html,body").on('mousewheel', function (c) {
		c.preventDefault();
		var m =c.originalEvent.wheelDelta;
		var sb = $("#con1").height();

		if(m > 1 && scrollEvent == false && count >= 1){
			console.log(count);
			scrollEvent = true;
			count--;
			$("html").stop(true,true).animate({scrollTop:sb*count},
			{duration:500, complete: function () {
					scrollEvent = false;}
			});
		}else if (m < 1 && scrollEvent == false && count < 6){
			console.log(count);
			scrollEvent = true;
			count++;
			$("html").stop(true,true).animate( {scrollTop:sb*count},
			{duration:500,  complete: function () {
				scrollEvent = false;}
			});
		}
	});

//box3)오른쪽에서 왼쪽으로....
	$(".box1").hover(function(){
		$(".box1 li:first-child").stop(true,true).animate({marginLeft:"-176px"},250);
	},function(){
		$(".box1 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	});

	$(".box2").hover(function(){
		$(".box2 li:first-child").stop(true,true).animate({marginLeft:"-176px"},250);
	},function(){
		$(".box2 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	});

	$(".box3").hover(function(){
		$(".box3 li:first-child").stop(true,true).animate({marginLeft:"-176px"},250);
	},function(){
		$(".box3 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	});

});