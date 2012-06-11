javascript: (function () {
    var style = document.createElement('style');
    var styleDef = '';
    styleDef += '.body700px { width: 700px; margin: 0 auto; border: 0; padding: 0 50px; } ';
    style.innerHTML = styleDef;
    document.head.appendChild(style);
    if (document.body.className.indexOf('body700px') === -1) {
        document.body.className += " body700px";
    } else {
        document.body.className = document.body.className.replace(/(?:^|\s)body700px(?!\S)/, '');
    }
})();