import GameComponent from "../framework/GameComponent";
import GameEvent from "../framework/GameEvent";
import Overlay from "./Overlay";
import Score from "./Score";
import SnakeEvent from "./SnakeEvent";

export default class GameOver extends GameComponent {
    private totalScore: HTMLSpanElement;
    private content: HTMLDivElement;

    constructor(
        private overlay: Overlay,
        private score: Score
    ) {
        super();
        this.createHTML();
        this.on(GameEvent.START, () => this.onGameStart());
        this.on(GameEvent.RESET, () => this.onGameReset());
        this.on(GameEvent.GAME_OVER, () => this.onGameOver());
        this.on(SnakeEvent.EAT_SELF, () => this.onSnakeEatSelf());
    }

    private createHTML() {
        const header = document.createElement('h1');
        header.innerText = 'Game Over';
        
        this.totalScore = document.createElement('span');

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Restart';
        resetButton.onclick = () => this.dispatch(GameEvent.START);
        
        this.content = document.createElement('div');
        this.content.classList.add('game-over', 'flex-column', 'justify-center', 'align-center');
        this.content.append(header);
        this.content.append(this.totalScore);
        this.content.append(resetButton);
    }

    private onGameStart() {
        this.dispatch(GameEvent.RESET);
        this.dispatch(GameEvent.RESUME);
    }

    private onGameReset() {
        this.overlay.close();
    }

    private onGameOver() {
        const { totalScore, score, overlay, content } = this;
        
        this.dispatch(GameEvent.PAUSE);
        totalScore.innerText = `Score: ${score.score}`;
        overlay.open(content);
    }

    private onSnakeEatSelf() {
        this.dispatch(GameEvent.GAME_OVER);
    }
}