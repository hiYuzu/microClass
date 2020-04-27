var name = "";
function openFile() {
    document.getElementById("inputFile").click();
}
function handleFile(files) {
    name = files[0].name;
    document.getElementById("description").innerHTML = name;
}
function upload() {
    if (name != "") {
        if (name.endsWith(".mp4")) {
            alert("视频上传成功！");
        } else {
            alert("对不起，微课堂仅支持上传.mp4视频类型。")
        }
        name = "";
        document.getElementById("description").innerHTML = "点击图标选择视频";
    } else {
        alert("请选择视频！");
        openFile();
    }
}