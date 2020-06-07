var close_button = document.getElementById("pop_up_close_button");

close_button.onclick = function() {
    var body = close_button.parentElement;
    var layout = body.parentElement;
    layout.parentNode.removeChild(layout);
}
