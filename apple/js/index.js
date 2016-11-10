$(function(){
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".son").css({
        width:clientW,
        height:clientH
    })

    $(".menu").click(function(){
        $(".son").slideToggle(200);
    })
    //轮播图
    var current = 0;
    var next = 0;
    var currentTime=0;
    var flag = true;
    function move(){
        next++;
        if(next==3)
        {
            next=0;
            flag=false;
        }

        $(".banner-list:eq("+current+")").animate({
            width:"80%",
            height:"80%"
        }).css("zIndex",0);

        $(".banner-list:eq("+next+")").animate({left:0},function(){
            $(".banner-list:eq("+current+")").css({
                left:"100%",width:"100%",height:"100%"
            })
            current=next;
            currentTime=0;
            flag = true;
        }).css("zIndex",1)
    }
    var t1=setInterval(move,3000);

    /*时间条*/
    function move2(){
        currentTime+=50;
        var bili=currentTime/3000;
        if(bili>1)
        {
            bili=1;
        }
        $(".progress").eq(current).css({width:bili*100+"%"});
        if(flag===false){
            $(".progress").css("width",0);
        }
    }
    var t2=setInterval(move2,50);
    /*处理setInterval*/
    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move2,50);
    })
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })
    /*轮播点动画 */
    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".time-list").find(".progress").css("width",0);
        $(".time-list").eq(next).find(".progress").css("width","100%");
        if(next>current){
            $(".time-list:eq("+current+")").animate({width:"80%",height:"80%"}).css("zIndex",0);

            $(".time-list:eq("+next+")").animate({left:0},function(){
                $(".time-list:eq("+current+")").css({
                    left:"100%",width:"100%",height:"100%"
                })
                current=next;
            }).css("zIndex",1)
        }else{
            $(".time-list:eq("+current+")").animate({left:"100%"}).css("zIndex",1);
            $(".time-list").eq(next).css({
                width:"80%",height:"80%",left:0
            }).animate({width:"100%",height:"100%"},function(){
                current=nextm;
            })
        }
    }
    $(".time-list").click(function(){
        next=$(this).index(".time-list");
        stop();
    })
    //左右箭头动画
    $(".left").click(function(){
        next--;
        if(next==-1)
        {
            next=3;
            flag=false;
        }

        $(".banner-list:eq("+current+")").animate({
            width:"80%",
            height:"80%"
        }).css("zIndex",0);

        $(".banner-list:eq("+next+")").animate({left:0},function(){
            $(".banner-list:eq("+current+")").css({
                left:"100%",width:"100%",height:"100%"
            })
            current=next;
            currentTime=0;
            flag = true;
        }).css("zIndex",1)
    })
    $(".right").click(function(){
       move();
    })
    /*左右箭头移入动画*/
    $(".leftbtn").hover(function(){
        $(".left").css("opacity",1);
    },function(){
        $(".left").css("opacity",0);
    })
    $(".rightbtn").hover(function(){
        $(".right").css("opacity",1);
    },function(){
        $(".right").css("opacity",0);
    })
})