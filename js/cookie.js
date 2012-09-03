
/* eg 
 * delete: setCookie('lang', "", null, '/');
 * set: setCookie('lang', "en", 60*60*24*365, '/');
 */
function setCookie(c_name,value,exSec, path){
    var exdate=new Date();
    if( exSec == null){
        exdate.setTime(exdate.getTime()-(60*60*24));
    }else{
        exdate.setTime(exdate.getTime()+(exSec*1000));
    }
    var c_value=escape(value) + ("expires="+exdate.toUTCString());
    document.cookie = c_name + "=" +escape( value ) +
    ( ( exSec ) ? ";expires="+exdate.toUTCString() : "" ) +
    ( ( path ) ? ";path=" + path : "" );
}

//get cookie by name, return value
function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++){
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name){
            return unescape(y);
        }
    }
}