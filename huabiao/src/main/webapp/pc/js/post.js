$(function(){
	//招聘
	var getRecruit = function(id){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/look/json",  
        	dataType: "json", 
        	data: { 'id': id }, 
        	success:function(result) {  
        		console.log(id);
         	if (result.statusCode == 200) {
         		var data = result.data;
         		console.log(data);
         		$('.post_content').append(post_content(data))
         	}
         },
         error:function (XMLHttpRequest, textStatus, errorThrown) {  
    				alert('网络连接异常，请重试！')  
        	}
      });
	}

	var getpostid = function(){
		var postUrl = location.search;
		var post_id = postUrl.split('=').pop();
		getRecruit(post_id);
		console.log('id:',post_id)
	}

	getpostid();
});

var post_content = function(data){
	var tpl = `<div class="post_title">
					<div class="post_name">
						<p>${ data.title }</p>
						<span>${ data.salary }</span>
					</div>
					<ol>
						<li>${ data.experience }</li>
						<li>${ data.education }</li>
						<li>招${ data.zjr }人</li>
					</ol>
				</div>
				<div class="post_text">
					<h4>职位描述</h4>
					<span></span>
					<p>${ data.content }</p>
						
					<h3>对职位有兴趣者，请将个人简历发送至华表网络邮箱<span>Hr@huabiaonet.com</span></h3>
				</div>`

		return tpl;
}
