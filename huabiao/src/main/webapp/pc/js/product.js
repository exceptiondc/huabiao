$(function(){

	$('.ivu-breadcrumb > span:eq(1) a').addClass('active');
	// var currUrl = "";
	// $('.product_list ul > div > li').hover(function(){
	// 	currUrl = $(this).find('img').attr('src');
	// 	var changeImg = $(this).find('img').attr('changeImg');
	// 	$(this).find('img').attr('src',changeImg);
	// 	$(this).stop().animate({
	// 		marginTop: '-20px',
	// 		height: 'auto'	
	// 	}, 600).css({
	// 		'width': '333px',
	// 		'border': '1px solid #FF9C00',
	// 		'border-top': '3px solid #FF9C00',
	// 		'position': 'absolute',
	// 		'z-index': 99
	// 	});
	// 	$(this).parent().css('position', 'relative');
	// 	$(this).find('ol li').css('text-align', 'left');
	// 	$(this).find('ol li p').css({'margin-top': '30px', 'color': '#333'});
	// 	$(this).find('ol li p:eq(0)').css('margin-top', '0');
	// 	$(this).find('ol li p b').hide();
	// 	$(this).find('ol li span').show().css('margin-top', '22px');
	// },function(){
	// 	$(this).find('img').attr('src', currUrl);
	// 	$(this).stop().animate({
	// 		marginTop: '0',		
	// 	}, 600).css({
	// 		'width': '253px',
	// 		'height': '346px',
	// 		'border': '1px solid #f3f3f3',
	// 		'border-top': '3px solid #f3f3f3',
	// 		'margin-top': '0',
	// 		'position': 'static'
	// 	});
	// 	$(this).find('ol li').css('text-align', 'center');
	// 	$(this).find('ol li p').css({'margin-top': '0', 'line-height': '30px', 'color': '#999'});
	// 	$(this).find('ol li p b').show();
	// 	$(this).find('ol li span').hide().css('margin-top', '0');
	// });

	$('.product_list ul > div > li').hover(function(){
		$(this).parent().css('position', 'relative');
		$(this).addClass('curr');
		$(this).find('span').show();
		$(this).find(' b').hide();
	},function(){
		$(this).removeClass('curr');
		$(this).find('span').hide();
		$(this).find(' b').show();
	});

	data.map(e => {
		$('.group_img ul').append(imgList(e));
		
		var mySwiper = new Swiper ('#swiper-container' + e.id, {
		    	loop: true,
		    	effect : 'flip',
		    	autoplay : false,
		    	allowTouchMove: false,
		    	speed: 1000,
		    	autoplay : 10,
				autoplayDisableOnInteraction : true,
		  	})

	  	$('#swiper-container' + e.id).hover(function(){
	    	mySwiper.autoplay.start();
	    	setTimeout(function(){
	    		mySwiper.autoplay.stop();	
	    	}, 500)
	    	 
	    }, function(){
	    	mySwiper.autoplay.stop();
	    })
	});


	/*var lazyLoad = function(){
        $("img.lazy").lazyload({
            effect: "fadeIn",  
            threshold: 200,
        })
    };

 	lazyLoad();*/
});

var data = [{'img': '../img/product_01.png', 'id': '1'},
				{'img': '../img/product_02.png', 'id': '2'},
				{'img': '../img/product_03.png', 'id': '3'}, 
				{'img': '../img/product_04.png', 'id': '4'}, 
				{'img': '../img/product_05.png', 'id': '5'}, 
				{'img': '../img/product_06.png', 'id': '6'}, 
				{'img': '../img/product_07.png', 'id': '7'}];

var imgList = function (data){
	var tpl = `<div class="swiper-container" id="swiper-container${ data.id }">
				    	<div class="swiper-wrapper">
					        <div class="swiper-slide" src="500"><img class="lazy" src="${data.img}"></div>
				    	</div>
					</div>`
		return tpl;
}