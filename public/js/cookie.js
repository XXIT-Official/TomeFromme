function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);

    var cookie_value = escape(value) + ((days == null) ? '' : '; expires =' + exdate.toUTCString() + '; SameSite=Strict');
    document.cookie = cookie_name + '=' + cookie_value;
}