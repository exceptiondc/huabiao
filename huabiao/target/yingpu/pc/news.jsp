<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>
<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath + "pc/" %>" />
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/reset.css"/>
		<link rel="stylesheet" type="text/css" href="css/common.css"/>
		<link rel="stylesheet" type="text/css" href="css/news.css"/>
		<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/headnav.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/utils.js"></script>
	</head>
	<body>
		<div class="header-nav clearfix" id="headNav">
			<!--<div class="logo">
				<p>Advertising <span>Design</span></p>
			</div>
			 <ul class="clearfix">
			 	<li><a href="#" class="active">首页</a></li>
			 	<li><a href="#">案例欣赏</a></li>
			 	<li><a href="#">服务简介</a></li>
			 	<li><a href="#">新闻动态</a></li>
			 	<li><a href="#">关于我们</a></li>
			 </ul>-->
		</div>
		<!--中间部分-->
		<div class="main-container">
			
			<div class="banner news">
				
			</div>
			<div class="content">
				<div class="center">
					<div class="news-example">
						<div class="example left">
							<img src="${first.pic}"/>
							<h6><a href="main/news-detail?id=${first.id}">${first.title}</a></h6>
							<p>${first.descr}</p>
						</div>
						<div class="example right">
							<img src="${second.pic}"/>
							<h6><a href="main/news-detail?id=${second.id}">${second.title}</a></h6>
							<p>${second.descr}</p>
						</div>
					</div>
					
					<div class="news-list">
						<c:forEach items="${data}" var="o">
							<div class="item clearfix">
								<a href="main/news-detail?id=${o.id}">
									<div class="time left">
										<span class="day">${fn:substring(o.postTime, 8, 10)}</span>
										<span>${fn:substring(o.postTime, 0, 7)}</span>
									</div>
									<div class="zhaiyao left">
										<h6>${o.title}</h6>
										<p>${o.descr}</p>
									</div>
								</a>
							</div>
						</c:forEach>
					</div>

					<div class="page">
						<div class="page-list" id="pageList">
							<a href="main/news?pageIndex=1">首页</a>
							<span id="page-nav-btn">
                                <c:forEach var="index" begin="${page.pageIndex + 5 > page.pageCount ?
										(page.pageCount - 5 < 1 ? 1 : page.pageCount - 5) : page.pageIndex}"
                                           end="${page.pageCount < page.pageIndex + 5 ? page.pageCount : page.pageIndex + 5}" step="1">
                                    <a href="main/news?pageIndex=${index}" class="${page.pageIndex == index ? 'active' : ''}">${index}</a>
                                </c:forEach>
							</span>
							<a href="main/news?pageIndex=${page.pageCount}">尾页</a>
						</div>
					</div>
				</div>
				
			</div>
			
			<!--联系我们-->
			<div class="" id="foot">
				
			</div>
			<!--<div class="contract">
				<div class="center">
					<div class="tit">
						<h3>联系<span>CONTRACT</span></h3>
						<span>————</span>
					</div>
					<div class="main clearfix">
						<div class="msg left">
							<p class="company">ADVERTISING广告策划有限公司</p>
							<p>联系邮箱：contact@fkadjkhsf.co</p>
							<p>联系传真：020-000000</p>
							<p>联系电话：020-000000 400-000000</p>
							<p>联系地址：XXX省XXX市XXX县XXX路XXX号</p>
							<p><span class="weixin"></span><span class="weibo"></span><span class="qq"></span></p>
						</div>
						<div class="box left">
							<form action="" method="post">
								<div class="list">
									<span>姓名</span>
									<input type="text" name="" id="" value="" />
								</div>
								<div class="list">
									<span>电话</span>
									<input type="text" name="" id="" value="" />
								</div>
								<div class="list pos">
									<span>留言</span>
									<textarea rows="3" cols="20"></textarea>
								</div>
								<input type="submit" class="btn" value="提交"/>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="center">
					<div class="foot">
						<p>©2017 网站模板—广告 版权所有<p>
						<p>手机版 | 本站使用凡科建站搭建 | 管理登录</p>
						<p></p>
					</div>
				</div>
			</div>-->
		</div>
	
	<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<!--<script src="js/jquery-1.10.1.min.js" type="text/javascript" charset="utf-8"></script>-->
	<script src="js/idangerous.swiper.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/flowup.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/foot.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		$(function(){
			$("body").flowUp("p",{ transalteY: 350, duration: 1 });
			$("body").flowUp("h6",{ transalteY: 350, duration: 1 });
			$("body").flowUp(".box",{ transalteY: 350, duration: 1 });
		});
		
	</script>
	</body>
</html>
