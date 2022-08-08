var back = document.querySelector('video');
var body = document.querySelector('body')
var i = 100;
var n = 0;
back.addEventListener('mouseover', function () {
    s1 = setInterval(function () {
        i += 0.1;
        n -= 0.1;
        back.style.width = (i) + '%';
        back.style.height = (i) + '%';
        back.style.top = (n) / 2 + '%';
        back.style.left = (n) / 2 + '%';
        if (i >= 110) {
            clearInterval(s1);
        }
    }, 1)
})
back.addEventListener('mouseout', function () {

    s2 = setInterval(function () {
        i -= 0.1;
        n += 0.1;
        back.style.width = i + '%';
        back.style.height = i + '%';
        back.style.top = (n) / 2 + '%';
        back.style.left = (n) / 2 + '%';
        if (i <= 100) {
            clearInterval(s2);
        }
    })
})
var zh = document.querySelector('.txt');
var mm = document.querySelector('.txt');
function login() {
    if (zh.value == "" || mm.value == "") {
        alert("账号或密码不能为空");
        return false;
    }
    else if (zh.value != "123" || mm.value != "123") {
        alert('账号或密码错误（可选择游客登陆）');
        return false;
    }
}
var con = document.querySelector('.con');
function loadoff() {
    con.style.display = "none";
}
function loadon() {
    con.style.display = "flex";
}
window.addEventListener('load', function () {
    loadon();
    this.setTimeout(loadoff, 3000);
})