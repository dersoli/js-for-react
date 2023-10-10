import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

const $htmlBoardGame = BoardGame(6);

const $htmlPlayerName = PlayerName("Player 1");

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

$root.insertAdjacentHTML('afterbegin', $htmlPlayerName);