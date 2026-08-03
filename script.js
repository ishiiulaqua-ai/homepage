document.addEventListener('DOMContentLoaded', function() {

    // 1. スマホハンバーガーメニュー制御
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('is-open');
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('is-open');
            });
        });
    }

    // 2. ページ内スムーズスクロール補正（ヘッダーの高さを考慮）
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 70; // ヘッダーの高さ(px)

    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== "#" && targetId !== "") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. ヒーロースライダー制御
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            currentSlide = (index + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoPlay() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoPlay() {
            clearInterval(slideInterval);
            startAutoPlay();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showSlide(idx);
                resetAutoPlay();
            });
        });

        startAutoPlay();
    }

});

document.addEventListener('DOMContentLoaded', () => {
  // 拠点ごとのGoogle Maps埋め込みURL（Embed URL）
  const mapUrls = {
    osaka: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.8684463581294!2d135.48887727628738!3d34.7589065800864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e4fcbbeaf499%3A0xe5fa43c83964a721!2z44CSNTY0LTAwNTEg5aSn6Ziq5bqc5ZC555Sw5biC6LGK5rSl55S6MTktMTI!5e0!3m2!1sja!2sjp!4v1710000000000",
    fukuoka: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.786524176461!2d130.3444453762417!3d33.5601831733458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354192fc0a7900bd%3A0x60c059fa2bd5bb61!2z44CSODE0LTAxNjQg56aP5bKh55yM56aP5bKh5biC55Sp6Imv5Yy66LOA6IyCNC3mgqA2LTI3!5e0!3m2!1sja!2sjp!4v1710000000000"
  };

  const mapIframe = document.getElementById('footer-map-iframe');
  const tabButtons = document.querySelectorAll('.map-tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const office = button.getAttribute('data-office');
      
      // iframeのURLを変更
      if (mapUrls[office]) {
        mapIframe.src = mapUrls[office];
      }

      // activeクラスの切り替え
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
