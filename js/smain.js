$(document).ready(function(){

$(".navi>li").hover(function(){
		// $(this).find("a").css({"opacity":"1"}).animate({top:"43px"});
		$(this).find(">ul").stop(true,true).slideDown();

	},function(){
		// $(this).find("a").css({"opacity":"0"}).animate({top:"50px"});
		$(this).find(">ul").stop(true,true).slideUp();
	});	

});