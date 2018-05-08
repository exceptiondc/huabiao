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
                	$('.case_title').append('<h3>' + data.title + '</h3> <p>发布于<span>' + data.postTime + '</span>日</p>')
               }             
           },  
           error: function (XMLHttpRequest, textStatus, errorThrown) {  
             			alert('网络连接异常，请重试！')  
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
	var contentTpl = `<img src="${ data.icon }" width="820px" height="280px">
							<div class="case_text"><p>${ data.content }</p>
							</div>`

		return contentTpl;
}