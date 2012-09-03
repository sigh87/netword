function addArticle(){
    $.post("/ajax/article_process.php", {
        a: "add",
        title: $('#title').val(),
        text: $('#text').val(),
        catid: $('#catid').val(),
        state: $('#state').val()
    }, function(msg){
        if(msg>0){
            appendErrmsg(lang.published);
            $('#title').val("");
            $('#text').val("");
        }
    });
}

function getArticleById(){
    $.post("/ajax/article_process.php", {
        a: "getById",
        id: 0
    }, function(msg){
        appendErrmsg(msg);
    });
}

function getArticleByTitle(){
    $.post("/ajax/article_process.php", {
        a: "getByTitle",
        title: ""
    }, function(msg){
        appendErrmsg(msg);
    });
}

function updateArticleById(){
    $.post("/ajax/article_process.php", {
        a: "update",
        id: 0
    }, function(msg){
        appendErrmsg(msg);
    });
}

function deleteArticleById(){
    $.post("/ajax/article_process.php", {
        a: "delete",
        id: 0
    }, function(msg){
        appendErrmsg(msg);
    });
}



$(function(){


})
