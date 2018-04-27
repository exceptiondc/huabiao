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
		<title>西安华表网络软件科技，专注于定制业务系统开发</title>
    	<meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
		<meta name="Description" content="西安华表网络软件科技，专注于定制业务系统开发，软件开发、PC+移动端建站、APP开发及运营服务等业务，是西安互联网科技行业的后起之秀。华表网络拥有一支国内领先的技术团队，并凭借专业知识强、业务技术精、服务质量高等特点得到用户的一致赞誉，并与行业内诸多知名企业保持长期稳定的合作关系。"/>
		<meta name="Keywords" content="华表网络,软件科技,西安软件公司,西安软件外包,陕西软件公司,提供软件定做,定制,项目外包,OA企业办公管理系统,生产管理系统软件,CRM系统,铁路信息化系统,政府办公自动化系统,西安的软件公司,专业软件定制机构"/>
		<link rel="shortcut icon" href="favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="css/reset.css"/>
		<link rel="stylesheet" type="text/css" href="css/common.css"/>
		
		<link rel="stylesheet" type="text/css" href="css/news.css"/>
		<script src="js/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/headnav.js" type="text/javascript" charset="utf-8"></script>
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
			<div class="content details">
				<div class="center">
					<div class="news-title">
						${announce.title}
					</div>
					<div class="news-content">
						${announce.content }

					</div>
					
					<div class="pre-next">
						<ul class="clearfix">
							<li>
								上一篇：
								<c:choose>
									<c:when test="${not empty prev.announce}">
										<a href="main/news-detail?id=${prev.announce['id']}"> ${prev.announce['title']}</a>
									</c:when>
									<c:otherwise>
										<a>暂无更多</a>
									</c:otherwise>
								</c:choose>
							<li>
								下一篇：
								<c:choose>
									<c:when test="${not empty next.announce}">
										<a href="main/news-detail?id=${next.announce['id']}"> ${next.announce['title']}</a>
									</c:when>
									<c:otherwise>
										<a>暂无更多</a>
									</c:otherwise>
								</c:choose>
							</li>
						</ul>
					</div>
					<div class="go-list">
						<a href="main/news">返回列表</a>
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
			$("body").flowUp("img",{ transalteY: 350, duration: 1 });
			$("body").flowUp(".box",{ transalteY: 350, duration: 1 });
		});
		
	</script>
	</body>
</html>
