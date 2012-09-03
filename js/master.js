function exist(myVar){
    if(myVar !=null && myVar !="" && myVar != undefined){
        return true;
    }
    return false;
}

function goBack(){
    history.back();
    return false;
}
$(function(){
    //replace with default img when can't get target img
    $("img").error(function () { 
        $(this).attr("src", "image/default_imageMissing.png");
    });
    
    //esc keypress
    /*$(document).keypress(function(e){
        if(e.which == 27){
        }
    });*/

})
