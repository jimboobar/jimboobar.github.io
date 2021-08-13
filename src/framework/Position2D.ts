export default class Position2D {
    constructor(
        public x: number,
        public y: number
    ) { }

    isAt(value: Position2D) {
        return this.x === value.x && this.y === value.y;
    }

    copy(): Position2D {
        return new Position2D(this.x, this.y);
    }
}
