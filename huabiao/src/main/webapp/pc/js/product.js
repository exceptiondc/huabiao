$(function(){
	$('.product').addClass('active');
	$('.product_list ul > li').hover(function(){
		$(this).stop().animate({
			marginTop: '-20px',		
		}, 600).css({
			'width': '333px',
			'height': 'auto',
			'border': '1px solid #FF9C00',
			'border-top': '3px solid #FF9C00',
		});
		$(this).find('ol li').css('text-align', 'left');
		$(this).find('ol li p').css({'margin-top': '30px', 'color': '#333'});
		$(this).find('ol li p:eq(0)').css('margin-top', '0');
		$(this).find('ol li p b').hide();
		$(this).find('ol li span').show().css('margin-top', '22px');
	},function(){
		$(this).stop().animate({
			marginTop: '0',		
		}, 600).css({
			'width': '253px',
			'height': '346px',
			'border': '1px solid #f3f3f3',
			'border-top': '3px solid #f3f3f3',
			'margin-top': '0',
		});
		$(this).find('ol li').css('text-align', 'center');
		$(this).find('ol li p').css({'margin-top': '0', 'line-height': '30px', 'color': '#999'});
		$(this).find('ol li p b').show();
		$(this).find('ol li span').hide().css('margin-top', '0');
	});

	$('.group_img ul li').hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
});