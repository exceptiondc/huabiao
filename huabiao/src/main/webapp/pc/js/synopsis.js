$(function(){

    $('.ivu-breadcrumb > span:eq(4) > a').addClass('on');

    //公司简介
    var getIntros = function(){
        $.ajax({  
            type:"post",  
            url: API + "huabiao/system/announce/list/json?type=intros",  
            dataType: "json",  
            success:function(result) {  
            console.log('公司简介:',result);

            if (result.statusCode == 200) {
                var data = result.data[0];
                $('.intros').append(introsTpl(data));
            }
         },
         error:function (XMLHttpRequest, textStatus, errorThrown) {  
                    console.log('网络连接异常，请重试！')  
            }
      });
    }

    getIntros();
});

//公司简介模板
var introsTpl = function (data){
    var tpl = `<div class="gs_text">
                    <h3>${ data.title }</h3>
                    <p>${ data.content }</p>
                </div>`;
        return tpl;
}