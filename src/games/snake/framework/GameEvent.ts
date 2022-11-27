enum GameEvent {
    START = 'game-start',
    STOP = 'game-stop',
    RESET = 'game-reset',
    PAUSE = 'game-pause',
    RESUME = 'game-resume',
    RESIZE = 'game-resize',
    RESIZE_COMPLETE = 'game-resize-complete',
    INPUT = 'game-input',
    UPDATE = 'game-update',
    UPDATE_COMPLETE = 'game-update-complete',
    RENDER = 'game-render',
    RENDER_COMPLETE = 'game-render-complete',
    GAME_OVER = 'game-over'
}

export default GameEvent;
