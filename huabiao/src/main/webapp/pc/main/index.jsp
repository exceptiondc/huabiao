<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="pc/css/index.css">
	<link rel="stylesheet" type="text/css" href="pc/css/swiper.min.css">
	<link rel="stylesheet" type="text/css" href="pc/css/components.css">
	<script type="text/javascript" src="pc/js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="pc/js/swiper.min.js"></script>
	<script type="text/javascript" src="pc/js/components.js"></script>
	<script type="text/javascript" src="pc/js/index.js"></script>
	<title>${data.data.title}</title>
	<meta name="keywords" content="${data.data.keywords}"/>

	<meta name="description" content="${data.data.description}" />
</head>
<body>
	<div class="wrap">
		<div class="header"></div>
		<div class="index_banner">
			<div class="swiper-container swiper-container-horizontal" id="swiper-container">
				<div class="swiper-wrapper">
				
				</div>
				<div class="swiper-pagination autoplay swiper-pagination-clickable"></div>
			</div>				
		</div>
		<div class="main">
			<div class="product_content">
				<div class="title">
					<h3>我们的产品</h3>
					<p>智慧化未来, 大数据, 一站式管理平台</p>
					<span class="border_org"></span>
				</div>
				<div class="product_list">
					<ul>
						<li>
							<div class="list_name">
								<img changeImg="pc/img/3wks.png" src="pc/img/3D_default.png" width="58px" height="58px">
								<h4>三维可视化</h4>
								<p>立体角度看世界</p>
							</div>
							<ol>
								<li>
								   <p><b>-</b> 三维动画、虚拟现实 <b>-</b></p>
								   <span>教育培训/展览展示/建筑规划/工业机械/军事仿真</span>
								</li>
								<li>
									<p><b>-</b> 智慧工业4.0 <b>-</b></p>
									<span>智慧工厂/智慧物流/智慧仓储</span>
								</li>
							</ol>
						</li>
						<li>
							<div class="list_name">
								<img changeImg="pc/img/wulianwang_selected.png" src="pc/img/wlw.png" width="58px" height="58px">
								<h4>物联网应用</h4>
								<p>精益求精智联万物</p>
							</div>
							<ol>
								<li>
								   <p><b>-</b> 消费级物联  <b>-</b></p>
								   <span>智慧充电/智慧安防/智慧烟感/智慧燃气/车联网/智慧养老健康</span>
								</li>
								<li>
									<p><b>-</b> 工业级物联 <b>-</b></p>
									<span>智联设备/智慧仓储/智慧工业/智慧智造/智慧工厂/智慧农业</span>
								</li>
							</ol>
						</li>
						<li>
							<div class="list_name">
								<img changeImg="pc/img/dashuju_selected.png" src="pc/img/dsj.png" width="58px" height="58px">
								<h4>可视化大数据</h4>
								<p>数据驱动价值增长</p>
							</div>
							<ol>
								<li>
								   <p><b>-</b> 物联网大数据分析 <b>-</b></p>
								   <span>物联网接入平台/大数据实时监控处理/大数据挖掘分析/数据安全岛</span>
								</li>
								<li>
									<p><b>-</b> 智能可视化 <b>-</b></p>
									<span>VR全息社区/三维数字漫游展示/智能地理信息/智能资产能源管理/智能管网/智能社区</span>
								</li>
							</ol>
						</li>
						<li>
							<div class="list_name">
								<img changeImg="pc/img/zhihuiwulian_selected.png" src="pc/img/zhihuiwulian_default.png" width="58px" height="58px">
								<h4>智慧物联平台</h4>
								<p>联接创造无限可能</p>
							</div>
							<ol>
								<li>
								   <p><b>-</b> 智美家园 <b>-</b></p>
								   <span>智慧社区/物联应用全景平台/家园智观大数据/VR全息社区</span>
								</li>
								<li>
									<p><b>-</b> 共享充电 <b>-</b></p>
									<span>智能充电设备/智慧管理平台/智慧大数据平台/智慧移动终端</span>
								</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
			<div class="programme">
				<div class="programme_contont">
					<div class="title">
						<h3>方案和产品</h3>
						<p>我们致力于打造物联一体的智慧化城市</p>
						<span class="border_org"></span>
					</div>
					<div class="programme_item">
						<ul>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/community_01.png" src="pc/img/community.png" width="80px" height="80px">
									<p>智慧社区</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/agriculture_01.png" src="pc/img/agriculture.png" width="80px" height="80px">
									<p>智慧农业</p>
									<span>远程管理  自动报警</br>酸碱度 微量元素检测  智能方案推荐</span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/traffic_01.png" src="pc/img/traffic.png" width="80px" height="80px">
									<p>智慧交通</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/education_01.png" src="pc/img/education.png" width="80px" height="80px">
									<p>智慧教育</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/medicalcare_01.png" src="pc/img/medicalcare.png" width="80px" height="80px">
									<p>智慧医疗</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/life_01.png" src="pc/img/life.png" width="80px" height="80px">
									<p>智慧生活</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/data_01.png" src="pc/img/data.png" width="80px" height="80px">
									<p>大数据</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="pc/img/charge_01.png" src="pc/img/charge.png" width="80px" height="80px">
									<p>共享充电</p>
									<span></span>
								</a>
							</li>
						</ul>
					</div>
					<div class="programme_more"><a href="javaScript:tiaozhuan('solution.html');">查看详情></a></div>
				</div>
			</div>
			<div class="case">
				<div class="case_content">
					<div class="title">
						<h3>精选案例</h3>
						<p>严谨的对待每一个细节，只为智造最好</p>
						<span class="border_org"></span>
					</div>
					<div class="case_item">
						<div class="swiper-container swiper-container-horizontal" id="swiper-container1">
							<div class="swiper-wrapper">
								
							</div>
							<div class="swiper-button-prev"></div>
							<div class="case_more"><a href=" javaScript:tiaozhuan('case.html');">查看更多></a></div>
    						<div class="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="hua_news">
				<div class="news_content">
					<div class="title">
						<h3>华事记</h3>
						<p>夜阑风雨声   华事知多少</p>
						<span class="border_org"></span>
					</div>
					<div class="news_item">
						<div class="swiper-container swiper-container-horizontal" id="swiper-container2">
							<div class="swiper-wrapper">
								
							</div>
							<div class="swiper-button-prev"></div>
							<div class="case_more"><a href="javaScript:tiaozhuan('hua_news.html');">查看更多></a></div>
			    						<div class="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div> -->
		</div>
		<div class="footer"></div>
	</div>

	<script language="javascript"> 

		var mySwiper1 = new Swiper('#swiper-container1',{
		 	slidesPerView : 3,
			spaceBetween : 20,
			navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		});

		
	</script>
</body>
</html>