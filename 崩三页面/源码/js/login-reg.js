function setRegistered() {
    window.location.href = "register.html";
}

function setLogin() {
    window.location.href = "login.html";
}

var userreg = /^[A-Za-z0-9_-]{8,16}$/
function getIndex() {
    var user = document.getElementById('loginText')
    var pwd = document.getElementById('loginPwd')

    if (user.value == '' || userreg.test(user.value) == false) {
        alert('用户名不正确');
        user.value = ''
        user.focus();
        return false
    } else if (pwd.value == '' || userreg.test(pwd.value) == false) {
        alert('密码不正确');
        pwd.focus();
        return false
    } else {
        window.location.href = "index.html";
    }

}

function register() {
    var reguser = document.getElementById('regText')
    var regpwd = document.getElementById('regPwd')
    var reregpwd = document.getElementById('reregPwd')
    if (reguser.value == '' || userreg.test(reguser.value) == false) {
        alert('账号格式不对，只能使用字母、数字、下划线、短横线，且位数8到16位');
        reguser.focus();
        return false
    } else if (regpwd.value == '' || userreg.test(regpwd.value) == false) {
        alert('密码格式不正确，只能使用字母、数字、下划线、短横线，且位数8到16位');
        regpwd.focus();
        return false
    } else if (regpwd.value != reregpwd.value) {
        alert('两次输入密码不一致');
        reregpwd.focus();
        return false
    } else {
        show();
    }

}

function show() {
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block'; // 在注册成功后显示

    let countdown = 4;
    const count = document.getElementById('countdown');

    const countint = setInterval(function () {
        count.innerText = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countint);
            window.location.href = 'index.html'; // 在倒计时结束后重定向到所需的页面。
        }
    }, 1000);

    const btn1 = document.getElementById('proceed');
    btn1.addEventListener('click', function () {
        clearInterval(countint);
        window.location.href = 'index.html'; // 用户点击“确定”后立即重定向。
    });

    const btn2 = document.getElementById('cancel');
    btn2.addEventListener('click', function () {
        clearInterval(countint);
        confirmation.style.display = 'none'; // 用户点击“取消”后隐藏确认框。
    });
}













