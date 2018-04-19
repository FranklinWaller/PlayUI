import Context from './Context';

class Context2d extends Context {
    /**
     * Creates an instance of Context2d.
     *
     * @param {HTMLCanvasElement} canvas
     * @memberof Context2d
     */
    constructor(canvas) {
        super(canvas);

        this.context = canvas.getContext('2d');
    }

    fillText(text, x, y) {
        this.context.fillText(text, x, y);
    }

    /**
     * Sets the font
     *
     * @param {any} {
     *         fontWeight,
     *         fontSize,
     *         fontFamily
     *     }
     * @memberof Context
     */
    setFont({
        fontWeight,
        fontSize,
        fontFamily,
    }) {
        console.log(fontWeight, fontSize, fontFamily);
        const font = `${fontWeight} ${fontSize} ${fontFamily}`;
        this.context.font = font;
    }
}

export default Context2d;
