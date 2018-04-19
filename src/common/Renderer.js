import Component from './Component';
import Context2d from '../services/Context2d';

class Renderer {
    /**
     * Creates an instance of Renderer.
     *
     * @param {HTMLCanvasElement} canvasElem
     * @param {string} [contextType='2d']
     * @memberof Renderer
     */
    constructor(canvasElem, contextType = '2d') {
        this.canvasElem = canvasElem;
        this.context = contextType === '2d' ? new Context2d(this.canvasElem) : null;
    }

    tree = [];

    /**
     * Draws an element on the screen
     *
     * @param {Component} element
     * @memberof Renderer
     */
    draw(element) {
        element._renderer = this;
        element._context = this.context;

        element.draw();
    }
}

export default Renderer;
