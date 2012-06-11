javascript: (function () {
    var style = document.createElement('style');
    var styleDef = '';
    styleDef += '* { font-family: "HelveticaNeueLT Com 45 Lt", Arial !important; } ';
    styleDef += '* { font-size: 17px !important; } ';
    styleDef += '* { line-height: 1.4em !important; } ';
    styleDef += 'h1, h2, h3, h4, h5, h6, h1 > *, h2 > *, h3 > *, h4 > *, h5 > *, h6 > *, .title, .title > *, strong, em, b { font-family:"HelveticaNeueLT Com 65 Md", Arial !important } ';
    styleDef += 'h1, h1 > * { font-size: 32px !important; } ';
    styleDef += 'h2, h2 > * { font-size: 28px !important; } ';
    styleDef += 'h3, h3 > * { font-size: 24px !important; } ';
    styleDef += 'h4, h4 > * { font-size: 18px !important; } ';
    styleDef += 'pre, xmp, plaintext, listing, code { font-family: monospace !important; }';
    styleDef += 'pre, xmp, plaintext, listing, code { white-space: pre !important; }';
    style.innerHTML = styleDef;
    document.head.appendChild(style);
})();