import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const checkoutStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop: 30,marginBottom:135 },
    header: {
        backgroundColor: 'transparent',
        // position: 'absolute',
        // top: 40,
        zIndex: 99,
        width: '100%',
        color: COLORS.black
    },
    selectedCard: { borderWidth:1,borderColor:COLORS.primary,marginRight: 16, marginLeft: 16, borderRadius: 8, marginBottom: 10},
    checkoutCard: { marginRight: 16, marginLeft: 16, borderRadius: 8, marginBottom: 10 },
    checkoutCardItem: { borderRadius: 8, height: 68 },
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
    addition:{
        marginLeft:16,
        marginRight:16,
        marginTop:40,
        color:COLORS.black
    },
    additionText:{fontSize:10,fontWeight:'500',color:COLORS.black},
    gift:{fontSize:10,fontWeight:'500',color:COLORS.blue},
    picker:{
        width:"100%",backgroundColor:COLORS.white,height:50,borderRadius:8,color:COLORS.black,marginTop:16
    },
    summary:{marginLeft:16,marginRight:16,marginTop:27},
    orderTitle:{fontSize:13,fontWeight:'700'},
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
    booknow: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // width:207
    },
    lightText: { fontSize: 12, fontWeight: '500', color: COLORS.black },
    darkText: { fontSize: 16, fontWeight: '700', color: COLORS.black },

})
export default checkoutStyle;