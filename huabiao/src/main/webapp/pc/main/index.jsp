<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="renderer" content="webkit">
	<link rel="stylesheet" type="text/css" href="../css/index.css">
	<link rel="stylesheet" type="text/css" href="../css/swiper.min.css">
	<link rel="stylesheet" type="text/css" href="../css/components.css">
	<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="../js/swiper.min.js"></script>
	<script type="text/javascript" src="../js/components.js"></script>
	<script type="text/javascript" src="../js/index.js"></script>
	<title>首页</title>
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
								<img src="../img/3wks.png" width="56px" height="56px">
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
								<img src="../img/dsj.png" width="56px" height="56px">
								<h4>物联网应用</h4>
								<p>从消费级到工业级物联网，满足您所有场景需求</p>
							</div>
							<ol>
								<li>
								   <p><b>-</b> 智慧公共充电  <b>-</b></p>
								   <span></span>
								</li>
								<li>
									<p><b>-</b> 智慧社区安防 <b>-</b></p>
								</li>
								<li>
									<p><b>-</b> 智慧养老健康 <b>-</b></p>
								</li>
								<li>
									<p><b>-</b> 智慧消防 智慧烟感 <b>-</b></p>
								</li>
								<li>
									<p><b>-</b> 智慧水务 智慧燃气 <b>-</b></p>
								</li>
								<li>
									<p><b>-</b> 车联网 <b>-</b></p>
								</li>
							</ol>
						</li>
						<li>
							<div class="list_name">
								<img src="../img/cq.png" width="56px" height="56px">
								<h4>智慧物联平台</h4>
								<p></p>
							</div>
							<ol>
								<li>
								   <p><b>-</b> 物联网应用全景平台 <b>-</b></p>
								   <span></span>
								</li>
								<li>
									<p><b>-</b> 智能可视大数据 <b>-</b></p>
								</li>
								<li>
									<p><b>-</b> VR全息社区 <b>-</b></p>
								</li>
							</ol>
						</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
			<div class="programme">
				<div class="programme_contont">
					<div class="title">
						<h3>解决方案</h3>
						<p>我们致力于打造物联一体的智慧化城市</p>
						<span class="border_org"></span>
					</div>
					<div class="programme_item">
						<ul>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/community_01.png" src="../img/community.png" width="80px" height="80px">
									<p>智慧社区</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/agriculture_01.png" src="../img/agriculture.png" width="80px" height="80px">
									<p>智慧农业</p>
									<span>远程管理  自动报警</br>酸碱度 微量元素检测  智能方案推荐</span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/traffic_01.png" src="../img/traffic.png" width="80px" height="80px">
									<p>智慧交通</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/education_01.png" src="../img/education.png" width="80px" height="80px">
									<p>智慧教育</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/medicalcare_01.png" src="../img/medicalcare.png" width="80px" height="80px">
									<p>智慧医疗</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/life_01.png" src="../img/life.png" width="80px" height="80px">
									<p>智慧生活</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/data_01.png" src="../img/data.png" width="80px" height="80px">
									<p>大数据</p>
									<span></span>
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									<img changeImg="../img/charge_01.png" src="../img/charge.png" width="80px" height="80px">
									<p>共享充电</p>
									<span></span>
								</a>
							</li>
						</ul>
					</div>
					<div class="programme_more"><a href="solution.html">查看详情></a></div>
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
								<div class="swiper-slide">
									<div class="retrieval case_list">
										<a href="javascript:void(0);">
											<img changeImg="../img/retrieval_01.png" src="../img/retrieval.png" width="120px" height="110px">
											<h3>华表网络专利检索平台</h3>
											<p>专利检索平台是华表网络旗下的一个知识产权检索系统，它涵盖了高级检索，批量检索等一系列的检索功能，简约的表现方式更好的为用户...</p>
											<span>2018-04-11</span>
										</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="bicycle case_list">
										<a href="javascript:void(0);">
											<img changeImg="../img/bicycle_01.png" src="../img/bicycle.png" width="120px" height="110px">
											<h3>电瓶车共享充电平台项目</h3>
											<p>由华表网络和某某科技公司联合智造的电动车共享充电宝现已于今日成功投放到西安本地市场，本次投放的数量大约为10000个，参与......</p>
											<span>2018-04-11</span>
										</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="town case_list">
										<a href="javascript:void(0);">
											<img changeImg="../img/town_01.png" src="../img/town.png" width="120px" height="110px">
											<h3>智慧小镇一体化建设</h3>
											<p>由华表网络和某某科技公司联合智造的电动车共享充电宝现已于今日成功投放到西安本地市场，本次投放的数量大约为10000个，参与......</p>
											<span>2018-04-11</span>
										</a>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="town case_list">
										<a href="javascript:void(0);">
											<img changeImg="../img/town_01.png" src="../img/town.png" width="120px" height="110px">
											<h3>智慧小镇一体化建设</h3>
											<p>由华表网络和某某科技公司联合智造的电动车共享充电宝现已于今日成功投放到西安本地市场，本次投放的数量大约为10000个，参与......</p>
											<span>2018-04-11</span>
										</a>
									</div>
								</div>
							</div>
							<div class="swiper-button-prev"></div>
							<div class="case_more"><a href="case.html">查看更多></a></div>
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
							<div class="case_more"><a href="hua_news.html">查看更多></a></div>
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