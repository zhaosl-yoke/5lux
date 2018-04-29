$(function (){
	$(".cargoods").find("input").click(function (){
		if($(this).prop("checked") == true){
		$(".cargood1").find("input").prop("checked","checked");
		$(".checkinfo").find("input").prop("checked","checked");
		}
		else{
			$(".cargood1").find("input").prop("checked","");
			$(".checkinfo").find("input").prop("checked","");
		}
	})
	$(".checkinfo").find("input").click(function (){
		if($(this).prop("checked") == true){
		$(".cargood1").find("input").prop("checked","checked");
		$(".cargoods").find("input").prop("checked","checked");
		}
		else{
			$(".cargood1").find("input").prop("checked","");
			$(".cargoods").find("input").prop("checked","");
		}
	})
	$(".cargood1").find("input").click(function(){
		if($(this).prop("checked") == false){
		$(".checkinfo").find("input").prop("checked","");
		$(".cargoods").find("input").prop("checked","");
		}
	})
	
	$(".cargood1 .six b").click(function(){
		
		var num = parseInt($("#button1").val());
		if(num == 1){
			$(this).next().val(1);
		}else{
			num--;
			$(this).next().val(num);
		}
		$(".eight").text(688*num);
		$(".pricearea .buy_num").text(num);
		$(".pricearea strong").text(num *688);
		$("#h2 .totalnum").text(num);
		$("#h2 .totalprice").text(688*num)
		$(".headCar").find("span").text(num);
	})
	$(".cargood1 .six i").click(function(){	
		var num = parseInt($("#button1").val());
		num++;
			$(this).prev().val(num);
			$(".eight").text(688*num);
			$(".pricearea .buy_num").text(num);
			$(".pricearea strong").text(num *688);
			$("#h2 .totalnum").text(num);
			$("#h2 .totalprice").text(688*num);
			$(".headCar").find("span").text(num);
	})
	
	$("#delect").click(function(){
		$(".cargood1").css("display","none");
		$(".price").css("display","none");
		$(".carhid").css("display","block");
	})
})
