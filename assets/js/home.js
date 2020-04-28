$(function () {
    if (document.cookie != "") {
        document.getElementById("userName").innerHTML = "欢迎您，" + document.cookie;
    } else {
        window.location.href = "index.html";
    }
});
function searchVideo() {
    var words = $("#videoName").val();
    var wapReg = RegExp(/职场|提升|技能/);
    var paoReg = RegExp(/产品|运营|设计/);
    var padReg = RegExp(/java|JAVA|c|C|编程|开发/);
    var lhap = RegExp(/文学|历史|哲学|文史/);
    if (wapReg.test(words)) {
        window.document.location = "videoPage/video/video.html?v=0";
    } else if (paoReg.test(words)) {
        window.document.location = "videoPage/video/video.html?v=1";
    } else if (padReg.test(words)) {
        window.document.location = "videoPage/video/video.html?v=2";
    } else if (lhap.test(words)) {
        window.document.location = "videoPage/video/video.html?v=3";
    } else {
        alert("抱歉，没有找到您像搜索的视频");
    }
}
function course1() {
    window.open("videoPage/type/wap.html", "_blank");
}
function course2() {
    window.open("videoPage/type/lhap.html", "_blank");
}
function course3() {
    window.open("videoPage/type/pad.html", "_blank");
}
function course4() {
    window.open("videoPage/type/pao.html", "_blank");
}
function personCenter() {
    if (document.cookie == "teacher") {
        window.location.href = "personalCenter/teacher.html";
    } else if (document.cookie == "student") {
        window.location.href = "personalCenter/student.html";
    } else {
        alert("登录已失效");
        window.location.href = "index.html";
    }
}