 $(function(){
 	$('.huaNews').addClass('active');

//  	var totalPage = 1;//总共多少页  
//  	var totalRecords = 1;//总共多少条  
//  	var pageSize = 8;//每页显示多少页  
//  	loadList(1);  
//  	function loadList(pno){  
//     	$.ajax({  
//         	type:"post",  
//         	url: API + "huabiao/system/announce/list/json?type=news",  
//         	dataType: "json",  
//      		data: { 'pageIndex': pno,'pageSize': pageSize},  
//         	success:function(result) {  
//             	console.log(result);  
//             	console.log(pno);

//             	if (result.statusCode == 200) {  
//                 	var count = result.page.totalCount;
//                 	var data = result.data;  
//                 	totalRecords = count;
//                 	totalPage = Math.ceil(count / pageSize);  
//                 	var datalist = "";  
//                 	$.each(data, function(i, item) {
//                     	datalist += `<li id="${ item.id }">
// 										<dl>
// 											<dt><img class="lazy" data-original="${item.icon}" width="190px" height="170px"></dt>
// 											<dd>
// 												<h4>${item.title}</h4>
// 												<p>${item.content}</p>
// 											</dd>
// 											<span class="news_time">${item.postTime.substr(0, 10)}</span>
// 										</dl>
// 									</li>`

//                 	});  
//                 	$("#datalist1").html(datalist);  
//                 	$('.total').text(totalPage);   
//             	 	$('.count').text(count);   
//                 	$('.M-box').pagination({  
//                     	pageCount: totalPage,  
//                     	current:pno,//当前第几页
//                     	coping: true,
//                     	callback:PageClick  
//                 	});

//                 	$('#datalist1 li').click(function(){
//                 		var newsId = $(this).attr('id');
//                 		window.location.href = 'news_details.html?id=' + newsId;
//                 	});

//                   lazyLoad();  
//                }             
//            },  
//            error: function (XMLHttpRequest, textStatus, errorThrown) {  
//              			console.log('网络连接异常，请重试！')  
//         	}  
//  		});  
//  	}  
//     //回调函数    
//     PageClick = function(index){
//         $('.now').text(index.getCurrent());   
//         loadList(index.getCurrent()); //点击分页加载列表数据  
//    }

//    var lazyLoad = function(){
//         $("img.lazy").lazyload({
//             effect: "fadeIn",
//             threshold: 200,
//         })
//     };
  

    //华事记
    var totalPage = 1;//总共多少页  
        var totalRecords = 1;//总共多少条  
        var pageSize = 5;//每页显示多少页  
        loadList(1);  
        function loadList(pno){  
            $.ajax({  
                type:"post",  
                url: API + "huabiao/system/announce/list/json?type=news",  
                dataType: "json",  
                data: { 'pageIndex': pno,'pageSize': pageSize},  
                success:function(result) {  
                    console.log(result);  
                    console.log(pno);

                    if (result.statusCode == 200) {  
                        var count = result.page.totalCount;
                        var data = result.data;  
                        totalRecords = count;
                        totalPage = Math.ceil(count / pageSize);  
                        var datalist = "";  
                        $.each(data, function(i, item) {
                            datalist += `<li id="${ item.id }">
                                            <dl>
                                                <dt><img class="lazy" data-original="${item.icon}" width="190px" height="170px"></dt>
                                                <dd>
                                                    <h4>${item.title}</h4>
                                                    <p>${item.content}</p>
                                                </dd>
                                            </dl>
                                            <p class="news_time"><span>${item.postTime.substr(5, 5)}</span>${item.postTime.substr(0, 4)}</p>
                                        </li>`

                        });  
                        $("#datalist1").html(datalist);  
                        $('.total').text(totalPage);   
                        $('.count').text(count);   
                        $('.M-box').pagination({  
                            pageCount: totalPage,  
                            current:pno,//当前第几页
                            coping: true,
                            callback:PageClick  
                        });

                        $('#datalist1 li').click(function(){
                            var newsId = $(this).attr('id');
                            window.location.href = 'news_details.html?id=' + newsId;
                        });

                      lazyLoad();  
                   }             
               },  
               error: function (XMLHttpRequest, textStatus, errorThrown) {  
                            console.log('网络连接异常，请重试！')  
                }  
            });  
        }  
        //回调函数    
        PageClick = function(index){
            $('.now').text(index.getCurrent());   
            loadList(index.getCurrent()); //点击分页加载列表数据  
       }

       var lazyLoad = function(){
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        };
 });
