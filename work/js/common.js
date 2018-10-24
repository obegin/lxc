

//合作伙伴
var _index1=0;
$("#four_flash1 .but_right1").click(function(){
	_index1++;
	var len=$(".flashBg1 ul.mobile1 li").length;
	if(_index1+5>len){
		$("#four_flash1 .flashBg1 ul.mobile1").stop().append($("ul.mobile1").html());
	}
	$("#four_flash1 .flashBg1 ul.mobile1").stop().animate({left:-_index1*205},1000);
	});
$("#four_flash1 .but_left1").click(function(){
	if(_index1==0){
		$("ul.mobile1").prepend($("ul.mobile1").html());
		$("ul.mobile1").css("left","-1200px");
		_index1=6
	}
	_index1--;
	$("#four_flash1 .flashBg1 ul.mobile1").stop().animate({left:-_index1*205},1000);
});





//导航下拉菜单
$(function(){
$('.header_nav  li').hover(function(){
	$(this).find('.children').animate({ opacity:'show', height:'show' },0);
	$(this).find('.tnav').addClass('navhover');
}, function() {
	$('.children').stop(true,true).hide();
	$('.tnav').removeClass('navhover');
});	
})



//招聘
$(document).ready(function(){
	$(".zk").hide();
        var u_num = getQueryString('u_sea');
        if(u_num == 0 || u_num == null || u_num < 0 || u_num > 25){
           u_num = 1; 
        }
    //$("#zk_"+u_num).slideToggle();
    //$("#"+u_num).addClass('xz');
	$(".clik").click(function(){
		var u_class = $(this).attr('class');
		if(u_class == 'clik'){
			$(this).addClass('xz');
		}else{
			$(this).removeClass('xz');
		}
		var zk_id = '#zk_'+$(this).attr('id');
		$(zk_id).slideToggle(200);
		return false;
	});
});

function getQueryString(paras){
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
    }  
    var returnValue = paraObj[paras.toLowerCase()];  
    if(typeof(returnValue)=="undefined"){
        return "";  
    }else{
        return returnValue; 
    }
}



//时间切换
$(function(){
	if($('#timeline').size()>0){ 
	$("#timeline").timelinr()
	}
	});



//banner切换
    if($('#demo01').size()>0){ 
	$('#demo01').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing",
		directionNav: false,
	});
	}
	
	if($('#demo02').size()>0){ 
	$('#demo02').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing",
		controlNav: false,
		slideshow: false,
		directionNav: false,
		
	});
	}
	if($('#demo03').size()>0){ 
	$('#demo03').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing",
		controlNav: false,
		directionNav: true,
	});
	}
	if($('#demo04').size()>0){ 
	$('#demo04').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing",
		controlNav: false,
		directionNav: true,
	});
	}







//TAB选项切换
if($('.tab_main').size()>0){ 
$(".tab_main").FengTab({titCell:".tab",mainCell:".con",defaultIndex:0,trigger:"click",titOnClassName:"on",showtime:200});
$(".tab_main1").FengTab({titCell:".tab1",mainCell:".con1",defaultIndex:0,trigger:"click",titOnClassName:"on",showtime:200});
}


