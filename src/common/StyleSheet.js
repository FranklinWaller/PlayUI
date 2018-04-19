class StyleSheet {
    constructor(styles) {
        this.x = styles.x || 0;
        this.y = styles.y || 10;

        this.fontWeight = styles.fontWeight || '400';
        this.fontSize = styles.fontSize || 16;
        this.fontFamily = styles.fontFamily || 'sans-serif';
        this.display = styles.display || 'flex';
        this.flexDirection = styles.flexDirection || 'column';

        this._convert();
    }

    _convert() {
        this.fontSize = `${this.fontSize}px`;
    }

    static create(styles) {
        const keys = Object.keys(styles);
        const result = {};

        keys.forEach((key) => {
            result[key] = new StyleSheet(styles[key]);
        });

        return result;
    }
}

export default StyleSheet;
