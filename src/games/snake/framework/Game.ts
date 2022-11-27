import Display, { getDisplay } from '../models/Display';
import Events from './Events';
import GameEvent from './GameEvent';
import GameScene from './GameScene';


export default class Game {
    public html = document.createElement('canvas');
    private ctx = this.html.getContext('2d')
    private running: boolean = false;
    private paused: boolean = false;
    private handlers = {
        start: (event: CustomEvent<GameScene>) => this.onGameStart(event.detail),
        pause: () => this.onGamePause(),
        resume: () => this.onGameResume(),
        stop: () => this.onGameStop(),
        resize: () => this.onGameResize()
    };
    private scene: GameScene;

    constructor() {
        this.setupHTML();
        Events.on(GameEvent.START, this.handlers.start);
        Events.on(GameEvent.STOP, this.handlers.stop);
    }

    start(scene: GameScene) {
        Events.dispatch(GameEvent.START, scene);
    }

    stop() {
        Events.dispatch(GameEvent.STOP);
    }

    resize() {
        Events.dispatch(GameEvent.RESIZE);
    }

    private setupHTML() {
        const { html } = this;

        html.classList.add('game-canvas');
    }

    private onGamePause() {
        this.paused = true;
    }

    private onGameResize() {
        Events.dispatch(GameEvent.PAUSE);

        this.updateDisplay();

        Events.dispatch(GameEvent.RESUME);
    }

    private onGameResume() {
        this.paused = false
    }

    private onGameStart(scene: GameScene) {
        if (this.running) return;

        this.scene = scene;
        this.running = true;
        this.paused = false;

        Events.on(GameEvent.PAUSE, this.handlers.pause);
        Events.on(GameEvent.RESUME, this.handlers.resume);
        Events.on(GameEvent.RESIZE, this.handlers.resize);

        Events.dispatch(GameEvent.RESIZE);

        window.requestAnimationFrame(() => this.frameLoop(Date.now()));
    }

    private onGameStop() {
        Events.off(GameEvent.PAUSE, this.handlers.pause);
        Events.off(GameEvent.RESUME, this.handlers.resume);
        Events.off(GameEvent.RESIZE, this.handlers.resize);

        this.running = false;
    }

    private frameLoop(lastFrame: number) {
        if (!this.running) return;

        const now = Date.now();

        if (!this.paused) {
            Events.dispatch(GameEvent.UPDATE, (now - lastFrame) / 1000);
            Events.dispatch(GameEvent.UPDATE_COMPLETE);
            Events.dispatch(GameEvent.RENDER, this.ctx);
            Events.dispatch(GameEvent.RENDER_COMPLETE);
        }

        window.requestAnimationFrame(() => this.frameLoop(now));
    }

    private updateDisplay() {
        const { html, scene } = this;

        switch (getDisplay(scene.ratio)) {
            case Display.LANDSCAPE:
                html.width = scene.width;
                html.height = scene.height;
                break;
            case Display.PORTRAIT:
                html.width = scene.width;
                html.height = scene.height;
                break;
            default: break;
        }
    }
}
