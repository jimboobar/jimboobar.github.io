import GameComponent from "../framework/GameComponent";
import GameEvent from "../framework/GameEvent";
import Apple from "./Apple";
import Snake from "./Snake";
import SnakeEvent from "./SnakeEvent";

export default class Score extends GameComponent {
  public html = document.createElement("div");
  public score = 0;
  private text = document.createElement("strong");

  constructor(private snake: Snake, private apple: Apple) {
    super();
    this.render = false;
    this.setupHTML();

    // Fix scope
    this.onGameReset = this.onGameReset.bind(this);
    this.onSnakeEatApple = this.onSnakeEatApple.bind(this);

    // Setup listeners
    this.on(GameEvent.RESET, this.onGameReset);
    this.on(SnakeEvent.EAT_APPLE, this.onSnakeEatApple);
  }

  onUpdate() {
    // When snake eats apple
    if (this.snake.isAt(this.apple.position)) {
      this.dispatch(SnakeEvent.EAT_APPLE);
    }
  }

  toText() {
    return `Score: ${this.score}`;
  }

  private setupHTML() {
    this.html.classList.add("game-score");
    this.text.innerText = this.toText();
    this.html.appendChild(this.text);
  }

  private onGameReset() {
    this.score = 0;
    this.text.innerText = this.toText();
  }

  private onSnakeEatApple() {
    this.score += 1;
    this.text.innerText = this.toText();
  }
}
