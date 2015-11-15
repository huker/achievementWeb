/**
 * Created by hu on 2015/11/15.
 */
$(function(){
    var oUl=$('#player>ul');
    oUl.html(oUl.html()+oUl.html());
    var aHead=$('#player>ol>li');
    var aContent=$('#player>ul>li');
    var oContent=$('#player>ul>li:first');
    var now=0;
    setInterval(function(){
        now++;
        tab();
    },2000);
    aHead.mouseover(function(){
        now=$(this).index();
        tab();
    });
    function tab(){
        aHead.removeClass('active');
        if(now==aHead.length){
            aHead.eq(0).addClass('active');
        }else{
            aHead.eq(now).addClass('active');
        }
        oUl.animate(
            {'top':-oContent.height()*now+'px'
            //'opacity':0.5
            },
            {'complete':function(){
                if(now==aContent.length){
                    oUl.css('top','0');
                    now=0;
                }
            }}
        )
    }
});