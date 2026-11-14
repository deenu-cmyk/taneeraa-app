/* Taneeraa hero slider — 2 slides. Self-injecting: add ONE line before </body> in index.html:
   <script src="hero-slider.js"></script>
   Images: assets/slide-earrings.jpg, assets/slide-jar.jpg */
(function () {
  var css = `
  .hs{position:relative;background:linear-gradient(135deg,#FFF3EE,#F7E3DE 60%,#F4D9D3);padding:22px 0 8px}
  .hs-wrap{max-width:1280px;margin:0 auto;padding:0 20px}
  .hs-frame{position:relative;border-radius:26px;overflow:hidden;box-shadow:0 22px 50px rgba(120,60,70,.18);background:#FBEDE8}
  .hs-track{display:flex;transition:transform .8s cubic-bezier(.2,.7,.2,1);will-change:transform}
  .hs-slide{flex:0 0 100%;min-height:460px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:20px;padding:34px 70px;position:relative}
  .hs-slide.s1{background:radial-gradient(500px 300px at 80% 20%,rgba(255,255,255,.8),transparent 65%),linear-gradient(120deg,#F9E6E1,#F2C9C6)}
  .hs-slide.s2{background:radial-gradient(500px 300px at 20% 20%,rgba(255,255,255,.8),transparent 65%),linear-gradient(240deg,#F6E7E4,#E8D3DD)}
  .hs-copy{text-align:center;color:#3B1F2B}
  .hs-kicker{font-family:'Cormorant Garamond',serif;font-size:26px;line-height:1.25;margin-bottom:16px}
  .hs-badge{display:inline-block;background:linear-gradient(150deg,#6B2D4F,#8E3B63);border-radius:22px;padding:14px 34px 12px;color:#F4D9A8;box-shadow:0 14px 30px rgba(107,45,79,.35);margin-bottom:18px}
  .hs-badge small{display:block;font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:700;letter-spacing:.08em}
  .hs-badge b{display:block;font-family:'Cormorant Garamond',serif;font-size:84px;line-height:.95;font-weight:700}
  .hs-badge b sup{font-size:36px;vertical-align:top;position:relative;top:10px}
  .hs-badge span{display:block;background:linear-gradient(90deg,#C9A24D,#F1D58A);color:#3B1F2B;font-weight:600;font-size:13px;padding:5px 14px;border-radius:0 0 14px 14px;margin:8px -34px -12px}
  .hs-title{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:54px;line-height:1.05;margin-bottom:12px}
  .hs-title i{display:block;font-size:46px;color:#B0606C}
  .hs-sub{font-size:16px;color:#5E4350;max-width:400px;margin:0 auto 22px}
  .hs-cta{display:inline-block;background:#4A2B38;color:#FFF3EE;font-size:13px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;padding:14px 30px;border-radius:6px;border:none;cursor:pointer;font-family:'Jost',sans-serif;transition:transform .2s,background .2s}
  .hs-cta:hover{background:#2E1822;transform:translateY(-2px)}
  .hs-note{display:block;margin-top:12px;font-size:12.5px;color:#85707A}
  .hs-img{display:flex;justify-content:center}
  .hs-img img{width:100%;max-width:400px;aspect-ratio:1/1;object-fit:cover;border-radius:50% 50% 24px 24px / 38% 38% 24px 24px;border:6px solid #fff;box-shadow:0 24px 50px rgba(90,40,60,.28)}
  .hs-slide.s2 .hs-img img{border-radius:24px 24px 50% 50% / 24px 24px 38% 38%}
  .hs-slide.s2 .hs-img{order:-1}
  .hs-arrow{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;border:none;background:rgba(255,255,255,.88);color:#4A2B38;cursor:pointer;display:grid;place-items:center;z-index:3;box-shadow:0 6px 16px rgba(74,43,56,.18);transition:background .2s}
  .hs-arrow:hover{background:#fff}
  .hs-arrow svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
  .hs-prev{left:14px}.hs-next{right:14px}
  .hs-dots{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:8px;z-index:3}
  .hs-dots button{width:10px;height:10px;border-radius:10px;border:none;background:rgba(74,43,56,.3);cursor:pointer;padding:0;transition:width .3s,background .3s}
  .hs-dots button.on{width:28px;background:#4A2B38}
  .hs :focus-visible{outline:2px solid #B0606C;outline-offset:3px}
  @media(max-width:820px){
    .hs-slide{grid-template-columns:1fr;padding:22px 20px 52px;gap:14px;min-height:0}
    .hs-slide .hs-img,.hs-slide.s2 .hs-img{order:-1}
    .hs-img img{max-width:240px}
    .hs-title{font-size:36px}.hs-title i{font-size:32px}
    .hs-kicker{font-size:20px;margin-bottom:10px}
    .hs-badge b{font-size:60px}.hs-badge small{font-size:18px}
    .hs-arrow{width:38px;height:38px;top:120px}
    .hs-prev{left:8px}.hs-next{right:8px}
  }
  @media(prefers-reduced-motion:reduce){.hs-track{transition:none}}`;

  var arrowL = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
  var arrowR = '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>';

  var html = `
  <div class="hs-wrap">
   <div class="hs-frame" id="hsFrame" aria-roledescription="carousel" aria-label="Featured offers">
    <div class="hs-track" id="hsTrack">

     <div class="hs-slide s1" aria-label="Slide 1 of 2">
       <div class="hs-copy">
         <div class="hs-kicker">The festive season is here —<br>treat yourself to something special!</div>
         <div class="hs-badge"><small>EXTRA</small><b>10<sup>%</sup></b><span>Off on your first order</span></div>
         <div><button class="hs-cta" type="button" data-go="products">Shop Now</button>
         <span class="hs-note">Use code <b>FEST</b> at checkout</span></div>
       </div>
       <div class="hs-img"><img src="assets/slide-earrings.jpg" alt="Handmade gold-finish earrings with pearl drops"></div>
     </div>

     <div class="hs-slide s2" aria-label="Slide 2 of 2">
       <div class="hs-img"><img src="assets/slide-jar.jpg" alt="Glass jar filled with 20 handmade jewellery pieces"></div>
       <div class="hs-copy">
         <div class="hs-kicker">Serving new looks &amp; festive feels!</div>
         <h2 class="hs-title">Jewellery Jar<i>20 pieces in one jar</i></h2>
         <p class="hs-sub">Twenty different handpicked pieces — pearls, charms, hearts and flowers — packed in a gift-ready jar.</p>
         <button class="hs-cta" type="button" data-go="Jewellery Jars">Shop Jewellery Jars</button>
       </div>
     </div>

    </div>
    <button class="hs-arrow hs-prev" type="button" aria-label="Previous slide">${arrowL}</button>
    <button class="hs-arrow hs-next" type="button" aria-label="Next slide">${arrowR}</button>
    <div class="hs-dots" id="hsDots"><button type="button" class="on" aria-label="Go to slide 1"></button><button type="button" aria-label="Go to slide 2"></button></div>
   </div>
  </div>`;

  var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
  var sec = document.createElement('section'); sec.className = 'hs'; sec.id = 'heroSlider'; sec.innerHTML = html;
  // Jar slide shows first
  var tr = sec.querySelector('#hsTrack');
  tr.insertBefore(tr.querySelector('.s2'), tr.querySelector('.s1'));
  tr.querySelector('.s2').setAttribute('aria-label', 'Slide 1 of 2');
  tr.querySelector('.s1').setAttribute('aria-label', 'Slide 2 of 2');
  var home = document.getElementById('home');
  home.parentNode.insertBefore(sec, home);   // slider sits above the existing hero

  var track = sec.querySelector('#hsTrack'), dots = sec.querySelectorAll('#hsDots button'), frame = sec.querySelector('#hsFrame');
  var i = 0, n = 2, timer;
  function go(k) {
    i = (k + n) % n;
    track.style.transform = 'translateX(' + (-100 * i) + '%)';
    dots.forEach(function (d, j) { d.classList.toggle('on', j === i); });
  }
  function play() { stop(); if (!matchMedia('(prefers-reduced-motion:reduce)').matches) timer = setInterval(function () { go(i + 1); }, 5500); }
  function stop() { clearInterval(timer); }
  sec.querySelector('.hs-prev').onclick = function () { go(i - 1); play(); };
  sec.querySelector('.hs-next').onclick = function () { go(i + 1); play(); };
  dots.forEach(function (d, j) { d.onclick = function () { go(j); play(); }; });
  frame.addEventListener('mouseenter', stop); frame.addEventListener('mouseleave', play);
  var sx = null;
  frame.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; stop(); }, { passive: true });
  frame.addEventListener('touchend', function (e) {
    if (sx !== null) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); }
    sx = null; play();
  });
  sec.querySelectorAll('[data-go]').forEach(function (b) {
    b.onclick = function () {
      var t = b.getAttribute('data-go');
      if (t === 'products') { document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }
      else if (window.filterByCategory) { window.filterByCategory(t); }
      else { document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }
    };
  });
  play();
})();
