$(function(){
	$('.ivu-breadcrumb > span:eq(2) a').addClass('active');

	var solutionData = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json",  
        	dataType: "json",  
       		data: { 
       			type:'schemes',
       			pageIndex:'1',
       			pageSize:'9',
       			order:'id',
       			sort:'asc'
       		}, 
        	success:function(result) {
        		console.log(result);
        		var data = result.data;
        		data.map( e => {
        			$('.solution_list ul').append(solutionList(e));
        			$('.mode').hide();
        			$('.solution_list ul li').hover(function(){
    						$(this).find('.mode').stop().slideDown();
    						$(this).find('.list_name').hide();
    					},function(){
    						$(this).find('.mode').stop().slideUp();
    						$(this).find('.list_name').show();
    					});
        		});
        		$('.solution_list ul li').click(function(){
          		var solutionId = $(this).attr('id');
          		window.location.href = 'solution_details.html?id=' + solutionId;
          	});

            /*lazyLoad();*/
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
    			console.log('网络连接异常，请重试！'); 
        	}
      })
   }

   solutionData();

   /*var lazyLoad = function(){
        $("img.lazy").lazyload({
            effect: "fadeIn",
            threshold: 1000,
        })
    };*/

});

var solutionList = function (data){
	var listTpl = `<li id="${ data.id }">
      							<a href="javascript:void(0);">  
      								<img class="lazy" src="${data.icon}" width="360px" height="390px">
      								<span class="list_name">${data.title}</span>
      								<div class="mode">
      									<img src="../img/fangan_eyes.png" width="32px" height="22px">
      									<p>${data.title}</p>
      								</div>
      							</a>
      						</li>`
	return listTpl;
}
