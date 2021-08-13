import GameComponent from '../framework/GameComponent';
import GameEvent from '../framework/GameEvent';
import Position2D from '../framework/Position2D';
import Tiles from '../models/Tiles';
import Input from '../models/Input';
import SnakeEvent from './SnakeEvent';


export default class Snake extends GameComponent {
    private timer: number;
    private tail: Position2D[];
    private tailLength: number;
    private inputDirection: Input;

    constructor(
        private tiles: Tiles,
        public defaultTailLength = 5
    ) {
        super();
        // fix scope
        this.onGameReset = this.onGameReset.bind(this);
        this.onGameOver = this.onGameOver.bind(this);
        this.onGameResume = this.onGameResume.bind(this);
        this.onSnakeEatApple = this.onSnakeEatApple.bind(this);
        // setup listeners
        this.on(GameEvent.RESET, this.onGameReset);
        this.on(GameEvent.GAME_OVER, this.onGameOver);
        this.on(GameEvent.RESUME, this.onGameResume);
        this.on(SnakeEvent.EAT_APPLE, this.onSnakeEatApple);
        this.onGameReset();
    }

    isMoving() {
        return !this.inputDirection;
    }

    isAt(position: Position2D) {
        return (this.tail.findIndex(part => part.isAt(position)) !== -1);
    }

    onInput(input: Input) {
        if (
            (input === Input.LEFT && this.inputDirection === Input.RIGHT)
            || (input === Input.UP && this.inputDirection === Input.DOWN)
            || (input === Input.RIGHT && this.inputDirection === Input.LEFT)
            || (input === Input.DOWN && this.inputDirection === Input.UP)
        ) return;

        this.inputDirection = input;
        this.snakeUpdate();
    }

    onUpdate() {
        if (this.timerTriggered()) this.snakeUpdate();
        else this.timerUpdate();
    }

    onRender(ctx: CanvasRenderingContext2D) {
        const { tiles, tail } = this;

        // Draw tail
        ctx.fillStyle = 'lime';
        for (let i in tail) {
            ctx.fillRect(
                tail[i].x * tiles.size,
                tail[i].y * tiles.size,
                tiles.size - 2,
                tiles.size - 2
            );
        }
    }

    private onGameReset() {
        this.inputDirection = null;
        this.x = 0;
        this.y = 0;
        this.tailLength = this.defaultTailLength;
        this.tail = [this.position.copy()];
        this.timerReset();
    }

    private onGameOver() {
        this.input = false;
    }

    private onGameResume() {
        this.input = true;
    }

    private onSnakeEatApple() {
        this.tailLength += 1;
    }

    private timerReset() {
        this.timer = 0;
    }

    private timerUpdate() {
        this.timer += (this.tailLength * 0.15);
    }

    private timerTriggered() {
        return this.timer >= this.tiles.size;
    }

    private snakeUpdate() {
        const { inputDirection, tiles, tail } = this;

        switch (inputDirection) {
            case Input.LEFT: this.x -= 1; break;
            case Input.UP: this.y -= 1; break;
            case Input.RIGHT: this.x += 1; break;
            case Input.DOWN: this.y += 1; break;
            default: return;
        }

        // When out of bounds left
        if (this.x < 0) this.x = tiles.width - 1;
        
        // When out of bounds right
        if (this.x > tiles.width - 1) this.x = 0;
        
        // When out of bounds top
        if (this.y < 0) this.y = tiles.height - 1;
        
        // When out of bounds bottom
        if (this.y > tiles.height - 1) this.y = 0;

        // When snake eats tail
        if (tail.find(chunk => chunk.isAt(this.position))) {
            this.dispatch(SnakeEvent.EAT_SELF);
        }

        // Add position to tail
        tail.push(this.position.copy());

        // Adjust tail length
        while (tail.length > this.tailLength) tail.shift();

        // reset timer
        this.timerReset();
    }
}
