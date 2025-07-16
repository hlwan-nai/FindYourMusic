// HTMLの読み込みが完了したら実行される処理
document.addEventListener('DOMContentLoaded', function() {

    /* ===== ハンバーガーメニューの処理 ===== */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    // ハンバーガーボタンが存在する場合のみ、処理を実行
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            // navMenuとハンバーガーボタン自体に 'active' クラスを付け外しする
            navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });
    }

    /* ===== Profileページのログイン/ログアウト処理 ===== */
    const loginForm = document.getElementById('login-form');
    const loginView = document.getElementById('login-view');
    const profileView = document.getElementById('profile-view');
    const logoutButton = document.getElementById('logout-button');

    // このページがProfileページであるかを確認 (必要な要素がすべて存在するかで判断)
    if (loginForm && loginView && profileView && logoutButton) {
        // ログインフォームが「送信」された時の処理
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // ページの再読み込みを防ぐ
            loginView.style.display = 'none';
            profileView.style.display = 'block';
        });

        // ログアウトボタンが「クリック」された時の処理
        logoutButton.addEventListener('click', function() {
            profileView.style.display = 'none';
            loginView.style.display = 'block';
        });
    }
});