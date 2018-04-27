$(function(){

	$('.header_nav ul li').eq(0).addClass('active');

	//产品与方案
	var imgUrl = "";
	$('.programme_item ul li').hover(function(){
		$(this).css({
			'background': 'url(../img/org_bg.png) no-repeat',
			'box-shadow': '10px 0px 24px rgba(255,168,0,0.4)'
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
			'background': '#f3f3f3',
			'box-shadow': 'none'
		});
		$(this).find('p').css('color', '#333');
		$(this).find('span').css('display', 'none');
	});

	//精选案例
	var currUrl = "";
	$('.case_list').hover(function(){
		currUrl = $(this).find('img').attr('src');
		var changeImg = $(this).find('img').attr('changeImg');
		$(this).find('img').attr('src',changeImg).css({'width': '120px', 'heihgt': '110px'});
		$(this).parent().css({
			'height': 'auto',
			'transform': 'scale(1.04)',
	    	'transition': 'all .3s ease-out 0s'
		});
		$(this).find('span').css({'display': 'block', 'margin-bottom': '26px'});
		$(this).css({'height': '310px', 'box-shadow':'10px 0px 24px rgba(0,0,0,0.06)'})
	},function(){
		$(this).find('img').attr('src', currUrl);
		$(this).parent().css({
			'transform': 'none'
		});
		$(this).find('span').css('display', 'none');
		$(this).css({'height': 'auto', 'box-shadow':'none'})
	});

	

	//轮播图
	var bannerImg = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/lunbopic/list/json?skipType=1&order=id&sort=asc",  
        	dataType: "json",  
     		/*data: { 'pageNum': pno,'pageSize': pageSize},*/  
        	success:function(result) {
        		console.log(result);
        		var data = result.data;
        		data.map( e => {
        			$('#swiper-container .swiper-wrapper').append(banner(e));
        			$('#swiper-container .swiper-wrapper > div:first-child').append('<div class="consultation"><a href="#">前往咨询</a></div>');
        		});

        		var mySwiper = new Swiper('#swiper-container',{
					speed:1000,
					loop : true,
				 	autoplay:true,
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
    			alert('网络连接异常，请重试！')  
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
             		window.location.href = 'news_details.html?id=' + newsId;
             	});
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
             			alert('网络连接异常，请重试！')  
        	}
      });
	}

	caseList();

});

var banner = function (data){
	var bannerTpl = `<div class="swiper-slide"><img src="${data.image}" width="100%"></div>`;
	return bannerTpl;
}

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