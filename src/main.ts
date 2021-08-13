import Apple from './components/Apple';
import Background from './components/Background';
import Snake from './components/Snake';
import Score from './components/Score';
import GameOver from './components/GameOver';
import Overlay from './components/Overlay';
import Game from './framework/Game';
import Tiles from './models/Tiles';
import GameController from './components/GameController';
import GameScene from './framework/GameScene';

const tiles: Tiles = {
    width: 40,
    height: 30,
    size: 20
};
const container = document.getElementById('game-container');
const game = new Game();
const background = new Background(tiles);
const snake = new Snake(tiles);
const apple = new Apple(tiles);
const score = new Score(snake, apple);
const overlay = new Overlay();
const gameOver = new GameOver(overlay, score);
const gameController = new GameController(snake);

container.append(score.html);
container.append(game.html);
container.append(gameController.html);
container.append(overlay.html);

game.start(new GameScene(tiles.width * tiles.size, tiles.height * tiles.size));
