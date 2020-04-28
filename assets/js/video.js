var type = "";
var bv = "";
$(function () {
    type = decodeURI(window.location.search.substring(window.location.search.lastIndexOf('=') + 1));
    switch (type) {
        case "0":
            //职场与提升
            bv = "BV11E411c71J";
            break;
        case "1":
            //产品与运营
            bv = "BV1k441177ry";
            break;
        case "2":
            //编程与开发
            bv = "BV1ux411d75J";
            break;
        case "3":
            //文学、历史与哲学
            bv = "BV1Ft41197yo";
            break;
        default:
            break;
    }
    document.getElementById("video").src = "//player.bilibili.com/player.html?bvid=" + bv +"&page=1";
});
function addContent() {
    if ($("#content").val().trim() != "") {
        alert("谢谢，您的评论会在审核后添加");
        $("#content").val("");
    }
}

