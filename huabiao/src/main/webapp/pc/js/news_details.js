$(function(){
	$('.huaNews').addClass('active');

	//新闻详情
	var getRequest = function (id){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/look/json",  
        	dataType: "json",  
     		data: { 'id': id },  
        	success:function(result) {  
         		console.log(result);  
            	console.log(id);  
            	if (result.statusCode == 200) {
            		var data = result.data;  
          	  		$('.news_content').append(news_content(data));
                	
               }             
           },  
           error: function (XMLHttpRequest, textStatus, errorThrown) {  
             			console.log('网络连接异常，请重试！')  
        	}  
 		});
	}

	//右侧新闻列表
	var getNewslist = function(){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json?type=news&pageIndex=1&pageSize=3",  
        	dataType: "json",   
        	success:function(result) {  
            	console.log('列表:',result);
            	if (result.statusCode == 200) {  
                	var data = result.data;
                	data.map(e => {
                		$('.news_list ul').append(news_item(e));
                	})

                	$('.news_list ul li').click(function(){
                		var newsId = $(this).attr('id');
                		window.location.href = 'news_details.html?id=' + newsId;
                	});  
               }             
           },  
           error: function (XMLHttpRequest, textStatus, errorThrown) {  
             			console.log('网络连接异常，请重试！')  
        	}  
 		}); 
	}

	getNewslist();

	var getDetails = function(){
		var newsUrl = location.search;
		var news_id = newsUrl.split('=').pop();
		getRequest(news_id);
	}

	getDetails();
});

//新闻详情
var news_content = function(data){
	var postTime = data.postTime.substr(0, 10);
	var contentTpl = `<div class="news_title">
								<h3>${ data.title }</h3>
								<p>发布于<span>${ postTime }</span>日</p>
							</div>
						
							<img src="${ data.icon }" width="780px" height="380px">
							<div class="news_text">${ data.content }</div>`

		return contentTpl;
}

//推荐阅读(新闻列表)
var news_item = function(data){
	var newsTpl = `<li id="${ data.id }">
							<img src="${ data.icon }" width="310px" height="170px">
							<p>${ data.descr }</p>
						</li>`

	return newsTpl;
}
