import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const ticketInformation2Style = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop: 0, marginBottom: 165 },
    header: {
        backgroundColor: '#fff',
        // position: 'absolute',
        // top: 40,
        zIndex: 99,
        width: '100%',
        color: COLORS.black,
        borderWidth: 0,
        shadowOpacity: 0,
        borderColor: '#000'
    },
    map: { width: '100%' },
    headerText: { color: '#704ADC', fontSize: 14, fontWeight: '600' },
    headerTitle: { color: COLORS.black },
    ticketnobox: {
        flexDirection: 'row', marginTop: 27, marginBottom: 16, marginLeft: 16, alignItems: 'center'
    },

    input: { backgroundColor: 'transparent', marginBottom: 12, borderWidth: 1, borderColor: '#ccc', borderBottomWidth: 0, borderRadius: 4, height: 50, },
    box: { marginLeft: 24, marginRight: 24 },
    paymentoption: { width: '100%', resizeMode: 'contain', marginRight: 8, flex: 1.6 },
    rdFooter: {
        // height: 122,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        width: '102%',
        position: 'absolute',
        bottom: -10,
        left: -5,
        right: -5,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },

    booknow: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 0,
        width: "100%",
        marginBottom: 52
    },


})
export default ticketInformation2Style;