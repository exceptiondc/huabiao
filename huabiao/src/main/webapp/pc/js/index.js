$(function(){


	$('.ivu-breadcrumb > span:eq(0) a').addClass('on');


	//我们的产品	
	$('.product_list ul > div > li').hover(function(){
		$(this).parent().css('position', 'relative');
		$(this).addClass('curr');
		$(this).find('span').show();
		$(this).find(' b').hide();
	},function(){
		$(this).removeClass('curr');
		$(this).find('span').hide();
		$(this).find(' b').show();
	});	

	//精选案例
	var caseData = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json",  
        	dataType: "json",  
     		data: { 
     			type: 'cases',
     			order: 'id',
     			jx: 'jx'
     			// sort: 'asc',
     			// pageIndex: '1',
     			// pageSize: '3',
     		}, 
        	success:function(result) {
        		var data = result.data;
        		data.map( e => {
        			$('.case_con').append(caseLists(e));
        		});

    //     		var mySwiper1 = new Swiper('#swiper-container1',{
				//  	slidesPerView : 3,
				// 	spaceBetween : 20,
				// 	loop: true,
				// 	navigation: {
			 //    	nextEl: '.swiper-button-next',
			 //    	prevEl: '.swiper-button-prev',
				//   },
				// });

				$('.case_list p').hide();
        		$('.case_list').hover(function(){
					$(this).find('p, .mask, .anli_icon').show();
				},function(){
					$(this).find('p, .mask, .anli_icon').hide();
				});

				$('.case_list').click(function(){
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
					// pagination: {
				 //    	el: '.swiper-pagination',
				 //    	type: 'custom',
				 //    	clickable: true,
			  //   	 	renderCustom: function (swiper, current, total) {
			  //           var _html = '';
			  //           for (var i = 1; i <= total; i++) {
			  //             if (current == i) {
			  //               _html += '<li class="swiper-pagination-custom active" key=' + i + '><span></span</li>';
			  //             }else{
			  //               _html += '<li class="swiper-pagination-custom" key=' + i + '><span></span</li>';
			  //             }
			  //           }
			  //           return _html;//返回所有的页码html
		   //      		}
				 //  },
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
	var caseTpl = `<div class="retrieval case_list" id="${ data.id }" style="background: url(${ data.icon }) no-repeat">
						<div class="iconImg"><img src="${ data.pic }" width="92px" heigh="92px"></div>
						<h3>${ data.title }</h3>
						<p>${ data.descr }</p>
						<div class="anli_icon"><img src="/huabiao/pc/img/anli_icon.png" width="22" height="22" /></div>
						<div class="mask"></div>
					</div>`

	return caseTpl;
}