$(function () {
	var isphone;
	var isnum;
	//获取cookie值
	$(".phoneNum").change(function () {
		if($.cookie($(".phoneNum").val())){
			var str2 = $.cookie($(".phoneNum").val());
			var json2 =JSON.parse(str2);
			$(".phoneNum").blur(function () {
				if(json2.useNum == $(".phoneNum").val()){
					isphone = true;
				}
			})
		}
	})
	//判断密码是否正确
	$(".paswNum").blur(function () {
		var str2 = $.cookie($(".phoneNum").val());
		var json2 =JSON.parse(str2);
		if(json2.pswdNum != $(".paswNum").val()){
			isnum = true;
		}else{
			$(".login_right").find("span").eq(1).css({
				"visibility":"hidden"
			});
			isnum = false;
		}
	})
	//登录按钮的单击事件
	$(".subbtn").click(function () {
		var unameVal = $(".uname").find("input").val();
		var upaswVal = $(".upasw").find("input").val();
		//判断用户名是否为空
		if(unameVal == ""){
			$(".login_right").find("span").eq(0).css({
				"visibility":"visible",
				"display":"block"
			});
			$(".login_right").find("span").eq(0).text("用户名不能为空！");
		}else{
			$(".login_right").find("span").eq(0).css({
				"visibility":"hidden"
			});
		}
		//判断密码是否为空
		if(upaswVal == ""){
			$(".login_right").find("span").eq(1).css({
				"visibility":"visible",
				"display":"block"
			});
			$(".login_right").find("span").eq(1).text("密码不能为空！");
		}else{
			$(".login_right").find("span").eq(1).css({
				"visibility":"hidden"
			});
		}
		//判断密码是否正确
		if(isnum){
			$(".login_right").find("span").eq(1).css({
				"visibility":"visible",
				"display":"block"
			});
			$(".login_right").find("span").eq(1).text("密码或用户名错误！");
		}
		//背景图随机切换
		var num = Math.ceil(Math.random() * 2); 
		$(".login_box").css("background-image","url(img/" + num + ".jpg)");
		$(".login_left").css("background-image","url(img/" + num + ".png)");
//		if($(".remPass").find("input")[0].checked == true){
//			//存入cookie
//			
//				var json1 = {
//					unameVal : $(".uname").find("input").val(),
//					upaswVal : $(".upasw").find("input").val()
//				};
//				var str1 = JSON.stringify(json1);
//				$.cookie($(".uname").find("input").val(),str1,{expires:7});
//			
//		}
	})
})
