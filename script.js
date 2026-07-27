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