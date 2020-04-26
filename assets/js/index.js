function login() {
    if ($("#user").val().trim() != "" && $("#pwd").val().trim() != "") {
        switch ($("#user").val().trim()) {
            case "teacher":
                if ($("#pwd").val().trim() == 111111) {
                    document.cookie = "teacher";
                    window.location.href = "home.html";
                } else {
                    $("#pwd").val("");
                    alert("密码错误！");
                }
                break;
            case "student":
                if ($("#pwd").val().trim() == 123456) {
                    document.cookie = "student";
                    window.location.href = "home.html";
                } else {
                    $("#pwd").val("");
                    alert("密码错误！");
                }
                break;
            default:
                alert("用户名不存在！");
                $("#user").val("");
                $("#pwd").val("");
                break;
        }
    }
}