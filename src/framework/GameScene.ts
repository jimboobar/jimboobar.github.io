export default class GameScene {
    constructor(
        public width: number,
        public height: number
    ) { }

    get ratio() {
        const { height, width } = this;
        
        return (height && width) ? height / width : 0;
    }
}
