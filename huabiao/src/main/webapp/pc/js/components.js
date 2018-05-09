
var API = 'https://www.huabiaonet.com/';

var telpHeader = function(){
	var header = `
			<div class="header_logo">
				<img src="/pc/img/tittle1.png" width="280px">
			</div>
			<div class="header_nav">
				<ul>
					<li><a href="/">首页</a></li>
					<li class="product"><a href="javaScript:tiaozhuan('product.html');">产品与服务</a></li>
					<li class="solution_nav"><a href="javaScript:tiaozhuan('solution.html');">解决方案</a></li>
					<li class="case_nav"><a href="javaScript:tiaozhuan('case.html');">成功案例</a></li>
					<li class="aboutwe"><a href="javaScript:tiaozhuan('aboutwe.html');">关于我们</a></li>
				</ul>
			</div>`
	return header;
}

var telpFooter = function(){
	var footer = `<div class="foot">
						<div class="footer_info">
							<h4>陕西华表网络技术有限公司</h4>
							<p>地址：西安市高新技术产业开发区锦业一路56号研祥城市广场B座307室</p>
							<span>&copy;&nbsp;陕西华表网络技术有限公司版权所有 盗版必究</span>
						</div>
						<div class="footer_phone">
							<div class="phone">
								<p>029-<span>81108865</span></p>
							</div>
							<div class="code">
								<a class="code_img" href="#"><img src="/pc/img/we_code.png" width="62px" height="62px"></a>
								<a class="qq" href="#"><img src="/pc/img/qq.png"></a>
								<a class="mail" href="#"><img src="/pc/img/mail.png"></a>
							</div>
						</div>
					</div>`
	return footer;
}

$(function(){

	$('.header').append(telpHeader());
	$('.footer').append(telpFooter());

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

	$('.header_nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

});

function tiaozhuan(url){
	if(location.href.indexOf('pc/main')>0){
		location.href=url;
	}else{
		location.href='pc/main/'+url;
	}
}