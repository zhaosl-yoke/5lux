$(function (){
	$(".checkindex").find("span").mouseenter(fn1);
	function fn1(){
		var flag = $(this).attr("rel");
		for(var i = 0; i < $(".checkhid").find("span").length; i++){
			if(flag == "ALL"){
				$(".checkhid").find("span").eq(i).css("display","block");
			}else if($(".checkhid").find("span").eq(i).attr("rel") == flag){
				$(".checkhid").find("span").eq(i).css("display","block");
				
			}else{
				$(".checkhid").find("span").eq(i).css("display","none");
			}
		}
	}
	//存放所有的商品
	var productData = [];
	//每页的显示的行数
	var pageRows = 20;
	
	var $proList = $('.block ul');
	$.get("json/product.json",function(res){
		productData = res;
		//计算总页数
		var pageCount = Math.ceil(productData.length / pageRows);
		addData(1);  //显示第一页的数据   ：10条
	
		$('.pages').createPage({
			pageCount:pageCount,
			current:1,
			backFn:function(page){
				addData(page);
			}
		})
	})
//	
	function addData(page){
		var iNum = (page - 1) * pageRows;
		var str = '';
		for(var i = 0;i < pageRows;i++){
			if(!productData[iNum + i]){
				break;
			}
				str +='<li><div class="bages">'+
				'<a href="fangda.html"><img src="'+productData[iNum + i].imgSrc+'" alt="" /></a>'+
				'<p><a href="fangda.html">'+productData[iNum + i].info1+'</a></p>'+
				'<p><a href="fangda.html">'+productData[iNum + i].info2+'</a></p>'+
				'<p class="last"><a href="fangda.html">'+productData[iNum + i ].price1+'</a><span>'+productData[iNum + i ].price2+'</span></a></p>'+
				'</div></li>';
					
		}
		$proList.html(str);
	}
	
	$(".block").find("ul").on('mouseenter','li',function(){
		$(this).css("background","#ccc");
	})
	$(".block").find("ul").on('mouseleave','li',function(){
		$(this).css("background","#fff");
	})
	
	
	
	
	
	
	
})
