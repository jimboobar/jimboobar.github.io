enum Display {
    NONE = 'display-none',
    LANDSCAPE = 'display-landscape',
    PORTRAIT = 'display-portrait',
}

export const getDisplay = (ratio: number) => {
    if (!ratio) return Display.NONE;
    if (ratio > 1) return Display.PORTRAIT;
    else return Display.LANDSCAPE;
};

export default Display;
