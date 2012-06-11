javascript: (function () {
    var style = document.createElement('style');
    var styleDef = ''; /*styleDef += 'body { width: 700px; } '; styleDef += 'body { margin: 0 auto; } '; styleDef += 'body { border: 0; } '; styleDef += 'body { padding: 0 50px; } ';*/
    styleDef += '* { font-family: Arial !important; } ';
    styleDef += '* { font-size: 15px !important; } ';
    styleDef += '* { line-height: 1.4em !important; } ';
    styleDef += 'h1, h2, h3, h4, h5, h6 { font-weight: bold !important; } ';
    styleDef += 'pre, xmp, plaintext, listing, code { display: block !important; }';
    styleDef += 'pre, xmp, plaintext, listing, code { font-family: monospace !important; }';
    styleDef += 'pre, xmp, plaintext, listing, code { white-space: pre !important; }';
    style.innerHTML = styleDef;
    document.head.appendChild(style);
})();