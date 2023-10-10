import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

const $htmlBoardGame = BoardGame(6);

const $htmlPlayer1Name = PlayerName("Player 1");
const $htmlPlayer2Name = PlayerName("Player 2");
$root.insertAdjacentHTML(
    'beforeend',
    `
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
        ${BoardGame(6)}
    `
    );