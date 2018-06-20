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
						
							<img src="${ data.icon }" width="100%" height="380px">
							<div class="news_text">${ data.content }</div>`

		return contentTpl;
}

