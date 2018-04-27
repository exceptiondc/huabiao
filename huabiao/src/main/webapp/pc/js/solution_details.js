$(function(){
	$('.solution_nav').addClass('active');

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
          	  		$('.solution_content').append('<div class="solution_text">' + data.content + '</div>');
                	$('.solution_title').append('<h3>' +  data.title + '</h3>')
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
