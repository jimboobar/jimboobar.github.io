import Events from './Events';
import GameEvent from './GameEvent';
import Position2D from './Position2D';
import Input from '../models/Input';
import InputEvent from '../models/InputEvent';
import RenderEvent from '../models/RenderEvent';
import UpdateEvent from '../models/UpdateEvent';

export default class GameComponent {
    private states = {
        update: false,
        input: false,
        render: false
    };

    private actions = {
        input: (evt: InputEvent) => this.onInput(evt.detail),
        update: (evt: UpdateEvent) => this.onUpdate(evt.detail),
        render: (evt: RenderEvent) => this.onRender(evt.detail)
    };
    
    constructor(
        public position = new Position2D(0, 0)
    ) {
        this.input = false;
        this.update = true;
        this.render = true;
    }

    get x(): number {
        return this.position.x;
    }
    
    get y(): number {
        return this.position.y;
    }
    
    set x(value: number) {
        this.position.x = value;
    }
    
    set y(value: number) {
        this.position.y = value;
    }

    get input(): boolean {
        return this.states.input;
    }

    set input(value: boolean) {
        const { states, actions } = this;
        
        if (value && !states.input) {
            states.input = true;
            this.on(GameEvent.INPUT, actions.input);
        } else if (!value && states.input) {
            this.off(GameEvent.INPUT, actions.input);
            states.input = false;
        }
    }

    get update(): boolean {
        return this.states.update;
    }

    set update(value: boolean) {
        const { states, actions } = this;
        
        if (value && !states.update) {
            states.update = true;
            this.on(GameEvent.UPDATE, actions.update);
        } else if (!value && states.update) {
            this.off(GameEvent.UPDATE, actions.update);
            states.update = false;
        }
    }

    get render(): boolean {
        return this.states.render;
    }

    set render(value: boolean) {
        const { states, actions } = this;
        
        if (value && !states.render) {
            states.render = true;
            this.on(GameEvent.RENDER, actions.render);
        } else if (!value && states.render) {
            this.off(GameEvent.RENDER, actions.render);
            states.render = false;
        }
    }

    isAt(position: Position2D) {
        return this.position.isAt(position);
    }

    onInput(input: Input) {}

    onUpdate(dt: number) {}

    onRender(ctx: CanvasRenderingContext2D) {}

    protected on(name: string, action: (event: any) => any, once?: boolean) {
        Events.on(name, action, once);
    }

    protected off(name: string, action: (event: any) => any) {
        Events.off(name, action);
    }

    protected dispatch(name: string, detail?: any) {
        Events.dispatch(name, detail);
    }
}
