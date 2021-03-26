import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const ticketdetailStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop: 8 },
    header: {
        backgroundColor: 'transparent',
    },
    main: {
        marginBottom: 180,
    },

    card: {
        marginLeft: 16, marginRight: 16, borderRadius: 8, marginBottom: 16, shadowOpacity: 0,
    },
    cardItem: {
        paddingTop: 0, paddingBottom: 0, paddingRight: 0, borderTopRightRadius: 8,
        borderBottomRightRadius: 8, borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    // cardBody: {height:91},
    row: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        // height:91

    },
    col8: {
        flex: 1,
        marginBottom: 25,
        // height:91
    },
    col2: {
        flex: 1,
        width:'100%',
        // backgroundColor: '#DAE3E7',
        // borderLeftWidth:1,
        // borderStyle:'dashed',
        // paddingVertical: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingBottom: 10,
        paddingTop: 0,
        // height:91
    },
    dotted: {
        width: '100%',
        height: 2,
        position: 'absolute',
        left: -5,
        top: -30
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingBottom:16,
        width: '100%',
        // flex: 1,
        marginTop: 20
    },
    col1: {
        // height:22
    },
    seat: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 12,
        color: COLORS.black,
    },
    small: { fontSize: 10, fontWeight: '600', marginTop: 12, color: COLORS.gray },
    captionText: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 4,
        color: '#4B5E67',
    },
    qr: {
        width: '98%',
        padding: 23
    },
    price: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 4,
        color: COLORS.blue,
    },
    rightDotImg: {
        position: 'absolute',
        left: -22,
        top: -36,
        // bottom: 0,
        backgroundColor: '#F7F7F7',
        width: 14,
        height: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F7F7F7',
        zIndex: 999,

    },
    leftDotImg: {
        position: 'absolute',
        right:-12,
        top: -36,
        backgroundColor: '#F7F7F7',
        width: 14,
        height: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F7F7F7',
        zIndex: 999
    },
    iconBtn: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 50,
        paddingRight: 5,
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    footer:{
        padding:16,
        height:58
    },
    footertab:{  height:58},
    booknow: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: "100%",
        marginBottom: 52
    },
})
export default ticketdetailStyle;
