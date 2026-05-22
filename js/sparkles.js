(function () {
  var srcs = [
    '/wedding/images/text/sparkle1.svg',
    '/wedding/images/text/sparkle2.svg',
    '/wedding/images/text/sparkle3.png',
    '/wedding/images/text/sparkle4.png',
    '/wedding/images/text/sparkle5.png',
    '/wedding/images/text/sparkle6.png'
  ];

  var wrap = document.createElement('div');
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:0;overflow:hidden;';

  var placements = [
    [4,6],[18,82],[33,14],[47,91],[62,38],[76,70],[89,22],[11,55],
    [55,5],[28,48],[71,87],[42,62],[85,44],[7,77],[94,11],[60,29]
  ];

  var isMobile = window.innerWidth < 600;
  var count = isMobile ? 6 : placements.length;

  for (var i = 0; i < count; i++) {
    var img = document.createElement('img');
    img.src = srcs[i % 6];
    var size = 36 + Math.floor(Math.random() * 64);
    var rot  = Math.floor(Math.random() * 360);
    var op   = (0.36 + Math.random() * 0.18).toFixed(2);
    img.style.cssText =
      'position:absolute;' +
      'top:'    + placements[i][0] + '%;' +
      'left:'   + placements[i][1] + '%;' +
      'width:'  + size + 'px;' +
      'height:' + size + 'px;' +
      'transform:rotate(' + rot + 'deg);' +
      'opacity:' + op + ';';
    wrap.appendChild(img);
  }

  if (document.body) {
    document.body.insertBefore(wrap, document.body.firstChild);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.insertBefore(wrap, document.body.firstChild);
    });
  }
})();
