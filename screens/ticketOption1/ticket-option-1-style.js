import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const TicketOption1Style = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0 },
    header: {
        backgroundColor: 'transparent',
    },
    main:{
        marginBottom:180,
    },
    slider: {
        height: 251,
        width: '100%',

    },
    listCard: {
        backgroundColor: COLORS.white,
        marginHorizontal: 16,
        paddingLeft: 16,
        paddingRight: 0,
        paddingVertical: 0,
    },
    listLeft: {
        backgroundColor: COLORS.gray,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        paddingVertical: 0,
        alignItems: 'center'

    },
    card: {
        marginLeft: 16, marginRight: 16, borderRadius: 8, marginBottom: 10,
    },
    cardItem: {
        paddingTop: 0, paddingBottom: 0, paddingRight: 0, borderTopRightRadius: 8,
        borderBottomRightRadius: 8, borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    cardBody: {},
    row: {
        flexDirection: 'row',
        flex: 1,

    },
    col8: {
        flex: .8
    },
    col2: {
        flex: .3,
        backgroundColor: '#DAE3E7',
        paddingVertical: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    innerRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        // margin:0,
        // padding:0
    },
    col1: {
        // height:22
    },
    seat: {
        fontSize: 14,
        fontWeight: '700',
        marginTop: 11,
        color: COLORS.black,
    },
    captionText: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 4,
        color: COLORS.black,
    },
    price: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 9,
        color: COLORS.black,
    },
    rightDotImg: {
        position: 'absolute',
        right: -7,
        top: 35,
        bottom: 0,
        backgroundColor: '#F7F7F7',
        width: 14,
        height: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F7F7F7',
        zIndex: 999
    },
    leftDotImg: {
        position: 'absolute',
        left: -22,
        top: 35,
        bottom: 0,
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
    rdFooter: {
        height: 122,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        width: '102%',
        position: 'absolute',
        bottom: -10,
        left: -5,
        right: -5
    },
    footerIcon: {
        width: '100%'
    },
    soldOut: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // width:207
    },
    lowerBox: { marginTop: 20, marginLeft: 24,marginBottom:174 },
    lowerBoxText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.blue
    },
    lightText:{fontSize:12,fontWeight:'500',color:COLORS.black},
    darkText:{fontSize:16,fontWeight:'700',color:COLORS.black},
    textInput:{backgroundColor:COLORS.white,
        borderWidth:1,
        borderColor:'#DAE3E7',
        borderRadius:8,
        marginRight:16,
        paddingLeft:10,
        height:50,
        },
        apply:{width:90,position:'absolute',right:5,top:8
    }
})
export default TicketOption1Style;
