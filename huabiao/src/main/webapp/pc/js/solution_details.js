$(function(){
	$('.ivu-breadcrumb > span:eq(2) span > a').addClass('on');

	var title = window.location.search.split('=').pop();
	$("title").html(decodeURI(title));

	var getRequest = function (id){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/look/json",  
        	dataType: "json",  
     		data: { 'id': id },  
        	success:function(result) { 
            	if (result.statusCode == 200) {
            		var data = result.data;  
          	  		$('.solution_content').append(solution_content(data));
               }             
           },  
           error: function (XMLHttpRequest, textStatus, errorThrown) {  
             			console.log('网络连接异常，请重试！')  
        	}  
 		});
	}

	var getDetails = function(){
		var news_id = location.search.split('=')[1].split('&')[0];
		getRequest(news_id);
	}

	getDetails();

	// $('.back_btn').mousedown(function(){
	// 	$(this).css({'background': '#FFA800', 'color': '#fff', 'border-color': '#FFA800'})
	// }).mouseup(function(){
	// 	$('this').css({'background': '#fff', 'color': '#333', 'border-color': '#999'})
	// });;

	// $('.back_btn').click(function(){
	// 	history.go(-1);
	// });
});

var solution_content = function(data){
	var postTime = data.postTime.substr(0, 10);
	var contentTpl = `<div class="solution_title" style="margin-bottom: 40px;">
						<h3>${ data.title }</h3>
						<p>发布于<span>${ postTime }</span>日</p>
					</div>
					<div class="case_text">${ data.content }</div>
					`

		return contentTpl;
}
