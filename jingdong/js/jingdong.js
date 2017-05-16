/**
 * Created by Administrator on 2017/4/12.
 */
$(function(){
    //轮播图部分
    Zlunbo(".bannertu",".ban_zj",".ban_zjs ul li","#fff",2,"#f10214",1500,1,"#fff",7);
    // Zlunbo(".xxxtu",".xpzb",".ddd","#fff",2,"#f10214",1500,1,"#fff",6);

    louceng(".btnBox li","section",".btnBox","nav","#918888","#f10215",500,615,".bbb")
    const bz=$(".ban_z ul li");
    const bl=$(".bannerlist");
    xuanxiangka(bz,bl);
    const nw=$(".nk_y .wjd");
    const jd=$(".jdlis");
    xuanxiangka(nw,jd);
    const gw=$(".mN_s .gouwu");
    const gwl=$(".mN_s .gouwu .gouwulis");
    xuanxiangka(gw,gwl);
    const nw2=$(".nk_y .kkk");
    const kh=$(".khlis");
    xuanxiangka(nw2,kh);
    const nw3=$(".nk_y .wwdh");
    const wdh=$(".wdh");
    xuanxiangka(nw3,wdh);
    const jdd=$(".right .dls .jdd");
    const dis=$(".right .dls");
    xuanxiangka(dis,jdd);
    const dls2=$(".right .dls2");
    const kkkh=$(".right .dls2 .kkkh");
    xuanxiangka(dls2,kkkh);
    const dls3=$(".right .dls3");
    const gjs=$(".right .dls3 .gjs");
    xuanxiangka(dls3,gjs);

//小图轮播部分
    let bigbox=$('.smlunbox')[0];
    let xiaoleft=$('.xiaoleft')[0];
    let xiaoright=$('.xiaoright')[0];
    // console.log(xiaoleft,xiaoright)

    xiaoright.onclick=function () {
        let first=bigbox.firstElementChild;
        let last=bigbox.lastElementChild;
        animate(first,{left:-1000},800,function () {
            bigbox.appendChild(first);
            first.style.left="1000px";
        });
        animate(last,{left:0},800)

    }

    xiaoleft.onclick=function () {
        let first=bigbox.firstElementChild;
        let last=bigbox.lastElementChild;
        bigbox.insertBefore(last,first);
        last.style.left="-1000px";
        animate(first,{left:1000},800);
        animate(last,{left:0},800)

    }

    // bigbox.onmouseover=function () {
    //     xiaoleft.style.display="block";
    //     xiaoright.style.display="block";
    // }
    // bigbox.onmouseout=function () {
    //     xiaoleft.style.display="none";
    //     xiaoright.style.display="none";
    // }


    //选项卡部分

    let xxkimg=$('.xxkimg');
    let xxkbtn=$('.xxkbtn');
    let yidongt=$('.yidongt')[0];
    // console.log(xxkbtn);
    for(let i=0;i<xxkbtn.length;i++){
        xxkbtn[i].onmouseover=function () {
            yidongt.style.transform='translateX('+74*i+'px)';  //字符串的连接
            for(let j=0;j<xxkimg.length;j++){
                xxkimg[j].style.display="none";
            }
            xxkimg[i].style.display="block";
        }
    }
    //
    // xxkbtn[0].onmouseover=function () {
    //     yidongt.style.transform="translateX(0)"
    // };
    // xxkbtn[1].onmouseover=function () {
    //     yidongt.style.transform="translateX(74px)"
    // };
    // xxkbtn[2].onmouseover=function () {
    //     yidongt.style.transform="translateX(148px)"
    // };
    // xxkbtn[3].onmouseover=function () {
    //     yidongt.style.transform="translateX(222px)"
    // };
    // xxkbtn[4].onmouseover=function () {
    //     yidongt.style.transform="translateX(296px)"
    // };



    //直播轮播图
    let zhibobox=$('.xpzb_tt')[0];
    let zhiboimg=$('.xxxtu');
    let zhiboleft=$('.ztz')[0];
    let zhiboright=$('.zty')[0];
    let zhibobtn=$('.ddd');
    let zhibon=-1;
    let zhibot;
    let zhiflag=true;
    let dd;
    console.log(zhibobox);
    zhibot=setInterval(zhibomove,2000);


    function zhibomove(type='right') {
        if(type=='right'){
            zhibon++;
            if(zhibon>=zhiboimg.length){
                zhibon=0
            }

        }
        if(type=='left'){
            zhibon--;
            if(zhibon<0){
                zhibon=zhiboimg.length-1;
            }
        }


        for(let i=0;i<zhiboimg.length;i++){
            zhiboimg[i].style.zIndex=1;
            zhibobtn[i].style.background="#fff"
        }
        zhiboimg[zhibon].style.zIndex=2;
        zhibobtn[zhibon].style.background="red";
        // zhiflag=true;
    }

                //轮播点
    for (let i=0;i<zhibobtn.length;i++){
        zhibobtn[i].onmouseover=function () {
            dd=setTimeout(function () {
                for(let j=0;j<zhibobtn.length;j++){
                    zhibobtn[j].style.background="#fff"
                    zhiboimg[j].style.zIndex=1;

                }
                zhibobtn[i].style.background="red";
                zhiboimg[i].style.zIndex=2;
                zhibon=i;
            },200)
        }
        zhibobtn[i].onmouseout=function () {
            clearInterval(dd);
        }
    }

    zhibobox.onmouseover=function () {
        clearInterval(zhibot);
    };

    zhibobox.onmouseout=function () {
        zhibot=setInterval(zhibomove,2000);
    }
    zhiboright.onmouseover=function () {
        clearInterval(zhibot);
    };
    zhiboleft.onmouseout=function () {
        zhibot=setInterval(zhibomove,2000);
    };


    zhiboright.onclick=function () {
        if(zhiflag){
            zhiflag=false;
            zhibomove("right");
        }else {
            zhiflag=true;
        }

    }
    zhiboleft.onclick=function () {
        if(zhiflag){
            zhiflag=false;
            zhibomove("left");
        }else {
            zhiflag=true;
        }

    }


    //倒计时部分
    let xiaoshi=$('.mb1')[0];
    let fenzhong=$('.mb1')[1];
    let miaozhong=$('.mb1')[2];
    let daot=setInterval(fndao,1000);
    function fndao() {
        let nowt=new Date();
        let h=nowt.getHours();
        let m=nowt.getMinutes();
        let s=nowt.getSeconds();
        xiaoshi.innerHTML=h;
        fenzhong.innerHTML=m;
        miaozhong.innerHTML=s;

    }


 /*   //商标轮播部分
    let shangbiaoimg1=$('.addlogo2')[0];
    let shangbiaoimg2=$('.addlogo3')[0];
    let shangbox=$('.shangbox')[0];
    console.log(shangbox)
    let shangt=setInterval(shangmove,2000)
    function shangmove() {
        let shangfirst=shangbox.firstElementChild;
        let shanglast=shangbox.lastElementChild;
        animate(shangfirst,{left:-573},500,function () {
            shangbox.appendChild(shangfirst);
            shangfirst.style.left="573px"
        })
        animate(shanglast,{left:0},500)
    }
*/


    //右边固定部分
    let gudingbtn=$('.gudingbtn');
    let huachu=$('.huachu');
    console.log(gudingbtn,huachu)

    for(let i=0;i<gudingbtn.length;i++){
        gudingbtn[i].onmouseover=function () {
            huachu[i].style.background='#C81623';
            huachu[i].style.display='block';
            animate(huachu[i],{left:-60},500)
        }
        gudingbtn[i].onmouseout=function () {
            huachu[i].style.background='#7A6E6E';
            animate(huachu[i],{left:0},500)
            huachu[i].style.display='none';
        }
    }





});