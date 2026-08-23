/* राजदीप ज्योतिष — interactions */
(function () {
  'use strict';

  var WA = '919825304565';

  /* =====================================================================
     SERVICE DATA (bilingual) — drives cards + modal
     ===================================================================== */
  var SERVICES = [
    { id:'love', icon:'icon-heart',
      hi:{ title:'प्रेम समस्या', short:'टूटे रिश्तों को फिर से जोड़ना, प्रेम में सफलता एवं ग़लतफ़हमियों का निवारण।',
        long:'प्रेम जीवन की उलझनें अक्सर मन को गहरी पीड़ा देती हैं। ज्योतिषीय विश्लेषण एवं सिद्ध उपायों से टूटे रिश्तों में फिर से प्रेम और विश्वास लौटाया जाता है।',
        points:['बिछड़े प्रेमी/प्रेमिका को पुनः मिलाना','रिश्तों की ग़लतफ़हमियों एवं दूरियों का निवारण','प्रेम में सफलता एवं स्थायित्व हेतु उपाय'] },
      en:{ title:'Love Problems', short:'Reuniting broken relationships, success in love and clearing misunderstandings.',
        long:'Troubles in love often cause the deepest pain. Through astrological analysis and proven remedies, love and trust are restored to broken relationships.',
        points:['Reuniting separated partners','Removing misunderstandings and distance','Remedies for lasting success in love'] } },

    { id:'marriage', icon:'icon-rings',
      hi:{ title:'लव मैरिज', short:'मनपसंद विवाह एवं इंटर-कास्ट मैरिज में आने वाली सभी बाधाओं का समाधान।',
        long:'मनपसंद जीवनसाथी से विवाह में आने वाली पारिवारिक एवं सामाजिक बाधाओं को दूर कर, परिवार की सहमति एवं शुभ विवाह का मार्ग प्रशस्त किया जाता है।',
        points:['इंटर-कास्ट एवं मनपसंद विवाह में सफलता','परिवार की सहमति हेतु उपाय','विवाह में देरी एवं बाधाओं का निवारण'] },
      en:{ title:'Love Marriage', short:'Solutions to every obstacle in a desired or inter-caste marriage.',
        long:'Family and social obstacles in marrying the partner of your choice are removed, opening the path to family approval and an auspicious marriage.',
        points:['Success in inter-caste & desired marriage','Remedies to win family approval','Removing delays and obstacles in marriage'] } },

    { id:'vashikaran', icon:'icon-spark',
      hi:{ title:'वशीकरण', short:'मनचाहे व्यक्ति को अपने वश में करने हेतु शक्तिशाली एवं सुरक्षित उपाय।',
        long:'प्राचीन तांत्रिक विद्या पर आधारित शक्तिशाली एवं पूर्णतः सुरक्षित वशीकरण उपायों से मनचाहे व्यक्ति का मन जीता जाता है — बिना किसी को हानि पहुँचाए।',
        points:['मनचाहे व्यक्ति का प्रेम एवं आकर्षण','महा मोहिनी वशीकरण विशेषज्ञ','पूर्णतः गोपनीय एवं सुरक्षित प्रयोग'] },
      en:{ title:'Vashikaran', short:'Powerful and safe remedies to win over the person you desire.',
        long:'Rooted in ancient tantric knowledge, these powerful yet completely safe vashikaran remedies win the heart of the desired person — without harming anyone.',
        points:['Love and attraction of the desired person','Maha Mohini Vashikaran specialist','Fully confidential and safe practice'] } },

    { id:'dispute', icon:'icon-family',
      hi:{ title:'पति-पत्नी विवाद', short:'दांपत्य जीवन के मतभेद, सौतन समस्या एवं पारिवारिक कलह का शांतिपूर्ण निवारण।',
        long:'दांपत्य जीवन में आई कड़वाहट, मतभेद एवं तीसरे व्यक्ति के हस्तक्षेप को दूर कर, घर में फिर से प्रेम, शांति एवं समझ स्थापित की जाती है।',
        points:['पति-पत्नी के बीच प्रेम एवं समझ','सौतन एवं तीसरे व्यक्ति की समस्या','सास-बहू एवं पारिवारिक कलह का निवारण'] },
      en:{ title:'Husband–Wife Disputes', short:'Peaceful resolution of marital discord, third-party problems and family conflict.',
        long:'Bitterness, differences and interference from a third person are removed, restoring love, peace and understanding within the home.',
        points:['Love and understanding between spouses','Third-person / rival interference','Resolving family and in-law conflicts'] } },

    { id:'business', icon:'icon-briefcase',
      hi:{ title:'व्यापार एवं करियर', short:'व्यापार में उन्नति, नौकरी में सफलता एवं आर्थिक बाधाओं का समाधान।',
        long:'व्यापार में रुकावट, आर्थिक हानि एवं करियर की अनिश्चितता के ज्योतिषीय कारणों का विश्लेषण कर, उन्नति एवं स्थायी समृद्धि हेतु प्रभावी उपाय दिए जाते हैं।',
        points:['व्यापार में उन्नति एवं धन वृद्धि','नौकरी एवं पदोन्नति में सफलता','आर्थिक बाधा एवं कर्ज़ से मुक्ति'] },
      en:{ title:'Business & Career', short:'Growth in business, success at work and solutions to financial obstacles.',
        long:'The astrological causes of business blockages, financial loss and career uncertainty are analysed, and effective remedies are given for growth and lasting prosperity.',
        points:['Growth in business and increase in wealth','Success in job and promotions','Relief from financial obstacles and debt'] } },

    { id:'court', icon:'icon-gavel',
      hi:{ title:'कोर्ट-कचहरी', short:'कानूनी मामलों, कोर्ट केस एवं शत्रु बाधा से विजय हेतु प्रभावी उपाय।',
        long:'लंबे समय से चल रहे कोर्ट केस, कानूनी उलझनों एवं शत्रुओं की साज़िश से विजय दिलाने हेतु सिद्ध ज्योतिषीय उपाय एवं मार्गदर्शन।',
        points:['कोर्ट केस में विजय हेतु उपाय','शत्रु बाधा एवं साज़िश से रक्षा','कानूनी मामलों में अनुकूल परिणाम'] },
      en:{ title:'Court Cases', short:'Effective remedies for victory in legal matters, court cases and against enemies.',
        long:'Proven astrological remedies and guidance to secure victory in long-running court cases, legal tangles and against the conspiracies of enemies.',
        points:['Remedies for victory in court cases','Protection from enemies and conspiracies','Favourable outcomes in legal matters'] } },

    { id:'santan', icon:'icon-baby',
      hi:{ title:'संतान सुख', short:'निःसंतान दंपत्तियों हेतु संतान प्राप्ति एवं संतान संबंधी समस्याओं का समाधान।',
        long:'संतान प्राप्ति में आ रही बाधाओं का ज्योतिषीय निवारण एवं संतान के स्वास्थ्य, संस्कार तथा भविष्य से जुड़ी चिंताओं का समाधान।',
        points:['निःसंतान दंपत्तियों हेतु संतान प्राप्ति','संतान के स्वास्थ्य एवं भविष्य हेतु उपाय','संतान से मतभेद एवं चिंता का निवारण'] },
      en:{ title:'Childbirth & Progeny', short:'Blessings of a child for childless couples and solutions to progeny-related concerns.',
        long:'Astrological remedies for obstacles in conceiving, along with solutions to worries about a child’s health, values and future.',
        points:['Blessings of a child for childless couples','Remedies for a child’s health and future','Resolving differences and worries about children'] } },

    { id:'health', icon:'icon-health',
      hi:{ title:'स्वास्थ्य समस्या', short:'लगातार बनी रहने वाली बीमारियों एवं मानसिक अशांति हेतु आध्यात्मिक उपाय।',
        long:'बार-बार होने वाली या लंबे समय से चली आ रही बीमारियों, मानसिक तनाव एवं नकारात्मक ऊर्जा के प्रभाव से मुक्ति हेतु आध्यात्मिक उपाय एवं मार्गदर्शन।',
        points:['पुरानी एवं असाध्य बीमारियों हेतु उपाय','मानसिक तनाव एवं अशांति का निवारण','नकारात्मक ऊर्जा एवं नज़र दोष से रक्षा'] },
      en:{ title:'Health Problems', short:'Spiritual remedies for persistent illness and mental unrest.',
        long:'Spiritual remedies and guidance for relief from recurring or long-standing illness, mental stress and the effects of negative energy.',
        points:['Remedies for chronic and stubborn illness','Relief from mental stress and unrest','Protection from negative energy and evil eye'] } },

    { id:'vaastu', icon:'icon-home',
      hi:{ title:'वास्तु शास्त्र', short:'घर एवं व्यापार स्थल के वास्तु दोष का निवारण एवं सुख-समृद्धि हेतु मार्गदर्शन।',
        long:'घर, दुकान एवं कारखाने के वास्तु दोषों का विश्लेषण कर, बिना तोड़-फोड़ के सरल उपायों द्वारा सुख, शांति एवं समृद्धि का मार्ग बताया जाता है।',
        points:['घर एवं व्यापार स्थल का वास्तु परामर्श','बिना तोड़-फोड़ सरल वास्तु उपाय','सुख-शांति एवं समृद्धि हेतु मार्गदर्शन'] },
      en:{ title:'Vaastu Shastra', short:'Removing Vaastu defects in home and workplace, guidance for peace and prosperity.',
        long:'Vaastu defects in the home, shop and factory are analysed, and the path to happiness, peace and prosperity is shown through simple remedies — without demolition.',
        points:['Vaastu consultation for home and business','Simple Vaastu remedies without demolition','Guidance for peace, harmony and prosperity'] } },

    { id:'kundli', icon:'icon-scroll',
      hi:{ title:'कुंडली एवं दोष निवारण', short:'जन्म कुंडली विश्लेषण, मांगलिक दोष, कालसर्प एवं साढ़ेसाती का निवारण।',
        long:'जन्म कुंडली का गहन विश्लेषण कर ग्रह दशाओं, मांगलिक दोष, कालसर्प दोष एवं साढ़ेसाती के प्रभावों को समझकर उपयुक्त पूजा एवं उपाय बताए जाते हैं।',
        points:['विस्तृत जन्म कुंडली विश्लेषण','मांगलिक, कालसर्प एवं साढ़ेसाती दोष निवारण','ग्रह शांति पूजा एवं रत्न परामर्श'] },
      en:{ title:'Kundli & Dosh Nivaran', short:'Birth-chart analysis and remedies for Manglik, Kaal Sarp and Sade Sati.',
        long:'Through in-depth analysis of the birth chart, the effects of planetary periods, Manglik dosh, Kaal Sarp dosh and Sade Sati are understood, and suitable pujas and remedies are prescribed.',
        points:['Detailed birth-chart (kundli) analysis','Remedies for Manglik, Kaal Sarp & Sade Sati','Graha Shanti puja and gemstone advice'] } }
  ];

  function svgUse(id){ return '<svg viewBox="0 0 24 24" width="28" height="28"><use href="#'+id+'"/></svg>'; }

  /* ---- Render service cards ---- */
  var grid = document.getElementById('servicesGrid');
  if (grid) {
    SERVICES.forEach(function (s, i) {
      var btn = document.createElement('button');
      btn.className = 'service-card reveal';
      btn.type = 'button';
      btn.setAttribute('data-id', s.id);
      btn.innerHTML =
        '<span class="svc-icon">'+svgUse(s.icon)+'</span>' +
        '<h3 class="svc-title"></h3>' +
        '<p class="svc-short"></p>' +
        '<span class="svc-more"><span class="svc-more-t"></span> →</span>';
      grid.appendChild(btn);
      btn.addEventListener('click', function () { openModal(s); });
    });
  }

  /* =====================================================================
     LANGUAGE TOGGLE (Hindi default, English optional)
     ===================================================================== */
  var currentLang = localStorage.getItem('rj-lang') || 'hi';
  var i18nEls = document.querySelectorAll('.i18n');

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    i18nEls.forEach(function (el) {
      if (!el.hasAttribute('data-hi')) el.setAttribute('data-hi', el.innerHTML.trim());
      el.innerHTML = (lang === 'en') ? (el.getAttribute('data-en') || el.getAttribute('data-hi')) : el.getAttribute('data-hi');
    });
    // placeholders
    document.querySelectorAll('[data-ph-hi]').forEach(function (el) {
      el.placeholder = (lang === 'en') ? el.getAttribute('data-ph-en') : el.getAttribute('data-ph-hi');
    });
    // service cards
    renderServiceText(lang);
    localStorage.setItem('rj-lang', lang);
  }

  function renderServiceText(lang) {
    document.querySelectorAll('.service-card').forEach(function (card) {
      var s = SERVICES.filter(function (x){ return x.id === card.getAttribute('data-id'); })[0];
      if (!s) return;
      var d = s[lang];
      card.querySelector('.svc-title').textContent = d.title;
      card.querySelector('.svc-short').textContent = d.short;
      card.querySelector('.svc-more-t').textContent = (lang === 'en') ? 'Learn more' : 'अधिक जानें';
    });
  }

  var langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', function () {
    applyLang(currentLang === 'hi' ? 'en' : 'hi');
  });

  /* =====================================================================
     THEME TOGGLE (night default, day optional)
     ===================================================================== */
  var savedTheme = localStorage.getItem('rj-theme') || 'dark';
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', t === 'light' ? '#faf6ec' : '#0b1437');
    localStorage.setItem('rj-theme', t);
  }
  applyTheme(savedTheme);
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme');
    applyTheme(cur === 'light' ? 'dark' : 'light');
  });

  /* =====================================================================
     SERVICE MODAL
     ===================================================================== */
  var modal = document.getElementById('serviceModal');
  var modalImg = document.getElementById('modalImg');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalPoints = document.getElementById('modalPoints');
  var modalWa = document.getElementById('modalWa');
  var modalCall = document.getElementById('modalCall');
  var lastFocused = null;

  function openModal(s) {
    var d = s[currentLang];
    modalImg.src = 'images/services/' + s.id + '.jpg';
    modalImg.alt = d.title;
    modalTitle.textContent = d.title;
    modalDesc.textContent = d.long;
    modalPoints.innerHTML = '';
    d.points.forEach(function (p) {
      var li = document.createElement('li'); li.textContent = p; modalPoints.appendChild(li);
    });
    var waText = (currentLang === 'en')
      ? 'Namaste Guruji, I need guidance regarding: ' + d.title
      : 'नमस्ते गुरुजी, मुझे ' + d.title + ' के बारे में मार्गदर्शन चाहिए।';
    modalWa.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(waText);
    modalWa.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-whatsapp"/></svg> ' + (currentLang === 'en' ? 'Ask on WhatsApp' : 'व्हाट्सएप पर पूछें');
    modalCall.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-phone"/></svg> ' + (currentLang === 'en' ? 'Call' : 'कॉल करें');
    lastFocused = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').focus();
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  if (modal) {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
  }

  /* =====================================================================
     TESTIMONIALS SLIDER
     ===================================================================== */
  var track = document.getElementById('reviewTrack');
  var dotsWrap = document.getElementById('reviewDots');
  if (track) {
    var slides = Array.prototype.slice.call(track.children);
    var index = 0;

    // Half-star ratings, split evenly: 5, 4.5, 4 (two each)
    var RATINGS = [5, 4.5, 5, 4, 4.5, 4];
    slides.forEach(function (card, i) {
      var el = card.querySelector('.stars');
      if (!el) return;
      var r = RATINGS[i % RATINGS.length];
      el.innerHTML =
        '<span class="star-wrap">' +
          '<span class="s-bg">★★★★★</span>' +
          '<span class="s-fg" style="width:' + (r / 5 * 100) + '%">★★★★★</span>' +
        '</span>' +
        '<span class="rating-num">' + r.toFixed(1) + '</span>';
      el.setAttribute('aria-label', r + ' / 5');
    });

    function perView() {
      var w = window.innerWidth;
      if (w <= 760) return 1;
      if (w <= 1024) return 2;
      return 3;
    }
    function maxIndex() { return Math.max(0, slides.length - perView()); }

    function go(i) {
      index = Math.min(Math.max(i, 0), maxIndex());
      var card = slides[0];
      var step = card.getBoundingClientRect().width + 22; // width + margin
      track.style.transform = 'translateX(' + (-index * step) + 'px)';
      updateDots();
    }
    function updateDots() {
      var pages = maxIndex() + 1;
      dotsWrap.innerHTML = '';
      for (var p = 0; p < pages; p++) {
        (function (p) {
          var b = document.createElement('button');
          b.setAttribute('aria-label', 'slide ' + (p + 1));
          if (p === index) b.className = 'active';
          b.addEventListener('click', function () { go(p); });
          dotsWrap.appendChild(b);
        })(p);
      }
    }

    document.getElementById('revNext').addEventListener('click', function () {
      go(index >= maxIndex() ? 0 : index + 1);
    });
    document.getElementById('revPrev').addEventListener('click', function () {
      go(index <= 0 ? maxIndex() : index - 1);
    });

    // touch / swipe
    var startX = 0, dragging = false;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (!dragging) return; dragging = false;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { if (dx < 0) go(index + 1); else go(index - 1); }
    }, { passive: true });

    var resizeT;
    window.addEventListener('resize', function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(function () { go(Math.min(index, maxIndex())); }, 150);
    });

    // autoplay — advance right every 3 seconds (pause on hover / touch)
    var timer = null;
    function startAuto() { stopAuto(); timer = setInterval(function () { go(index >= maxIndex() ? 0 : index + 1); }, 3000); }
    function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }
    var sliderEl = document.getElementById('reviewSlider');
    sliderEl.addEventListener('mouseenter', stopAuto);
    sliderEl.addEventListener('mouseleave', startAuto);
    sliderEl.addEventListener('touchstart', stopAuto, { passive: true });
    startAuto();

    go(0);
    setTimeout(function () { go(0); }, 400); // recalc after fonts load
  }

  /* =====================================================================
     MISC — year, navbar, menu, reveals, counters, form
     ===================================================================== */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navbar = document.getElementById('navbar');
  function onScroll() { navbar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function closeMenu() { links.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  function armReveals() {
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 0.08 + 's'; io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    }
  }

  var counters = document.querySelectorAll('.trust-num');
  var counted = false;
  function runCounters() {
    if (counted) return;
    var trust = document.getElementById('trust');
    if (!trust) return;
    if (trust.getBoundingClientRect().top < window.innerHeight - 80) {
      counted = true;
      counters.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-count'), 10) || 0, t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1400, 1);
          el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step); else el.textContent = target;
        }
        requestAnimationFrame(step);
      });
    }
  }
  window.addEventListener('scroll', runCounters, { passive: true });

  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('f-name').value || '').trim();
      var phone = (document.getElementById('f-phone').value || '').trim();
      var problem = document.getElementById('f-problem').value || '';
      var msg = (document.getElementById('f-msg').value || '').trim();
      var text = (currentLang === 'en')
        ? ('Namaste Guruji,\nName: ' + name + '\nPhone: ' + phone + '\nConcern: ' + problem + (msg ? '\nMessage: ' + msg : '') + '\n\nPlease guide me.')
        : ('नमस्ते गुरुजी,\nनाम: ' + name + '\nफ़ोन: ' + phone + '\nसमस्या: ' + problem + (msg ? '\nसंदेश: ' + msg : '') + '\n\nकृपया मार्गदर्शन करें।');
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank');
    });
  }

  /* ---- init ---- */
  renderServiceText(currentLang);
  applyLang(currentLang);
  armReveals();
  runCounters();
})();
