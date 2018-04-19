import PlayUI, { View } from '../src';
import { Text, StyleSheet } from '../src';

const mainText = new Text();
const styleSheet = StyleSheet.create({
    mainText: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    mainBox: {
        width: 50,
        height: 50,
        backgroundColor: 'steelblue',
    },
});

const blueBox = new View();

blueBox.setProps({
    style: styleSheet.mainBox,
});

mainText.setProps({
    children: 'Hello World',
    style: styleSheet.mainText,
});


PlayUI.render(mainText, document.getElementById('app'));
