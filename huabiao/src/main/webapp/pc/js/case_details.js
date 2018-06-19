$(function(){
	$('.case_nav').addClass('active');

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
          	  		$('.case_content').append(case_content(data));
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

	$('.back_btn').mousedown(function(){
		$(this).css({'background': '#FFA800', 'color': '#fff', 'border-color': '#FFA800'})
	}).mouseup(function(){
		$('this').css({'background': '#fff', 'color': '#333', 'border-color': '#999'})
	});;

	$('.back_btn').click(function(){
		history.go(-1);
	});
});

//方案详情
var case_content = function(data){
	var postTime = data.postTime.substr(0, 10);
	var contentTpl = `<div class="case_title" style="margin-bottom: 40px;">
						<h3>${ data.title }</h3>
						<p>发布于<span>${ postTime }</span>日</p>
					</div>
				
					<img src="${ data.icon }" width="100%" height="380px">
					<div class="case_text">${ data.content }</div>
					`

		return contentTpl;
}