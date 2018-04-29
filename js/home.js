$(function () {
	var index = 0;
	function show() {
		index++;
		if(index == $(".main_box").children(".mainImg").length){
			index = 0;
		}
		$(".main_box").children(".mainImg").eq(index).stop().fadeIn().siblings(".mainImg").stop().fadeOut();
		$(".mainNav").children().removeClass("active");
		$(".mainNav").children().eq(index).addClass("active");
	}
	//图片轮播
	var timer = setInterval(show,3000);
	//下标的hover事件
	$(".mainNav").children().hover(fn1,fn2);
	function fn1() {
		clearInterval(timer);
		$(".mainNav").children().removeClass("active");
		$(".mainNav").children().eq($(this).index()).addClass("active");
		$(".main_box").children(".mainImg").eq($(this).index()).stop().fadeIn().siblings(".mainImg").stop().fadeOut();
	}
	function fn2() {
		num = $(this).index() + 1;
		timer = setInterval(function () {
			if(num == $(".main_box").children(".mainImg").length){
				num = 0;
			}
			$(".main_box").children(".mainImg").eq(num).stop().fadeIn().siblings(".mainImg").stop().fadeOut();
			$(".mainNav").children().removeClass("active");
			$(".mainNav").children().eq(num).addClass("active");
		},3000)
	}
	//左按钮的hover和单击事件
	$(".mainLeft").hover(add1,add2);
	$(".mainRight").hover(add1,add2);
	function add1() {
		clearInterval(timer);
	}
	function add2() {
		timer = setInterval(show,3000);
	}
	
	$(".mainLeft").click(function () {
		if(index > 0){
			index --;
		} else {
			index = $(".main_box").children(".mainImg").length - 1;
		}
		$(".main_box").children(".mainImg").eq(index).stop().fadeIn().siblings(".mainImg").stop().fadeOut();
		$(".mainNav").children().removeClass("active");
		$(".mainNav").children().eq(index).addClass("active");
	})
	//右按钮的hover和单击事件
	
	$(".mainRight").click(function () {
		if(index < $(".main_box").children(".mainImg").length - 1){
			index ++; 
		}else{
			index = 0;
		}
		$(".main_box").children(".mainImg").eq(index).stop().fadeIn().siblings(".mainImg").stop().fadeOut();
		$(".mainNav").children().removeClass("active");
		$(".mainNav").children().eq(index).addClass("active");
	})
	
	//
	$(".brand_bot").find("li").hover(function () {
		$(this).find(".imghide").stop().animate({
			top:"0"
		})
	},function () {
		$(this).find(".imghide").stop().animate({
			top:"100px"
		})
	})
	//
	var num =0;
	$(".rightBtn").click(function (){
		num++;
		if(num >= $(".hotflag").find("li").length - 1){
			num = $(".hotflag").find("li").length - 1;
		}
		$(".hotflag").find("li").eq(num).stop().show().siblings().stop().hide();
	})
	$(".leftBtn").click(function () {
		num--;
		if(num <= 0){
			num = 0;
		}
		$(".hotflag").find("li").eq(num).stop().show().siblings().stop().hide();
	})
	//
	$(".hotflagson").hover(flag1,flag2)
	function flag1(){
		$(this).find("img").stop().hide();
		$(this).find(".hothidden").stop().show();
		$(this).find(".topline").stop().animate({"width":"166px"});
		$(this).find(".bottomline").stop().animate({"width":"166px"});
		$(this).find(".leftline").stop().animate({"height":"85px"});
		$(this).find(".rightline").stop().animate({"height":"85px"});
	}
	function flag2(){
		$(this).find("img").stop().show();
		$(this).find(".hothidden").stop().hide();
		$(this).find(".topline").stop().animate({"width":"0"});
		$(this).find(".bottomline").stop().animate({"width":"0"});
		$(this).find(".leftline").stop().animate({"height":"0"});
		$(this).find(".rightline").stop().animate({"height":"0"});
	}
	//
	$(".hotsame_link").find("li").mouseenter(same1)
	function same1(){
		$(this).css("background","#000");
		$(this).siblings().css("background","#999");
		$(".hotsame").find("li").eq($(this).index()).stop().show().siblings().stop().hide();
	}
//
	$(".hotsameRight").children().children().hover(move1,move2);
	function move1(){
		var mLeft1 = parseInt($(this).find(".toptext").css("margin-left")) - 20 + "px";
		var mLeft2 = parseInt($(this).find(".toppic").css("margin-left")) + 20 + "px";
		$(this).find(".toptext").css("margin-left",mLeft1)
		$(this).find(".toppic").css("margin-left",mLeft2)
		
	}
	function move2(){
		var mLeft1 = parseInt($(this).find(".toptext").css("margin-left")) + 20 + "px";
		var mLeft2 = parseInt($(this).find(".toppic").css("margin-left")) - 20 + "px";
		$(this).find(".toptext").css("margin-left",mLeft1)
		$(this).find(".toppic").css("margin-left",mLeft2)
	}
	//tab切换第三个
	$(".darmin").children().hover(fn3,fn4);
	function fn3() {
		$(this).find(".darminx").stop().show();
	}
	function fn4(){
		$(this).find(".darminx").stop().hide();
	}
	//楼梯索引的hover事件
	$(".shoplink").find("li").hover(fn5,fn6);
	function fn5(){
		$(this).find("div").stop().animate({"top":"-50px"},300);
	}
	function fn6(){
		$(this).find("div").stop().animate({"top":"0px"},300);
	}
	//楼梯事件
	$(".shoplink").find("li").click(function () {
		var _scrollTop = $(".shoplists").eq($(this).index()).offset().top;
		$(document).scrollTop(_scrollTop);
	})
	//
	var flag;
	var Flag;	
	var b;
	$(".pagebox").find("span").click(function () {
		$(this).parent().find("span").css("background","#999");
		$(this).css("background","#c77f40");
		$(this).parent().parent().prev().children("li").eq($(this).index()).stop().show().siblings().stop().hide();
		 b = $(this).index();
		 flag = true;
		 
	})
	var c = 0;
	$(".next").click(function (){
			if(!flag){
				c++;
				if(c > $(this).parent().parent().prev().children("li").length - 1){
				c = 0;
				}
				b = c;
		}else{
			b++;
		}
		if(b > $(this).parent().parent().prev().children("li").length - 1){
			b = 0;
		}
		$(this).parent().prev().find("span").eq(b).css("background","#c77f40").siblings().css("background","#999");
		$(this).parent().parent().prev().children("li").eq(b).stop().show().siblings().stop().hide();
		Flag = true;
	})
	$(".prev").click(function (){
		if(!flag){
			c--;
			if(c < 0){
				c = $(this).parent().parent().prev().children("li").length - 1;
			}
			b = c;
		}else{
			b--;
		}
		if(b < 0){
			b = $(this).parent().parent().prev().children("li").length - 1;
		}
		$(this).parent().prev().find("span").eq(b).css("background","#c77f40").siblings().css("background","#999");
		$(this).parent().parent().prev().children("li").eq(b).stop().show().siblings().stop().hide();
		Flag = true;
	})
	//
	$(".pagebox").find("span").hover(fn7,fn8);
	function fn7(){
		$(this).css("background","#c77f40");
	}
	function fn8(){
		if(flag || Flag){
			$(this).parent().find("span").eq(b).css("background","#c77f40").siblings().css("background","#999");
			return;
		}
		$(this).parent().find("span").eq(0).css("background","#c77f40").siblings().css("background","#999");
	}
	//
	$(".propic_left").find("li").hover(fn9,fn10)
	function fn9(){
		$(this).find(".topline1").stop().animate({"width":"194px"},300);
		$(this).find(".bottomline1").stop().animate({"width":"194px"},300);
		$(this).find(".leftline1").stop().animate({"height":"65px"},300);
		$(this).find(".rightline1").stop().animate({"height":"65px"},300);
		var num = $(this).index();
		num ++;
		setTimeout(function(){
			$(".propic_right").find("a").css("background-image",'url(img/'+ num + 'bank.jpg)');
		},1000)
		
	}
	function fn10(){
		$(this).find(".topline1").stop().animate({"width":"0px"});
		$(this).find(".bottomline1").stop().animate({"width":"0px"});
		$(this).find(".leftline1").stop().animate({"height":"0px"});
		$(this).find(".rightline1").stop().animate({"height":"0px"});
	}
})
