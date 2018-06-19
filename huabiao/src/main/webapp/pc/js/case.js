$(function(){

	$('.ivu-breadcrumb > span:eq(3) a').addClass('active');
	
	var caseData = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json",  
        	dataType: "json",  
     		data: { 
     			type:'cases',
     			pageIndex:'1',
     			pageSize:'4',
     			order:'id',
     			sort:'asc'
     		}, 
        	success:function(result) {
        		console.log(result);
        		var data = result.data;
        		data.map( e => {
        			$('.case_list ul').append(caseList(e));
        		});
        		$('.more span').hide();
				$('.case_list ul li').hover(function(){
					$(this).css('box-shadow', '8px 0px 20px rgba(0,0,0,0.08)');
					$(this).find('.more span').show();
				},function(){
					$(this).css('box-shadow', 'none');
					$(this).find('.more span').hide();
				});

				$('.case_list ul li').click(function(){
          		var solutionId = $(this).attr('id');
          		window.location.href = 'case_details.html?id=' + solutionId;
          	});

          	lazyLoad();
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
    			console.log('网络连接异常，请重试！'); 
        	}
   	})
	}

	caseData();

	var lazyLoad = function(){
        $("img.lazy").lazyload({
            effect: "fadeIn",
            threshold: 200,
        })
    };

});

var caseList = function (data){
	var caseTpl = `<li id="${ data.id }">
					<dl>
						<dt><img class="lazy" data-original="${ data.icon }" width="580px" height="190px"></dt>
						<dd>
							<h4>${ data.title }</h4>
							<p>${ data.descr }</p>
							<div class="more">
								<p><a href="#">查看详情></a></p>
								<span>${ data.postTime.substr(0, 10)}</span>
							</div>
						</dd>
					</dl>
				</li>`

	return caseTpl;
}