import GameComponent from "../framework/GameComponent";
import Tiles from "../models/Tiles";

export default class GameBackground extends GameComponent {
    constructor(
        private tiles: Tiles
    ) {
        super();
    }

    onRender(ctx: CanvasRenderingContext2D) {
        const { width, size, height } = this.tiles;

        // Draw background
        ctx.fillStyle = 'rgb(0,0,48)';
        ctx.fillRect(0, 0, width * size, height * size);
    }
}