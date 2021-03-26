import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const singleAdStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0,marginBottom:130 },
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        marginTop:'7%',
        zIndex: 99
    },
    slider: {
        height: 565,
        width: '100%',
    },
    sliderInfoBox: {
        position: 'absolute',
        width: '100%',
        top: 178,
    },
    allow:{marginRight:26,width:51,height:47},
    // sliderInfoRow: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginHorizontal: 16
    // },
    // slidercol8: {
    //     flex: .6,
    // },
    // slidercol2: {
    //     flex: .4,
    // },
    // bannerHeading: {
    //     color: COLORS.white,
    // },
    // bannerText: {
    //     color: COLORS.white,
    // },
    
    card: {
        padding: 0,
        borderRadius: 16,
        marginTop: -20,
        marginHorizontal: 0
    },
    cardHeader: {
        backgroundColor: COLORS.headerbg,
        padding: 0,
        margin: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    cardHeading: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        marginTop: 0,
        marginBottom: 0,
        color: COLORS.black
    },
    cardText: {
        flex: 1,
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.black
    },
    cardlink: {
        flex: 1,
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.blue,
        marginLeft: 16
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.black,
    },
    pera: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.black,
        lineHeight: 20,
        letterSpacing: 1,

    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.black,
        // lineHeight: 20,
        letterSpacing: 1,
    },
    direction: {
        backgroundColor: COLORS.blue,
        borderRadius: 50,
        fontSize: 12,
        position: 'absolute',
        bottom: 0,
        right: 28,
    },
    map: {
        width: '100%',
        resizeMode: 'contain'
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
    iconBtn: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 50,
        paddingRight: 5,
        marginHorizontal:8,
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
        height:48,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginLeft:"18%"
        // width:207
    },

})
export default singleAdStyle;