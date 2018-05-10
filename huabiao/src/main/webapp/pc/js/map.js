
$(function(){

   function init(){
        var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:18,
        center: [108.871841, 34.190701]
      });

        addMarker();
      //添加marker标记
       function addMarker() {
           map.clearMap();
           var marker = new AMap.Marker({
               map: map,
               position: [108.871841, 34.190701],
               icon: new AMap.Icon({            
                  image: "../img/Marker.png"
               })
           });
           //鼠标点击marker弹出自定义的信息窗体
           AMap.event.addListener(marker, 'click', function() {
               infoWindow.open(map, marker.getPosition());
           });
       }

       //实例化信息窗体
      var title='陕西华表网络技术有限公司',
          content=[];
      content.push("地址：西安市高新技术产业开发区锦业一路56号研祥城市广场B座307室");
      content.push("电话：029-81108865");
      var infoWindow = new AMap.InfoWindow({
          isCustom: true,  //使用自定义窗体
          content: createInfoWindow(title,content.join("<br>")),
          offset: new AMap.Pixel(16, -50)//-113, -140
      });
      infoWindow.open(map, [108.871841, 34.190701]);

       //构建自定义信息窗体
       function createInfoWindow(title, content) {
           var info = document.createElement("div");
           info.className = "info";

           //可以通过下面的方式修改自定义窗体的宽高
           //info.style.width = "400px";
           // 定义顶部标题
           var top = document.createElement("div");
           var titleD = document.createElement("div");
           var closeX = document.createElement("img");
           top.className = "info-top";
           titleD.innerHTML = title;
           closeX.src = "https://webapi.amap.com/images/close2.gif";
           closeX.onclick = closeInfoWindow;

           top.appendChild(titleD);
           top.appendChild(closeX);
           info.appendChild(top);

           // 定义中部内容
           var middle = document.createElement("div");
           middle.className = "info-middle";
           middle.style.backgroundColor = 'white';
           middle.innerHTML = content;
           info.appendChild(middle);

           // 定义底部内容
           var bottom = document.createElement("div");
           bottom.className = "info-bottom";
           bottom.style.position = 'relative';
           bottom.style.top = '0px';
           bottom.style.margin = '0 auto';
           var sharp = document.createElement("img");
           sharp.src = "https://webapi.amap.com/images/sharp.png";
           bottom.appendChild(sharp);
           info.appendChild(bottom);
           return info;
       }

       //关闭信息窗体
       function closeInfoWindow() {
           map.clearInfoWindow();
       } 
   }

    init();
});
    

