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
         		$('.gs_details').append(introsTpl(data));
         	}
         },
         error:function (XMLHttpRequest, textStatus, errorThrown) {  
    				alert('网络连接异常，请重试！')  
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
    				alert('网络连接异常，请重试！')  
        	}
      });
	}
	getRecruit();
});

//公司简介
var introsTpl = function (data){
	var tpl = `<div class="gs_img"><img src="${ data.icon }"></div>
					<div class="gs_text">
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