$(function(){
	
	var html='';
	html+='<div class="contract">';
	html+='<div class="center">';
	html+='<div class="tit">';
	html+='<h3>联系<span>CONTACT</span></h3>';
	html+='<span>————</span>';
	html+='</div>';
	html+='<div class="main clearfix">';
	html+='<div class="msg left">';
	html+='<p class="company">西安华表网络软件科技有限公司</p>';
	html+='<p>联系邮箱：1987993576@qq.com</p>';
//	html+='<p>联系传真：020-000000</p>';
	html+='<p>联系电话：18049005758</p>';
	html+='<p>联系地址：西安市雁塔区唐延南路i都会4栋7层</p>';
//	html+='<p><span class="weixin"></span><span class="weibo"></span><span class="qq"></span></p>';
	html+='</div>';
	html+='<div class="box left">';
	html+='<form action="/pc/main/contact/json" id="form1" method="post">';
	html+='<div class="list">';
	html+='<span>姓名</span>';
	html+='<input type="text" name="name" id="" value="" />';
	html+='</div><div class="list">';
	html+='<span>电话</span><input type="number" name="phone" id="" value="" /></div>';
	html+='<div class="list pos"><span>留言</span><textarea rows="3" name="descr" cols="20"></textarea></div>';
	html+='<input type="button" class="btn" id="submit" value="提交"/>';
	html+='</form>';
	html+='</div></div></div></div>';
	html+='<div class="bottom"><div class="center"><div class="foot">';
//	'html+='<div class="link">友情链接 :<a href="https://www.aliyun.com/" target="_blank">阿里云</a> <a href="#">西安印钞有限公司</a> <a href="https://www.cqfmbank.com/" target="_blank">重庆富民银行</a> </div>''
	html+='<p>Copyright © 2017 西安华表网络软件科技  陕ICP备17023787号-1 <p>';
//	html+='<p>手机版 | 本站使用凡科建站搭建 | 管理登录</p>';
	html+='</div></div></div>';
	
	$("#foot").html(html);

	$('#submit').click(function(){
		if($('input[name="name"]').val()==''){
			alert('请输入姓名');
			return false;
		}
		if($('input[name="phone"]').val()==''){
			alert('请输入电话');
			return false;
		}
		if($('textarea[name="descr"]').val()==''){
			alert('请输入留言');
			return false;
		}
		if($('input[name="phone"]').val().length!=11){
			alert('请输入手机号码');
			return false;
		}

		$.get('/jaxwebsite/pc/main/lunBoList/json',{name:$('input[name="name"]').val(),phone:$('input[name="phone"]').val(),descr:$('textarea[name="descr"]').val()},function(data){
					if(data.status=='success'){
						alert('留言成功');
					}else{
						alert('留言失败，请稍后再试');
					}

		});
	});
});


//			<div class="contract">
//				<div class="center">
//					<div class="tit">
//						<h3>联系<span>CONTRACT</span></h3>
//						<span>————</span>
//					</div>
//					<div class="main clearfix">
//						<div class="msg left">
//							<p class="company">ADVERTISING广告策划有限公司</p>
//							<p>联系邮箱：contact@fkadjkhsf.co</p>
//							<p>联系传真：020-000000</p>
//							<p>联系电话：020-000000 400-000000</p>
//							<p>联系地址：XXX省XXX市XXX县XXX路XXX号</p>
//							<p><span class="weixin"></span><span class="weibo"></span><span class="qq"></span></p>
//						</div>
//						<div class="box left">
//							<form action="" method="post">
//								<div class="list">
//									<span>姓名</span>
//									<input type="text" name="" id="" value="" />
//								</div>
//								<div class="list">
//									<span>电话</span>
//									<input type="text" name="" id="" value="" />
//								</div>
//								<div class="list pos">
//									<span>留言</span>
//									<textarea rows="3" cols="20"></textarea>
//								</div>
//								<input type="submit" class="btn" value="提交"/>
//							</form>
//						</div>
//					</div>
//				</div>
//			</div>
//			<div class="bottom">
//				<div class="center">
//					<div class="foot">
//						<p>©2017 网站模板—广告 版权所有<p>
//						<p>手机版 | 本站使用凡科建站搭建 | 管理登录</p>
//						
//					</div>
//				</div>
//			</div>