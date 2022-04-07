$(document).ready(function(){

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
			{duration:300, complete: function () {
					scrollEvent = false;}
			});
		}else if (m < 1 && scrollEvent == false && count < 6){
			console.log(count);
			scrollEvent = true;
			count++;
			$("html").stop(true,true).animate({scrollTop:sb*count},
			{duration:300, complete: function () {
				scrollEvent = false;}
			});
		}
	});


});