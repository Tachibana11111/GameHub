
const translations = {
  en: {
    pageTitle: "Game Hub",
    title: "Welcome to Game Hub",
    tetris: "Play Tetris",
    ticTacToe: "Play Tic Tac Toe",
    // exit: "Exit",
  },
  ja: {
    pageTitle: "ゲームハブ",
    title: "ゲームハブへようこそ",
    tetris: "テトリスをプレイ",
    ticTacToe: "三目並べをプレイ",
    // exit: "出口",
  },
  vi: {
    pageTitle: "Game Hub",
    title: "Chào mừng đến với Game Hub",
    tetris: "Chơi Tetris",
    ticTacToe: "Chơi Tic Tac Toe",
    // exit: "Thoát",
  },
  cn: {
    pageTitle: "游戏中心",
    title: "欢迎来到游戏中心",
    tetris: "玩俄罗斯方块",
    ticTacToe: "玩井字游戏",
    // exit: "出口",
  },
};

function setLanguage(lang) {
  document.title = translations[lang].pageTitle;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("tetris-button").innerText =
    translations[lang].tetris;
  document.getElementById("tic-tac-toe-button").innerText =
    translations[lang].ticTacToe;
}




