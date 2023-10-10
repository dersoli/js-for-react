import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import CardGame from "./src/components/CardGame";
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector('#root');

const $htmlCardGame = CardGame();

const $htmlPlayerName = PlayerName("Player 1")

console.log($htmlCardGame);
$root.insertAdjacentHTML('beforeend', $htmlCardGame);
$root.insertAdjacentHTML('afterbegin', $htmlPlayerName);