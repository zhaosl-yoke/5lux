$(function () {
	$(".top").find("a").click(function () {
		$(".addbox").css("display","block");
	})
	$(".addbox").children("a").click(function() {
		$(".addbox").css("display","none");
	})
//head部位的hover出现下拉菜单事件
	$(".headRight li").has("div").hover(select1,select2);
	function select1(){
		$(this).children("div").css("display","block");
		$(this).children("a").css("border","none")
		$(this).css({
			"background-color":"#fff",
			"border-left":"solid 1px #ccc",
			"border-right":"solid 1px #ccc"
		});
	}
	function select2(){
		$(this).children("div").css("display","none");
		$(this).children("a").css("border-right","solid 1px #ccc")
		$(this).css({
			"background-color":"#f2f2f2",
			"border":"none"
			
		});
	}
	////head部位的hover出现背景图改变事件
	$(".my_five").hover(function (){
		$(this).css("background-position-y","-464px");
	},function (){
		$(this).css("background-position-y","-436px");
	})
	$(".mobile").hover(function (){
		$(this).css("background-position-y","-404px");
	},function (){
		$(this).css("background-position-y","-369px");
	})
	
	//购物车图标的hover事件
	$(".headCar").hover(appear1,appear2)
	function appear1(){
		$(this).nextAll().css("display","block");
	}
	function appear2(){
		$(this).nextAll().css("display","none");
	}
	//导航右边手风琴效果
	$(".navR li").hover(fly1,fly2)
	function fly1(){
		$(this).stop().animate({"width":"145px"},200);
	}
	function fly2(){
		$(this).stop().animate({"width":"30px"},200);
	}
	//到店按钮hover事件换背景图事件
	$(".last").hover(function (){
		$(this).find("i").css({
			"background-position-y":"-252px",
			"background-position-x":"-366px"
			})
	},function (){
		$(this).find("i").css({
			"background-position-y":"-169px",
			"background-position-x":"-58px"
			})
	})
	//导航三级菜单事件
	$(".nav").find(".first").hover(select3,select4);
	function select3(){
		$(this).children(".leftmenu").stop().show()
		$("body").append("<div class='shadow'></div>");
	}
	function select4(){
		$(this).children(".leftmenu").stop().hide()
		$(".shadow").remove();
	}
	
	$(".leftmenu").find("li").hover(select5,select6);
	function select5(){
		$(this).find("span").css("color","#c69c6d");
		$(this).children(".navshow").stop().show();
		$(this).find("i").css("display","block");
	}
	function select6(){
		$(this).find("span").css("color","#878787");
		$(this).children(".navshow").stop().hide();
		$(this).find("i").css("display","none");
	}
	
	
	
	$(".foot_box").find("a").click(function () {
		$(".foot_box").css("display","none")
	})
	$(".right_menu").find("a").hover(fn1,fn2);
	
	function fn1(){
		$(this).children().eq(0).css("background-position-y","-121px");
		$(this).children().eq(1).css("display","block");
	}
	function fn2() {
		$(this).children().eq(0).css("background-position-y","-158px");
		$(this).children().eq(1).css("display","none");
	}
	$(".logo_line").parent().hover(function(){
		$(this).children().eq(0).css("background-position-y","-20px");
	},function () {
		$(this).children().eq(0).css("background-position-y","9px");
	})
	
	$(".logo_top").click(function () {
		$(document).scrollTop(0);
	})
})

