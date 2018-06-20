$(function(){

	$('.ivu-breadcrumb > span:eq(1) a').addClass('on');

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