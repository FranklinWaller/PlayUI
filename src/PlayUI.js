import Component from './common/Component';
import Renderer from './common/Renderer';

class PlayUI {
    static createElement(elementClass, props, children) {
        return {
            element: elementClass,
            props,
            children,
        };
    }

    /**
     * Renders a PlayUI element on the screen
     *
     * @param {Component} element
     * @param {HTMLCanvasElement} canvas
     * @memberof PlayUI
     */
    static render(element, canvas) {
        const render = new Renderer(canvas);

        render.draw(element);
    }
}

export default PlayUI;
