import GameComponent from '../framework/GameComponent';
import GameEvent from '../framework/GameEvent';
import SnakeEvent from './SnakeEvent';
import Tiles from '../models/Tiles';

export const reset = (apple: Apple, tiles: Tiles) => {
    apple.x = Math.floor(Math.random() * tiles.width);
    apple.y = Math.floor(Math.random() * tiles.height);
};

export const render = (ctx: CanvasRenderingContext2D, apple: Apple, tiles: Tiles) => {
    const { size } = tiles;

    // Draw apple
    ctx.fillStyle = 'red';
    ctx.fillRect(apple.x * size, apple.y * size, size - 2, size - 2);
};

export default class Apple extends GameComponent {
    constructor(
        private tiles: Tiles
    ) {
        super();
        this.on(GameEvent.RESET, () => reset(this, tiles));
        this.on(SnakeEvent.EAT_APPLE, () => reset(this, tiles));
        reset(this, tiles);
    }

    onRender(ctx: CanvasRenderingContext2D) {
        render(ctx, this, this.tiles);
    }
}
