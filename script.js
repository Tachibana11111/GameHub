
const translations = {
  en: {
    pageTitle: "Game Hub",
    title: "Welcome to Game Hub",
    tetris: "Play Tetris",
    ticTacToe: "Play Tic Tac Toe",
    breakBricks: "Play BreakBricks (Beta)",
    exit: "Exit",
  },
  ja: {
    pageTitle: "ゲームハブ",
    title: "ゲームハブへようこそ",
    tetris: "テトリスをプレイ",
    ticTacToe: "三目並べをプレイ",
    breakBricks: "ブレイクレンガをプレイ(ベータ版)",
    exit: "出口",
  },
  vi: {
    pageTitle: "Game Hub",
    title: "Chào mừng đến với Game Hub",
    tetris: "Chơi Tetris",
    ticTacToe: "Chơi Tic Tac Toe",
    breakBricks: "Chơi game Phá Gạch (Beta)",
    exit: "Thoát",
  },
  cn: {
    pageTitle: "游戏中心",
    title: "欢迎来到游戏中心",
    tetris: "玩俄罗斯方块",
    ticTacToe: "玩井字游戏",
    breakBricks: "玩打砖块游戏（测试版）",
    exit: "出口",
  },
};

function setLanguage(lang) {
  document.title = translations[lang].pageTitle;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("tetris-button").innerText =
    translations[lang].tetris;
  document.getElementById("tic-tac-toe-button").innerText =
    translations[lang].ticTacToe;
  document.getElementById("break-bricks-button").innerText =
    translations[lang].breakBricks;
  document.getElementById("exitButton").innerText =
    translations[lang].exit;
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

function exitPage() {
window.location.href = 'https://google.com';
}




