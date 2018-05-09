$(function(){
	$('.aboutwe').addClass('active').siblings().removeClass('active');
	$('.list_content > div').hide();
	$('.list_content > div').eq(0).show()
	$('.list_title ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.list_content > div').eq($(this).index()).show().siblings().hide();
	});

	//公司简介
	var getIntros = function(){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json?type=intros",  
        	dataType: "json",  
        	success:function(result) {  
         	console.log('公司简介:',result);

         	if (result.statusCode == 200) {
         		var data = result.data[0];
         		$('.intros').append(introsTpl(data));
         	}
         },
         error:function (XMLHttpRequest, textStatus, errorThrown) {  
    				console.log('网络连接异常，请重试！')  
        	}
      });
	}

	getIntros();

	//招聘
	var getRecruit = function(){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json?type=zpqs",  
        	dataType: "json",  
        	success:function(result) {  
         	console.log('招聘:',result);

         	if (result.statusCode == 200) {
         		var data = result.data;
         		data.map(e => {
         			$('.recruit ul').append(recruitTpl(e));
         		});
         		$('.recruit ul li').hover(function(){
						$(this).addClass('curr').siblings().removeClass('curr');
					});

					$('.recruit ul li').click(function(){
						var solutionId = $(this).attr('id');
          			window.location.href = 'post.html?id=' + solutionId;
					});
         	}
         },
         error:function (XMLHttpRequest, textStatus, errorThrown) {  
    				console.log('网络连接异常，请重试！')  
        	}
      });
	}
	getRecruit();


	//华事记
	var totalPage = 1;//总共多少页  
	 	var totalRecords = 1;//总共多少条  
	 	var pageSize = 5;//每页显示多少页  
	 	loadList(1);  
	 	function loadList(pno){  
	    	$.ajax({  
	        	type:"post",  
	        	url: API + "huabiao/system/announce/list/json?type=news",  
	        	dataType: "json",  
	     		data: { 'pageIndex': pno,'pageSize': pageSize},  
	        	success:function(result) {  
	            	console.log(result);  
	            	console.log(pno);

	            	if (result.statusCode == 200) {  
	                	var count = result.page.totalCount;
	                	var data = result.data;  
	                	totalRecords = count;
	                	totalPage = Math.ceil(count / pageSize);  
	                	var datalist = "";  
	                	$.each(data, function(i, item) {
	                    	datalist += `<li id="${ item.id }">
											<dl>
												<dt><img class="lazy" data-original="${item.icon}" width="190px" height="170px"></dt>
												<dd>
													<h4>${item.title}</h4>
													<p>${item.content}</p>
												</dd>
												<p class="news_time"><span>${item.postTime.substr(5, 5)}</span>${item.postTime.substr(0, 4)}</p>
											</dl>
										</li>`

	                	});  
	                	$("#datalist1").html(datalist);  
	                	$('.total').text(totalPage);   
	            	 	$('.count').text(count);   
	                	$('.M-box').pagination({  
	                    	pageCount: totalPage,  
	                    	current:pno,//当前第几页
	                    	coping: true,
	                    	callback:PageClick  
	                	});

	                	$('#datalist1 li').click(function(){
	                		var newsId = $(this).attr('id');
	                		window.location.href = 'news_details.html?id=' + newsId;
	                	});

	                  lazyLoad();  
	               }             
	           },  
	           error: function (XMLHttpRequest, textStatus, errorThrown) {  
	             			console.log('网络连接异常，请重试！')  
	        	}  
	 		});  
	 	}  
	    //回调函数    
	    PageClick = function(index){
	        $('.now').text(index.getCurrent());   
	        loadList(index.getCurrent()); //点击分页加载列表数据  
	   }

	   var lazyLoad = function(){
	        $("img.lazy").lazyload({
	            effect: "fadeIn"
	        })
	    };
});

//公司简介模板
var introsTpl = function (data){
	var tpl = `<div class="gs_text">
					<h3>${ data.title }</h3>
					<p>${ data.content }</p>
				</div>`;
		return tpl;
}


//招聘
var recruitTpl = function(data){
	var tpl = `<li id="${ data.id }">
						<a href="javascript:void(0);">
							<div class="recruit_info">
								<div class="post">
									<p>${ data.title }</p>
									<span>${ data.salary }</span>
								</div>
								<ol>
									<li>${ data.experience }</li>
									<li>${ data.education }</li>
									<li>招${ data.zjr }人</li>
								</ol>
							</div>
							<div class="recruit_time">发布于${ data.postTime }日</div>
						</a>
					</li>`
		return tpl;
}



