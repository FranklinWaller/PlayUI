import Component from '../common/Component';
import Context from '../services/Context';

class Text extends Component {
    /**
     * Renders on the context
     *
     * @memberof Text
     */
    draw() {
        this._context.setFont(this.props.style);

        if (typeof this.props.children === 'string') {
            this._context.fillText(this.props.children, this.props.style.x, this.props.style.y);
        } else {
            console.log('TODO');
        }
    }
}

export default Text;
