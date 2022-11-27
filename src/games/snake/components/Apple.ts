import GameComponent from "../framework/GameComponent";
import GameEvent from "../framework/GameEvent";
import SnakeEvent from "./SnakeEvent";
import Tiles from "../models/Tiles";


export default class Apple extends GameComponent {
  constructor(private tiles: Tiles) {
    super();
    
    // Fix scope
    this.reset = this.reset.bind(this);
    
    // Setup listeners
    this.on(GameEvent.RESET, this.reset);
    this.on(SnakeEvent.EAT_APPLE, this.reset);
    
    // Reset
    this.reset();
  }

  reset() {
    const { tiles }  = this;

    this.x = Math.floor(Math.random() * tiles.width);
    this.y = Math.floor(Math.random() * tiles.height);
  }

  onRender(ctx: CanvasRenderingContext2D) {
    const { x, y, tiles } = this;
    const { size } = tiles;

    // Draw apple
    ctx.fillStyle = "red";
    ctx.fillRect(x * size, y * size, size - 2, size - 2);
  }
}
