document.addEventListener('DOMContentLoaded', function() {

    // 1. スマホ用ハンバーガーメニュー動作
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('is-open');
        });

        // リンククリック時にメニューを閉じる
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
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

});
