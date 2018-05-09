$(function(){

	$('.header_nav ul li').eq(0).addClass('active');

	//我们的产品
	var currUrl = "";
	$('.product_list ul > div > li').hover(function(){
		currUrl = $(this).find('img').attr('src');
		var changeImg = $(this).find('img').attr('changeImg');
		$(this).find('img').attr('src',changeImg);
		$(this).stop().animate({
			marginTop: '-20px',
			height: 'auto'	
		}, 600).css({
			'width': '333px',
			'border': '1px solid #FF9C00',
			'border-top': '3px solid #FF9C00',
			'position': 'absolute',
			'z-index': 99,
		});
		$(this).parent().css('position', 'relative');
		$(this).find('ol li').css('text-align', 'left');
		$(this).find('ol li p').css({'margin-top': '30px', 'color': '#333'});
		$(this).find('ol li p:eq(0)').css('margin-top', '0');
		$(this).find('ol li p b').hide();
		$(this).find('ol li span').show().css('margin-top', '22px');
	},function(){
		$(this).find('img').attr('src', currUrl);
		$(this).stop().animate({
			marginTop: '0',		
		}, 600).css({
			'width': '253px',
			'height': '346px',
			'border': '1px solid #f3f3f3',
			'border-top': '3px solid #f3f3f3',
			'margin-top': '0',
			'position': 'static'
		});
		$(this).find('ol li').css('text-align', 'center');
		$(this).find('ol li p').css({'margin-top': '0', 'line-height': '30px', 'color': '#999'});
		$(this).find('ol li p b').show();
		$(this).find('ol li span').hide().css('margin-top', '0');
	});


	//解决方案
	var imgUrl = "";
	$('.programme_item ul li').hover(function(){
		$(this).css({
			'background': 'url(/pc/img/org_bg.png) no-repeat',
			'box-shadow': '10px 0px 24px rgba(255,168,0,0.4)',
		 	'transition': 'all .3s ease-in-out'		
		});
		imgUrl = $(this).find('img').attr('src');
		var changeImg = $(this).find('img').attr('changeImg');
		$(this).find('img').attr('src',changeImg);
		$(this).find('span').css('display', 'block');
		$(this).find('p').css('color', '#fff');
		$(this).siblings().find('p').css('color', '#333'); 
	},function(){
		$(this).find('img').attr('src', imgUrl);
		$(this).css({
			'background': '#fff',
			'box-shadow': 'none'
		});
		$(this).find('p').css('color', '#333');
		$(this).find('span').css('display', 'none');
	});


	//精选案例
	var caseData = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json",  
        	dataType: "json",  
     		data: { 
     			type: 'cases',
     			pageIndex: '1',
     			pageSize: '3',
     			order: 'id',
     			sort: 'asc',
     			jx: 'jx'
     		}, 
        	success:function(result) {
        		console.log("精选案例:", result);
        		var data = result.data;
        		data.map( e => {
        			$('#swiper-container1 .swiper-wrapper').append(caseLists(e));
        		});

        		var mySwiper1 = new Swiper('#swiper-container1',{
				 	slidesPerView : 3,
					spaceBetween : 20,
					loop: true,
					navigation: {
			    	nextEl: '.swiper-button-next',
			    	prevEl: '.swiper-button-prev',
				  },
				});

        		$('.case_list').hover(function(){
					$(this).css({'height': '180px','box-shadow':'10px 0px 24px rgba(0,0,0,0.06)', 'transition': 'all .3s ease-in-out' });
					$(this).parent().css({'transform': 'scale(1.04)','transition': 'all .3s ease-out 0s',})
					$(this).find('.iconImg').css('background', '#FF9C00');
					$(this).find('.time').show().css( 'margin-bottom', '26px');
				},function(){
					$(this).parent().css('transform', 'none');
					$(this).find('.time').hide();
					$(this).css({ 'height': '160px', 'box-shadow': 'none'});
					$(this).find('.iconImg').css('background', '#999');
				});

				$('#swiper-container1 .swiper-wrapper .case_list').click(function(){
          		var solutionId = $(this).attr('id');
          		location.href='case_details.html?id=' + solutionId;
          		if(location.href.indexOf('pc/main') > 0){
							location.href='case_details.html?id=' + solutionId;
						}else{
							location.href='pc/main/'+'case_details.html?id=' + solutionId;
						}
          	});
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
    			console.log('网络连接异常，请重试！'); 
        	}
   	})
	}

	caseData();


	//轮播图
	var bannerImg = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/lunbopic/list/json?skipType=1&order=id&sort=asc",  
        	dataType: "json",  
        	success:function(result) {
        		console.log("轮播:", result);
        		var data = result.data;
        		data.map( e => {
        			$('#swiper-container .swiper-wrapper').append(banner(e));
        			/*$('#swiper-container .swiper-wrapper > div:first-child').append('<div class="consultation"><a href="#">前往咨询</a></div>');*/
        		});

        		var mySwiper = new Swiper('#swiper-container',{
					speed: 300,
					loop : true,
				 	autoplay: {
				    	delay: 5000,//5秒切换一次
				  	},
				 	effect: 'fade',
					pagination: {
				    	el: '.swiper-pagination',
				    	type: 'custom',
				    	clickable: true,
			    	 	renderCustom: function (swiper, current, total) {
			            var _html = '';
			            for (var i = 1; i <= total; i++) {
			              if (current == i) {
			                _html += '<li class="swiper-pagination-custom active" key=' + i + '><span></span</li>';
			              }else{
			                _html += '<li class="swiper-pagination-custom" key=' + i + '><span></span</li>';
			              }
			            }
			            return _html;//返回所有的页码html
		        		}
				  },
				});
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
    			console.log('网络连接异常，请重试！')  
        	}
      })    	
	}

	bannerImg();

	//新闻版块
	var caseList = function (){
			$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json?type=news&pageIndex=1",  
        	dataType: "json",
        	success:function(result) {
        		console.log("首页新闻", result);
        		var data = result.data;
        		data.map( e => {
        			$('#swiper-container2 .swiper-wrapper').append(case_list(e));
        		});
        		var mySwiper1 = new Swiper('#swiper-container2',{
				 	slidesPerView : 2,
					navigation: {
				    	nextEl: '.swiper-button-next',
				    	prevEl: '.swiper-button-prev',
				  	},
				});

				$('.news_list').hover(function(){
					$(this).css({
						'background': '#fff',
						'box-shadow': '10px 0px 24px rgba(0,0,0,0.06)'
					});
				},function(){
					$(this).css({
						'background': '#f3f3f3', 
						'box-shadow': 'none'
					})
				});

				$('#swiper-container2 .swiper-wrapper .swiper-slide').click(function(){
             		var newsId = $(this).attr('id');

             		if(location.href.indexOf('pc/main') > 0){
							location.href='news_details.html?id=' + newsId;
						}else{
							location.href='pc/main/'+'news_details.html?id=' + newsId;
						}
             	});
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
         			console.log('网络连接异常，请重试！')  
        	}
      });
	}

	caseList();

});

var banner = function (data){
	var bannerTpl = `<div class="swiper-slide"><img src="${data.image}" width="100%" style="display: block;"></div>`;
	return bannerTpl;
}

//新闻模板
var case_list = function (data){
	var caseTpl = `<div class="swiper-slide" id="${ data.id }">
							<div class="news_list">
								<dl>
								
									<dt><img src="${ data.icon }" width="190px" height="170px"></dt>
									<dd>
										<h4>${ data.title }</h4>
										<p>${ data.descr }</p>
									</dd>
									<span class="news_time">${ data.postTime }</span>
								</dl>
							</div>
						</div>`;
	return caseTpl;
}

//精选案例
var caseLists = function (data){
	var caseTpl = `<div class="swiper-slide">
							<div class="retrieval case_list" id="${ data.id }">
								<span class="iconImg"><img src="${ data.pic }" width="122px" heigh="112px"></span>
								<h3>${ data.title }</h3>
								<p>${ data.descr }</p>
								<span class="time">${ data.postTime.substr(0, 10)}</span>
							</div>
						</div>`

	return caseTpl;
}