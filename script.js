// スムーズスクロールの追加（オプション：メニューをクリックした時に滑らかに移動する）
document.querySelectorAll('.site-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // 同じページ内へのリンク（#で始まる）の場合のみ実行
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();

            // リンク先の要素を取得
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // スムーズにスクロール
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// スクロールに合わせて要素をふわっと表示させる（Intersection Observer）
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
