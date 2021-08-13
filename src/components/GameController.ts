import Events from '../framework/Events';
import GameComponent from '../framework/GameComponent';
import GameEvent from '../framework/GameEvent';
import Input from '../models/Input';
import Snake from './Snake';

export default class InputController extends GameComponent {
    public html: HTMLDivElement = document.createElement('div');

    private buttons = {
        up: document.createElement('div'),
        down: document.createElement('div'),
        left: document.createElement('div'),
        right: document.createElement('div'),
    };

    constructor(
        private snake: Snake
    ) {
        super();
        this.render = false;
        this.setupHTML();
        document.addEventListener('keydown', this.onKeyDown);
    }

    onUpdate() {
        // TODO
    }

    private setupHTML() {
        const { html, buttons } = this;

        html.classList.add('game-controller');
        
        buttons.up.classList.add('game-controller-input');
        const spanUp = document.createElement('span');
        spanUp.innerText = Input.UP;
        buttons.up.appendChild(spanUp);
        buttons.up.onclick = () => this.dispatch(GameEvent.INPUT, Input.UP);
        
        buttons.down.classList.add('game-controller-input');
        const spanDown = document.createElement('span');
        spanDown.innerText = Input.DOWN;
        buttons.down.appendChild(spanDown);
        buttons.down.onclick = () => this.dispatch(GameEvent.INPUT, Input.DOWN);
        
        buttons.left.classList.add('game-controller-input');
        const spanLeft = document.createElement('span');
        spanLeft.innerText = Input.LEFT;
        buttons.left.appendChild(spanLeft);
        buttons.left.onclick = () => this.dispatch(GameEvent.INPUT, Input.LEFT);
        
        buttons.right.classList.add('game-controller-input');
        const spanRight = document.createElement('span');
        spanRight.innerText = Input.RIGHT;
        buttons.right.appendChild(spanRight);
        buttons.right.onclick = () => this.dispatch(GameEvent.INPUT, Input.RIGHT);
        
        const rowUpper = document.createElement('div');
        rowUpper.classList.add('flex-row');
        rowUpper.appendChild(buttons.up);
        rowUpper.appendChild(buttons.right);
        
        const rowLower = document.createElement('div');
        rowLower.classList.add('flex-row');
        rowLower.appendChild(buttons.left);
        rowLower.appendChild(buttons.down);

        html.appendChild(rowUpper);
        html.appendChild(rowLower);
    }

    private onKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowLeft':
                Events.dispatch(GameEvent.INPUT, Input.LEFT);
                break;
            case 'ArrowUp':
                Events.dispatch(GameEvent.INPUT, Input.UP);
                break;
            case 'ArrowRight':
                Events.dispatch(GameEvent.INPUT, Input.RIGHT);
                break;
            case 'ArrowDown':
                Events.dispatch(GameEvent.INPUT, Input.DOWN);
                break;
            default:
                break;
        }
    }
}
