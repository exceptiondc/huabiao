
var API = 'https://www.huabiaonet.com/';

var telpHeader = function(){
	var header = `
			<div class="headerNav">
				<div class="header_logo">
					<img src="/huabiao/pc/img/logo.png" width="130" height="40">
				</div>
				<div class="header_nav">
					<Breadcrumb>
						<Breadcrumb-item to="/">首页</Breadcrumb-item>
				        <Breadcrumb-item to="javaScript:tiaozhuan('product.html');">产品与服务</Breadcrumb-item>
				        <Breadcrumb-item style="position: relative; color: #fff; font-size: 16px;">
				        	<a>解决方案</a>
				        	<ul class="select fangan_list">
				        		
			        		</ul>
			        	</Breadcrumb-item>
				        <Breadcrumb-item to="javaScript:tiaozhuan('case.html');">成功案例</Breadcrumb-item>
				        <Breadcrumb-item style="position: relative; color: #fff; font-size: 16px;">
				        	<a>关于我们</a>
				        	<ul class="select our_list">
				        		<li><a href="synopsis.html" target=_blank>公司简介</a></li>
				        		<li><a href="contactus.html" target=_blank>联系我们</a></li>
				        		<li><a href="recruit.html" target=_blank>招聘需求</a></li>
				        		<li><a href="hua_news.html" target=_blank>华事记</a></li>
			        		</ul>
			        	</Breadcrumb-item>
				    </Breadcrumb>
			    </div>
			    <div style="width: 180px;"></div>
		    </div>
			`
	return header;
}

var telpFooter1 = function(){
	var footer = `<div class="foot">
						<div class="footer_info">
							<img class="footer_lg" src="/huabiao/pc/img/footer_lg.png" />
							<ul>
								<li><a href="javaScript:tiaozhuan('synopsis.html');">公司简介</a></li>
								<li><a href="javaScript:tiaozhuan('recruit.html')">人才招聘</a></li>
								<li><a href="javaScript:tiaozhuan('case.html')">成功案例</a></li>
								<li><a href="javaScript:tiaozhuan('hua_news.html')">华事记</a></li>
								<div class="gotop">回到顶部</div>
							</ul>
						</div>
						<div class="footer_phone">
							<div class="phone"><img src="/huabiao/pc/img/phone_icon.png" width="22"/>029-81108865</div>
							<div class="mail_qy">mkt@huabiaonet.com</div>
						</div>
						<div class="code">
							<a class="qq" href="javascript:vido(0);"><img src="/huabiao/pc/img/qq.png" title="qq" width="28" height="28"></a>
							<a class="mail" href="javascript:vido(0);"><img src="/huabiao/pc/img/message.png" title="mkt@huabiaonet.com" width="28" height="28"></a>
							<a class="code_img" href="javascript:vido(0);"><img src="/huabiao/pc/img/erweima.png" width="28" height="28"><p><img src="/huabiao/pc/img/we_code.png" width="112" height="136"/></p><div class="arrow"></div></a>
						</div>
						<div class="copyright">©陕西华表网络技术有限公司版权所有&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp陕ICP备18004618号-1</div>
					</div>`
	return footer;
}

$(function(){

	$('.header').append(telpHeader());
	$('.footer').append(telpFooter1());
	
	new Vue({
		el: ".header"
	})
	console.log('url:',window.location.pathname)

	if(window.location.pathname == '/' ){
		$('.footer_lg').show();
		$('.footer').css({'height': '430px', 'background': 'url("/huabiao/pc/img/footer_bg.png") no-repeat'});
		$('.footer_info ul li a, .gotop').css('color','#D5D5D5');
		$('.phone').css('color', '#fff');
		$('.phone img').attr('src','/huabiao/pc/img/phone_icon.png');
		$('.copyright').css('border-top-color', '#4D4843');
		$('.code a').css('background-color', '#44474a');		
	} else {
		$('.footer_lg').hide();
		$('.footer').css({'height': '360px', 'background': '#f2f2f2'});
		$('.footer_info ul li a, .gotop, .phone').css('color','#999');
		$('.phone img').attr('src','/huabiao/pc/img/footer2-iphone.png');
		$('.copyright').css('border-top-color', '#EAEAEA');
		$('.code a').css('background-color', '#999');
	}


	$(window).scroll(function (){
		var divAll = $('.main').children();
		var scrollTop = $(window).scrollTop();

		divAll.map(function(i,e){
			if(scrollTop >= $(e).offset().top - 100){
				$(e).find('.border_org').animate({
					width: "100%"
				}, 800);
			}	
		});
	});

	var schemes = function (){
		$.ajax({  
        	type:"post",  
        	url: API + "huabiao/system/announce/list/json",  
        	dataType: "json",  
       		data: { 
       			type:'schemes',
       			// pageIndex:'1',
       			// pageSize:'9',
       			order:'id',
       			sort:'asc'
       		}, 
        	success:function(result) {
        		console.log(result);
        		var data = result.data;
        		data.map( e => {
        			$('.fangan_list').append(`<li id="${ e.id }" type="${ e.title }"><a href="">${ e.title }</a></li>`);	
        		});

        		$('.fangan_list li').click(function(){
          		var solutionId = $(this).attr('id');
          		var solutionTitle = $(this).attr('type');
      		   	window.open('solution_details.html?id=' + solutionId + '&title=' + solutionTitle);

          	});

            /*lazyLoad();*/
        	},
        	error: function (XMLHttpRequest, textStatus, errorThrown) {  
    			console.log('网络连接异常，请重试！'); 
        	}
      })
   }

   schemes();
	
	

	//返回顶部
	$('.gotop').click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});

	$('.ivu-breadcrumb > span').hover(function(){
		$(this).find('ul').show();
	},function(){
		$(this).find('ul').hide();
	});

	$('.header_nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.code_img p').hide();
	$('.code_img').hover(function(){
		$(this).find('p, .arrow').show();
	},function(){
		$(this).find('p, .arrow').hide();
	});

});

function tiaozhuan(url){
	if(location.href.indexOf('pc/main')>0){
		location.href=url;
	}else{
		location.href='pc/main/'+url;
	}
}
