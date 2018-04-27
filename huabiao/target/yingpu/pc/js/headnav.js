//		<div class="logo left" >
//				<a href="index.html"><img src="img/jax-logo.png"/></a>
//			</div>
//			<div class="list right">
//				 <ul class="clearfix">
//				 	<li><a href="#" class="active">首页</a></li>
//				 	<li><a href="#">案例欣赏</a></li>
//				 	<li><a href="#">服务简介</a></li>
//				 	<li><a href="#">新闻动态</a></li>
//				 	<li><a href="#">关于我们</a></li>
//				 </ul>
//			</div>

var CONTEXT_ROOT = 'jaxwebsite',
	PC_DIR = 'pc',
	DS = '/';

function getAbsolutePath(path) {
	return DS + CONTEXT_ROOT + DS + PC_DIR + DS + path;
}


$(function(){
	var html='';
	
	
	html+='<div class="logo left">';
	html+='<a href="index.html"><img src="img/jax-logo.png"/></a>'
	html+='</div>';
	html+='<div class="list right">';
	html+='<ul class="clearfix">';
	html+='<li><a href="index.html" class="active">首页</a></li>';
	html+='<li><a href="case.html">案例欣赏</a></li>';
	html+='<li><a href="service.html">服务简介</a></li>';
	html+='<li><a href="' + getAbsolutePath('main/news') + '">新闻动态</a></li>';
	html+='<li><a href="aboutUs.html">关于我们</a></li>';
	html+='</ul></div>';
	
	
	
	$("#headNav").html(html);
	
	
	var urlstr = location.href;   //通过js中的location.href得到当前页面的地址
  //alert((urlstr + '/').indexOf($(this).attr('href')));
	  var urlstatus=false;
	  $("#headNav a").each(function () {
		  
	    if (location.pathname.indexOf($(this).attr('href')) != -1&&$(this).attr('href')!='') {
	      $(this).addClass('active'); 
//	      $(this).parent().addClass('cute');
	      urlstatus = true;
	    } else {
	      $(this).removeClass('active');
//	       $(this).parent().removeClass('cute');   //为此句有或没有都可以正常显示
	    }
	  });
	  if (!urlstatus) {$("#headNav a").eq(0).addClass('active'); }

});
    
