import Context from '../services/Context';
import StyleSheet from './StyleSheet';

let internalId = 0;

class Component {
    _renderData = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }

    _renderer = null;

    /** @type {Context} */
    _context = null;
    _internalId = 0;

    props = {
        /** @type {StyleSheet} */
        style: null,
    };

    constructor(props) {
        this.props = props;
        internalId += 1;
        this._internalId = internalId;
    }

    /**
     * Gets all the children of a component
     *
     * @returns {Component[]}
     * @memberof Component
     */
    getChildren() {
        const elements = this.render();

        if (Array.isArray(elements)) {
            return elements;
        }

        return [elements];
    }

    setProps(nextProps) {
        this.props = nextProps;
    }

    draw() {
        throw new Error('Render was called but there was nothing to render');
    }
}

export default Component;
