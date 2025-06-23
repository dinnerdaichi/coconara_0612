gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in").forEach((el) => {
  const isAbout = el.classList.contains('about');
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: isAbout ? 0.9 : 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 70%", // ビューポートの下から80%のところで発火
        toggleActions: "play none none none"
      }
    }
  );
});



gsap.utils.toArray(".char").forEach((el, i) => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      delay: i * 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 70%", // ビューポートの下から80%のところで発火
        toggleActions: "play none none none"
      }
    }
  );
});

document.getElementById('hamburger').addEventListener('click', function () {
    // ハンバーガーメニューのクラスをトグル
    document.querySelector('.menu-right').classList.toggle('open');
    // ハンバーガーのクロス用クラスをトグル
    document.body.classList.toggle('hamburger-active');
  });
  // menu-rightをクリックした時の処理
  document.querySelector('.menu-right').addEventListener('click', function () {
    // ハンバーガーメニューのクラスを閉じる
    this.classList.remove('open');
    // ハンバーガーのクロス用クラスも削除
    document.body.classList.remove('hamburger-active');
  });

  window.addEventListener('scroll', function () {
    const mainVisual = document.querySelector('.main-visual');
    const headerNavEns = document.querySelectorAll('.header__nav--en');
    if (!mainVisual || headerNavEns.length === 0) return;

    const mainVisualBottom = mainVisual.getBoundingClientRect().bottom + window.scrollY;
    headerNavEns.forEach(headerNavEn => {
      if (window.scrollY > mainVisualBottom - 75) {
        headerNavEn.classList.add('color-change');
      } else {
        headerNavEn.classList.remove('color-change');
      }
    });
  });