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
	<link rel="icon" href="/huabiao/pc/img/tittle3.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="/huabiao/pc/css/index.css">
	<link rel="stylesheet" type="text/css" href="/huabiao/pc/css/swiper-4.2.2.min.css">
	<link rel="stylesheet" type="text/css" href="/huabiao/pc/css/components.css">
	<!-- <link rel="stylesheet" type="text/css" href="/huabiao/pc/css/iview.css"> -->
	<link rel="stylesheet" type="text/css" href="https://unpkg.com/iview/dist/styles/iview.css">
	<script type="text/javascript" src="/huabiao/pc/js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="/huabiao/pc/jq/jquery-lazyload/jquery.lazyload.js"></script>
	<script type="text/javascript" src="/huabiao/pc/js/swiper-4.2.2.min.js"></script>
	<script type="text/javascript" src="/huabiao/pc/js/swiper-4.2.2.min.js"></script>
	<!-- <script type="text/javascript" src="/huabiao/pc/js/vue.min.js"></script> -->
    <script type="text/javascript" src="https://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/iview/dist/iview.min.js"></script>
	<script type="text/javascript" src="/huabiao/pc/js/components.js"></script>
	<script type="text/javascript" src="/huabiao/pc/js/index.js"></script>
	<title>首页</title>
</head>
<body>
	<div class="wrap" id="app">
		<div class="header" style="border-bottom: 1px solid #364A54;">
			
		</div>
		<div class="index_banner">
			<div class="swiper-container swiper-container-horizontal swiper-no-swiping" id="swiper-container">
				<div class="swiper-wrapper">
				
				</div>
				<div class="swiper-pagination autoplay swiper-pagination-clickable"></div>
				<div class="module">
					<ul>
						<li>
							<img src="/huabiao/pc/img/wlwhy.png" width="50" height="50">
							<div>
								<p>物联网行业</p>
								<span>可信赖的解决方案提供商</span>
							</div>
						</li>
						<div style="width: 1px; height: 60px; background: #3F3F3F;"></div>
						<li>
							<img src="/huabiao/pc/img/dsjpt.png" width="50" height="50">
							<div>
								<p>大数据融平台</p>
								<span>助力行业智能化发展</span>
							</div>
						</li>
						<div style="width: 1px; height: 60px; background: #3F3F3F;"></div>
						<li>
							<img src="/huabiao/pc/img/swksh.png" width="50" height="50">
							<div>
								<p>三维可视化</p>
								<span>行业可视化全景展示管理</span>
							</div>
						</li>
					</ul>
					<img class="logo1" src="/huabiao/pc/img/logo1.png" width="88" height="88">
				</div>				
			</div>
		</div>
		<div class="main">
			<div class="product_content">
				<div class="title">
					<img src="/huabiao/pc/img/chanpin.png" width="38" height="38">
					<h3>我们的产品</h3>
					<p>智慧化未来, 大数据, 一站式管理平台</p>
					<!-- <span class="border_org"></span> -->
				</div>
				<div class="product_list">
					<ul>
						<div>
							<li>
								<div class="list_name">
									<img src="/huabiao/pc/img/ylwyy.png" width="58px" height="58px">
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
						</div>
						<div>
							<li>
								<div class="list_name">
									<img src="/huabiao/pc/img/wlwpt.png" width="58px" height="58px">
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
						</div>
						<div>
							<li>
								<div class="list_name">
									<img changeImg="/huabiao/pc/img/dashuju_selected.png" src="/huabiao/pc/img/dsjksh.png" width="58px" height="58px">
									<h4>可视化大数据</h4>
									<p>主流的云计算、大数据处理能力</p>
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
						</div>
						<div>
							<li>
								<div class="list_name">
									<img changeImg="/huabiao/pc/img/3wks.png" src="/huabiao/pc/img/sw.png" width="58px" height="58px">
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
						</div>
					</ul>
				</div>
			</div>
			<div class="programme">
				<div class="programme_contont">
					<div class="title">
						<img src="/huabiao/pc/img/fangan.png" width="38" height="38">
						<h3>智造·方案</h3>
						<p>我们致力于打造物联一体的智慧化城市</p>
						<!-- <span class="border_org"></span> -->
					</div>
					<div class="programme_item">
						<ul>
							
						</ul>
					</div>
				</div>
			</div>
			<!-- <div class="yongxin">
				<img src="/huabiao/pc/img/yongxin.png" width="100%">
			</div> -->
			<div class="case">
				<div class="case_content">
					<div class="title">
						<img src="/huabiao/pc/img/anli.png" width="38" height="38">
						<h3>精选案例</h3>
						<p>严谨的对待每一个细节，只为智造最好</p>
						<!-- <span class="border_org"></span> -->
					</div>
					<div class="case_item">
						<div class="case_con">
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer"></div>
	</div>

	<script>
		// new Vue({
		// 	el: "#app"
		// });
	</script>
</body>
</html>