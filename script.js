const translations = {
  en: {
    pageTitle: "Game Hub",
    title: "Welcome to Game Hub",
    tetris: "Play Tetris",
    ticTacToe: "Play Tic Tac Toe",
    breakBricks: "Play BreakBricks (Beta)",
    cautionTitle: "Play on desktop browser for the best experience",
    exit: "Exit",
    closeGame: "Close Game",
    fullscreen: "Full Screen",
    
  },
  ja: {
    pageTitle: "ゲームハブ",
    title: "ゲームハブへようこそ",
    tetris: "テトリスをプレイ",
    ticTacToe: "三目並べをプレイ",
    breakBricks: "ブレイクレンガをプレイ(ベータ版)",
    cautionTitle: "デスクトップブラウザでプレイすると最高の体験ができる",
    exit: "出口",
    closeGame: "ゲームを閉じる",
    fullscreen: "全画面表示",
    
  },
  vi: {
    pageTitle: "Game Hub",
    title: "Chào mừng đến với Game Hub",
    tetris: "Chơi Xếp Hình",
    ticTacToe: "Chơi Cờ Caro",
    breakBricks: "Chơi Phá Gạch (Beta)",
    cautionTitle: "Chơi trên trình duyệt máy tính để có trải nghiệm tốt nhất",
    exit: "Thoát",
    closeGame: "Đóng Game",
    fullscreen: "Toàn Màn Hình",
    
  },
  cn: {
    pageTitle: "游戏中心",
    title: "欢迎来到游戏中心",
    tetris: "玩俄罗斯方块",
    ticTacToe: "玩井字游戏",
    breakBricks: "玩打砖块游戏（测试版）",
    cautionTitle: "在桌面浏览器上玩以获得最佳体验",
    exit: "出口",
    closeGame: "关闭游戏",
    fullscreen: "全屏",
    
  },
};


function setLanguage(lang) {
  
  document.title = translations[lang].pageTitle;

  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("tetris-button").innerText = translations[lang].tetris;
  document.getElementById("tic-tac-toe-button").innerText = translations[lang].ticTacToe;
  document.getElementById("break-bricks-button").innerText = translations[lang].breakBricks;
  document.getElementById("cautionTitle").innerText = translations[lang].cautionTitle;
  document.getElementById("exitButton").innerText = translations[lang].exit;
  document.getElementById("closeGameButton").innerText = translations[lang].closeGame;
  document.getElementById("fullscreenButton").innerText = translations[lang].fullscreen;
}


document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

function exitPage() {
  window.location.href = "https://google.com";
}


document.addEventListener('DOMContentLoaded', () => {
    
    setLanguage('en');

    const languageButtons = document.querySelectorAll('.language-switch button');
    const gameSelectButtons = document.querySelectorAll(".game-select-button"); // Các nút chọn game
    const gameSelectionDiv = document.querySelector(".game-selection");   // Div chứa các nút chọn game
    const gameDisplayDiv = document.querySelector(".game-display");       // Div chứa iframe và nút đóng
    const gameFrame = document.getElementById("gameFrame");               // Iframe để nhúng game
    const closeGameButton = document.getElementById("closeGameButton");   // Nút đóng game
    const exitButton = document.getElementById("exitButton");             // Nút Exit
    const fullscreenButton = document.getElementById("fullscreenButton");
    

    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.id));
    });

    exitButton.addEventListener('click', exitPage);

    gameSelectButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const gameUrl = this.dataset.gameUrl;
            gameFrame.src = gameUrl;         
            gameSelectionDiv.style.display = "none";
            gameDisplayDiv.style.display = "flex";
        });
    });
    
    closeGameButton.addEventListener("click", function () {
        gameFrame.src = "";
        gameDisplayDiv.style.display = "none";
        gameSelectionDiv.style.display = "block";
    });

    fullscreenButton.addEventListener("click", function() {
        if (gameFrame.requestFullscreen) {
            gameFrame.requestFullscreen();
        } else if (gameFrame.mozRequestFullScreen) { /* Firefox */
            gameFrame.mozRequestFullScreen();
        } else if (gameFrame.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            gameFrame.webkitRequestFullscreen();
        } else if (gameFrame.msRequestFullscreen) { /* IE/Edge */
            gameFrame.msRequestFullscreen();
        }
    });

    window.addEventListener('message', (event) => {
        
        if (event.origin === 'https://tachibana11111.github.io' || event.origin === 'https://tachibana11111.github.io/Tetris' || event.origin === 'https://tachibana11111.github.io/TicTacToeAdvanced' || event.origin === 'https://tachibana11111.github.io/BreakBricks') {
            if (event.data === 'closeGame') {
                
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else if (document.mozFullScreenElement) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitFullscreenElement) { /* Chrome, Safari & Opera */
                    document.webkitExitFullscreen();
                } else if (document.msFullscreenElement) { /* IE/Edge */
                    document.msExitFullscreen();
                }

                gameFrame.src = "";
                gameDisplayDiv.style.display = "none";
                gameSelectionDiv.style.display = "block";
            }
        }
    });
});

