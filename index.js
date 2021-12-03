let $menu = document.querySelector('.menu');
let $panel = document.querySelector('.panel');
let action = false;
let x = 0;
let x0 = 0;
let x1 = 0;
let save = -250;

$menu.addEventListener('mousedown', function(e) {
    x0 = e.clientX;
    action = true;
});

window.addEventListener('mouseup', function(e) {
    action = false;
    save = x;
    console.log(x);
    if (x >= -150 || x == 0) {
        $panel.style.cssText = 'transform: translateX(' + 0 + 'px)';

    } else {
        $panel.style.cssText = 'transform: translateX(' + -250 + 'px)';
        save = -250;
    }
});

window.addEventListener('mousemove', function(e) {
    if (action) {
        x1 = e.clientX;
        x = save + x1 - x0;
        x = (x >= 0) ? 0 : x;

        $panel.style.cssText = 'transform: translateX(' + x + 'px)';
    }
});