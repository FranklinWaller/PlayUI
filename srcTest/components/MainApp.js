import { Component, Text } from '../../src';
import PlayUI from '../../src';

class MainApp extends Component {
    test = 1;

    render() {
        const textElement = PlayUI.createElement(Text, null, [
            'Hello World',
        ]);

        return textElement;
    }
}

export default MainApp;
