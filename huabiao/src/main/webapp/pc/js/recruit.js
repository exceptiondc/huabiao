$(function(){
	$('.ivu-breadcrumb > span:eq(4) span > a').addClass('on');

	//招聘
	var getRecruit = function(){
		$.ajax({  
        	type:"post",  
        	// url: API + "huabiao/system/announce/look/json",  
        	url: API + "huabiao/system/announce/list/json?type=zpqs",
        	dataType: "json", 
        	// data: { 'id': id }, 
        	success:function(result) {  
         	if (result.statusCode == 200) {
         		var data = result.data;
         		console.log("招聘：",data);
         		data.map(e => {
         			$('.post_content ul').append(post_content(e))
         		})
         	}
         },
         error:function (XMLHttpRequest, textStatus, errorThrown) {  
    				console.log('网络连接异常，请重试！')  
        	}
      });
	}

	// var getpostid = function(){
	// 	var postUrl = location.search;
	// 	var post_id = postUrl.split('=').pop();
	// 	getRecruit(post_id);
	// 	console.log('id:',post_id)
	// }

	// getpostid();
	getRecruit();
});

var post_content = function(data){
	var tpl = `<li>
					<div class="post_title">
						<div class="post_name">
							<p>${ data.title }</p>
							<span>${ data.salary }</span>
						</div>
					</div>
					<div class="post_text">
						<h4>职位描述</h4>
						<span></span>
						<p>${ data.descr }</p>
					</div>
					<div class="post_text">
						<h4>任职要求</h4>
						<span></span>
						<p>${ data.content }</p>
					</div>
				</li>`
		return tpl;
}
