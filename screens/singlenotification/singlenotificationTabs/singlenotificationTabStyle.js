import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../../src/styles/colors';

// import { StyleSheet } from "./text.js";
const singlenotificationTabStyle = StyleSheet.create({
    maincontainer: { paddingBottom: 105, backgroundColor: COLORS.bg },
    pickerContainer: {
        paddingRight: 16, backgroundColor: COLORS.bg,
        paddingLeft: 16,
    },
    picker: {
        width: '100%',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#DAE3E7',
        borderRadius: 8,
        height: 50, backgroundColor: COLORS.white, marginBottom: 15
    },
    imgslider: { backgroundColor: COLORS.bg, paddingTop: 16, paddingBottom: 16 },
    addImgbox: { width: 104, height: 104, borderWidth: 1, borderColor: '#DAE3E7', backgroundColor: COLORS.white, marginLeft: 16, borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    addedImgbox: { width: 104, height: 104, marginRight: 10 },
    addtxt: { fontSize: 13, fontWeight: '500', marginTop: 14 },
    add: { marginBottom: 14 },
    added: { width: 104, height: 104, resizeMode: 'contain', marginLeft: 10 },
    cross: { position: 'absolute', right: 0, top: 10 },
    drag: { position: 'absolute', right: '30%', top: '40%', },
    input: { borderRadius: 8, paddingLeft: 10, paddingRight: 16, backgroundColor: COLORS.bg, paddingBottom: 15, paddingTop: 15, backgroundColor: COLORS.bg },
    inputbox: { borderRadius: 8, backgroundColor: COLORS.white, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, paddingLeft: 10, paddingRight: 10, color: COLORS.black },

    row: { flexDirection: 'row', flex: 1, width: '100%', justifyContent: 'center', height: 50, alignItems: 'center', borderRadius: 8, paddingTop: 16, paddingBottom: 16, backgroundColor: COLORS.white, borderWidth: 1, borderColor: '#DAE3E7' },
    col6: { width: '50%', textAlign: 'center', paddingRight: 16, paddingLeft: 16, },
    mx3: { padding: 16, paddingLeft: 16, backgroundColor: COLORS.bg },
    line: { height: 50, width: 1, borderWidth: 1, borderColor: "#DAE3E7", position: "absolute", top: -16 },
    optionRow: { flexDirection: 'row', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: COLORS.bg, flexWrap: 'wrap' },
    optionCol: {
        width: "20%",marginBottom:16
    },
    lowerBox: { marginTop: 26, marginLeft:16,flexDirection:'row',justifyContent:'space-between',
        marginRight:16,marginBottom:13 },
    lowerBoxText: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.black,
    },
    lowerText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.black,
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
        marginLeft: 16, marginRight: 16, borderRadius: 8, marginBottom: 10
    },
    cardItem: {
        paddingTop: 0, paddingBottom: 0, paddingRight: 0, borderTopRightRadius: 8,
        borderBottomRightRadius: 8, borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    cardBody: {},
    // row: {
    //     flexDirection: 'row',
    //     flex: 1,

    // },
    col8: {
        flex: .8
    },
    col2: {
        flex: .3,
        backgroundColor: '#DAE3E7',
        paddingVertical: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        marginTop: 9,
        marginBottom:4,
        height:20,
        borderWidth:0,
        color: COLORS.black,
    },
    noBorder:{
        borderWidth:0
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
        marginBottom:10,
        color: COLORS.black,
    },
    rightDotImg: {
        position: 'absolute',
        right: -7,
        top: 38,
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
        top: 38,
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
    
    // lowerBox: { marginTop:0, marginLeft:16,
    //     marginRight:16,marginBottom:174 },
    // lowerBoxText: {
    //     fontSize: 12,
    //     fontWeight: '600',
    //     color: COLORS.blue,
        
    // },
    textInput:{backgroundColor:COLORS.white,
    borderWidth:1,
    borderColor:'#DAE3E7',
    borderRadius:8,
    marginTop:10

    },
    lightText:{fontSize:12,fontWeight:'500',color:COLORS.black},
    darkText:{fontSize:16,fontWeight:'700',color:COLORS.black},
    cancel:{position:'absolute',top:-20,right:-20},

    checkoutCard: { marginRight: 16, marginLeft: 16, borderRadius: 8, marginBottom: 10 ,backgroundColor:COLORS.bg},
    checkoutCardItem: { borderRadius: 8, height: 68 ,backgroundColor:COLORS.bg},
    cardTitle: { fontWeight: '700', fontSize: 14, color: COLORS.black },
    cardtext: { fontWeight: '500', fontSize: 10, color: COLORS.black },
    headerText: { color: '#704ADC', fontSize: 14, fontWeight: '600' },
    headerTitle: { color: COLORS.black },
    walletCard: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: '#F7F7F7',
        shadowColor: "#000",
        shadowOpacity: 0,
        marginTop:28
    },
    walletCardItem: { backgroundColor: 'transparent', borderWidth: 0, borderColor: '#F7F7F7' },
    walletcardTitle: { fontWeight: '600', fontSize: 12, color: COLORS.black },
    walletcardtext: { fontWeight: '600', fontSize: 11, color: COLORS.black,marginLeft:12 },
    star:{marginLeft:5},

    transparentcard:{borderTopWidth:1,borderTopColor:'#E0E0E0',borderBottomWidth:1,borderBottomColor:'#E0E0E0',height:58},
    
})
export default singlenotificationTabStyle;