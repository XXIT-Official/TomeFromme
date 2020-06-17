var close_button = document.getElementById("pop_up_close_button");

window.onload = function() {
    var popup_class = document.querySelector('.pop_up__layout');
    // 쿠키 확인 
    if (getCookie('popup_close') !== 'Y') { 
        popup_class.classList.remove('hidden'); 
    }
};

close_button.onclick = function() {
    var body = close_button.parentElement;
    var layout = body.parentElement;
    layout.parentNode.removeChild(layout);
    setCookie('popup_close', 'Y', 1);
};