
$(function(){
   /* //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(108.878556,34.196487),18);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      var markers = [
        {content:"西安市高新技术产业开发区锦业一路56号研祥城市广场B座307室",title:"陕西华表网络技术有限公司",imageOffset: {width:-69,height:-21},position:{lat:34.196592,lng:108.878466}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("https://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
    }
    //向地图添加控件
    function addMapControl(){
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
    }
    var map;
      initMap();*/

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


      /*//添加点标记，并使用自己的icon
        var marker = new AMap.Marker({
         map: map,
         position: [108.871841, 34.190701],
           icon: new AMap.Icon({            
               image: "https://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png"
            })             
       });

      marker.setMap(map);
      // 设置鼠标划过点标记显示的文字提示
      marker.setTitle('地址：西安市高新技术产业开发区锦业一路56号研祥城市广场B座307室');

      // 设置label标签
      marker.setLabel({
         //label默认蓝框白底左上角显示，样式className为：amap-marker-label
         offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
         content: "陕西华表网络技术有限公司"
      });
*/
      
      }

    init();



   /*function openInfo() {
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
}

openInfo()*/

    //引入SimpleMarker，loadUI的路径参数为模块名中 'ui/' 之后的部分
   AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
       //启动页面
       initPage(SimpleMarker);
   });

   function initPage(SimpleMarker) {

       //创建SimpleMarker实例
       new SimpleMarker({
           //前景文字
           iconLabel: '',
           //图标主题
           iconTheme: 'fresh',
           //背景图标样式
           iconStyle: 'darkyellow',
           position: [108.871841, 34.190701]
       });
   }
});
    

