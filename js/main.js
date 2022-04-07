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

	//갤러리--------------------------------------------
	var img_w= $(".gallery ul li").width();   //이미지의 가로너비
	var img_n= $(".gallery ul li").length;  //이미지의 총개수  
	var oldidx=0;  //기존이미지
	var index=0;  //선택된 새이미지


	//index번째 비주얼이미지 이동하는 함수생성
	function slideImg(index){

		targetX=-(index*img_w); //움직이는 거리(너비)

		$(".gallery ul").animate({left:targetX},1000);
		$(".slide_btn ul li").eq(oldidx).removeClass("active");  //기존버튼 비활성화
		$(".slide_btn ul li").eq(index).addClass("active");  //선택버튼 활성화
		oldidx=index;

	} 

	//슬라이드 자동함수 생성
	function slideAuto(){
		index++;	
		if(index==img_n){ //img_n은 이미지개수 4, index는 0,1,2,3
			index=0;
		}
		slideImg(index);
	}

	auto=setInterval(slideAuto,4000);



	//하단버튼 클릭
	$(".slide_btn ul li").click(function(){

		clearInterval(auto);  //버튼클릭시 자동함수 해지

		index=$(this).index();
		slideImg(index);

		auto=setInterval(slideAuto,4000); //버튼 클릭안할땐 다시 자동함수 실행

	});

//탭메뉴

$(".tab li").click(function(){

		val=$(this).index(); 
		num=+80*val; //세로 70px씩 증가됨
		$(".tab-header .tab-highlight").animate({"top":num});
		// $(".tab li a").css("color","#fff"); // 탭의 모든 글자색 
		// $(this).find(">a").css("color","#fff");  //선택된 탭의 글자색

		$(".panel>li").hide(); //기존의 보여진 내용 숨기기
		$($(this).find(">a").attr("href")).stop(true,true).fadeIn();
		//선택된 탭의 내용 href 연결된내용 보여주기 
		
	});

});