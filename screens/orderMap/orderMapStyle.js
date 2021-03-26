import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const orderMap = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0 },
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 66,
        zIndex: 99
    },
    direction: {
        backgroundColor: COLORS.blue,
        borderRadius: 50,
        fontSize: 12,
        position: 'absolute',
        bottom: 16,
        right: 28,
    },
    map: {
        width: '100%',
        resizeMode: 'contain'
    },

})
export default orderMap;