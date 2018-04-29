$(function (){
	//会员价
	$(".textR").hover(fn1,fn2);
	function fn1(){
		$(this).find(".texthid").css("display","block");
		$(this).css("border","#ccc solid 1px");
	}
	function fn2(){
		$(this).find(".texthid").css("display","none");
		$(this).css("border","none");
	}
	//手机购买
	$(".mainhidd").hover(fn3,fn4);
	function fn3(){
		$(this).find(".mainmiq").css("display","block");
	}
	function fn4(){
		$(this).find(".mainmiq").css("display","none");
	}
	//图片
	$(".imgdiv").hover(fn5,fn6);
	function fn5(){
		$(this).children(".shadow1").css("display","block");
	}
	function fn6(){
		$(this).children(".shadow1").css("display","none");
	}
	//楼梯
	$(".mainright").find("li").click(function (){
		$(this).css("color","#c8a985").siblings().css("color","#999");
		$(".clearfixbot").find("li").eq($(this).index()).css("display","block").siblings().css("display","none");
	})
	//吸顶
	$(document).scroll(function (){
		if($(document).scrollTop() >= 842){
			$(".main_box").css({
				"position":"fixed",
				"top":"0",
				"z-index":"999999"
			})
		} else{
			$(".main_box").css({
				"position":""
			})
		}
	})
	//图片移动
	$(".right").click(function (){
		var x = parseInt($(this).prevAll("img").css("left"));
		if(x <= -75){
			x=-75;
			return;
		}
		x -= 10;
		$(this).prevAll("img").css("left",x + "px");
	})
	$(".left").click(function (){
		var x = parseInt($(this).prevAll("img").css("left"));
		if(x == 15){
			x = 15;
			return;
		}
		x += 10;
		$(this).prevAll("img").css("left",x + "px");
	})
	
	//放大镜
	var scale = 2;
	$(".gimg_top").bind({
		mouseenter:function (){
			$(".control").css("display","block");
			$(".bigbox").css("display","block");
			//获取到小div的宽高
			 var imgWidth = $(".gimg_top").innerWidth();
			 var imgHeight = $(".gimg_top").innerHeight();
			  //设置控制control的宽高
			 $(".control").css("width",imgWidth / scale + "px");
			 $(".control").css("height",imgHeight / scale + "px");
			 //设置大图片的宽高
			 $(".bigbox").children().css("width",imgWidth * scale + "px");
			 $(".bigbox").children().css("height",imgHeight * scale + "px");
		},
		mousemove : function (ev){
			ev = ev || event;
			var X = ev.clientX - $(".gimg_top").offset().left - $(".control").innerWidth() /2;
			var Y = ev.clientY - $(".gimg_top").offset().top - $(".control").innerHeight() /2;
			if(X <= 0){
				X = 0;
			}
			if(X >= $(".gimg_top").innerWidth() - $(".control").innerWidth()){
				X = $(".gimg_top").innerWidth() - $(".control").innerWidth();
			}			
			if(Y <= 0){
				Y = 0;
			}
			if(Y >= $(".gimg_top").innerHeight() - $(".control").innerHeight()) {
				Y = $(".gimg_top").innerHeight() - $(".control").innerHeight();
			}
			$(".control").css("left",X + "px");
			$(".control").css("top",Y + "px");
			//大图片的移动 距离是control的scale倍
			$(".bigbox").children().css("left",- X * scale + "px");
			$(".bigbox").children().css("top",- Y * scale + "px");
		},
		mouseleave : function () {
			$(".control").css("display","none");
			$(".bigbox").css("display","none");
		}
	})
	//购物车添加按钮
	$(".buynum").find(".addnum").click(function (){
		var num = $(this).next().val();
		num++;
		$(this).next().val(num);
	})
	//递减按钮
	$(".buynum").find(".reducenum").click(function (){
		var num = $(this).nextAll("input").val();
		if(num <= 1){
			num = 1;
			return;
		}
		num--;
		$(this).nextAll("input").val(num);
	})
	//
	$(".menucancel").click(function (){
		$(".pop").css("display","none");
	})
	//加入购物袋
	$(".car_btn").click(function (){
		$(".pop").css("display","block");
		//存cookie		
		$.cookie("goodsname","香槟(起泡葡萄酒)750ml LP001",{expires:30,path:'/'});

		$.cookie("prices",parseInt($(".reducenum").nextAll("input").val()) * 688,{expires:30,path:'/'});

		$(".pop").find(".spannum").text($(".reducenum").nextAll("input").val());
		$(".pop").find(".spanprice").text($.cookie("prices"));
		$(".headCar").find("span").text($(".reducenum").nextAll("input").val());
		$(".totalnum").text($(".reducenum").nextAll("input").val());
		$(".totalprice").text($.cookie("prices"));
		
	})
	
})
