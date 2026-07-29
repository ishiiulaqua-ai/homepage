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
document.addEventListener('DOMContentLoaded', () => {
  // 業務実績のタブ切り替え制御
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 全てのボタンとコンテンツから active クラスを削除
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // クリックされたボタンと対応するコンテンツに active を付与
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
