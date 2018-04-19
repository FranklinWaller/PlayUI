class Context {
    /**
     * Creates an instance of Context.
     *
     * @param {HTMLCanvasElement} context
     * @memberof Context
     */
    constructor(canvas) {
        this.context = canvas;
    }

    /**
     * Fills text on the screen
     *
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @memberof Context
     */
    fillText(text, x, y) {
        throw new Error('\'fillText\' is not implemented');
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
        fontFamily
    }) {
        throw new Error('\'setFont\' is not implemented');
    }
}

export default Context;
