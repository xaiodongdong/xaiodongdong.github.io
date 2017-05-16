// 设置cookie
function setCookie(key,value,time) {
    if(time){
        var date=new Date();
        date.setTime(date.getTime()+time);
        document.cookie=key+"="+value+";expires="+date.toGMTString();
        
      
    }
    else{
        document.cookie=key+"="+value;
    }
}
// 获取
function getCookie(name) {
    var cookie=document.cookie;
    var arr=cookie.split(";")
    var val;
    
    arr.forEach(function (v) {
        var arr=cookie.split(";")
    
        if(newarr[0]==name){
            val=newarr[1]
        }
    })
}
//删除
function delCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 1000);
    document.cookie = name = "=" + ";expries=" + date.toGMTString()
}
    