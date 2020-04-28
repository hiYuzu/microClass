$(function () {
    if (document.cookie != "") {
        document.getElementById("userName").innerHTML = "欢迎您，" + document.cookie;
    } else {
        window.location.href = "index.html";
    }
});
function searchVideo() {
    //TODO.. $("#videoName").val();
}
function course1() {
    //TODO..
    console.log("1");
}
function course2() {
    //TODO..
    console.log("2");
}
function course3() {
    //TODO..
    console.log("3");
}
function course4() {
    //TODO..
    console.log("4");
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