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

				$('.case_list p').hide();
        		$('.case_list').hover(function(){
					$(this).css('padding-top', '116px')
					$(this).find('p, .mask, .anli_icon').show();
				},function(){
        			$(this).css('padding-top', '155px')
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

	//解决方案
	var project = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json",  
        	dataType: "json",  
     		data: { 
     			type: 'schemes',
     			order: 'id',
     			// sort: 'asc',
     			// pageIndex: '1',
     			// pageSize: '3',
     		}, 
        	success:function(result) {
        		var data = result.data;
        		console.log('方案：',data)
        		data.map( e => {
        			$('.programme_item ul').append(projectList(e));
        		});

        		$('.programme_item ul li').click(function(){
	          		var solutionId = $(this).attr('id');
	          		var solutionType = $(this).attr('type');
	          		location.href='solution_details.html?id=' + solutionId + '&type=' + solutionType;
	          		if(location.href.indexOf('pc/main') > 0){
						location.href='solution_details.html?id=' + solutionId + '&type=' + solutionType;
					}else{
						location.href='pc/main/'+'solution_details.html?id=' + solutionId + '&type=' + solutionType;
					}
       		});
			
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
    			console.log('网络连接异常，请重试！'); 
        	}
   	})
	}

	project();
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


//解决方案
var projectList = function (data){
	var projectTpl = `<li id="${ data.id }" type="${ data.title }">
								<a href="javascript:void(0);">
									<div class="item_img">
										<img src="${ data.picc }" width="280" height="270">
									</div>
									<div class="item_text">
										<h4>${ data.title }<img src="/huabiao/pc/img/fangan-more.png"></h4>
										<span>${ data.keyword }</span>
										<p>${ data.descr }</p>
									</div>
								</a>
							</li>`

	return projectTpl;
}