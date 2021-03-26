import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const homeStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, zIndex: 999 },
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        marginTop:0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99
    },
    slider: {
        height: 300,
        width: '100%',
    },
    sliderInfoBox: {
        position: 'absolute',
        width: '100%',
        top: 178,
    },
    sliderInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    slidercol8: {
        flex: .6,
    },
    slidercol2: {
        flex: .4,
    },
    bannerHeading: {
        color: COLORS.white,
    },
    bannerText: {
        color: COLORS.white,
    },
    bookbtn: {
        backgroundColor: COLORS.blue,
        borderRadius: 50,
        fontSize: 12
    },
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
        height: 52,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    selectSegment: {
        // backgroundColor: COLORS.primary,
        borderRadius: 26,
        // height:42,
        fontSize: 12,
        fontWeight: '600',
        marginRight: 8,
        marginBottom: 20,
    },
    segment: {
        // backgroundColor: COLORS.headerbg,
        // color: COLORS.primary,
        borderRadius: 26,
        height: 32,
        fontSize: 12,
        fontWeight: '600',
        marginRight: 8,
        marginBottom: 20,
        shadowOpacity:0,
    },
    eventImg: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 91,
        width: null,
        flex: 1,
    },
    eventCard: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
    col6: {
        // flex: .5,
        paddingLeft: 7,
        paddingRight: 7,
        width: '50%',
        marginBottom: 14

    },
    eventCardHeading: {
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 16,
    },
    eventCardText: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 5
    },
    eventCardLike: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 5,
        color: COLORS.blue
    },
    eventBadge: {
        backgroundColor: COLORS.darkGray,
        position: 'absolute',
        right: 16,
        top: 15.41,
        bottom: 32.3,
        zIndex: 99,
        transform: [{ rotate: "0deg" }],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 21,
        width: "40%",
        borderRadius: 2,
    },
    eventBadgeRed: {
        backgroundColor: COLORS.red,
        position: 'absolute',
        right: 16,
        top: 15.41,
        bottom: 32.3,
        zIndex: 99,
        transform: [{ rotate: "0deg" }],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 21,
        width: "60%",
        borderRadius: 2,
    },
    eventBadgeWhite: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: -8,
        top: 65.41,
        bottom: 32.3,
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 21,
        width: "60%",
        borderRadius: 2,
    },
    badgeText: {
        color: COLORS.white,
        fontSize: 10,
        fontWeight: '700'
    },
    starImg: {
        width: 16,
        height: 16,
    }
})
export default homeStyle;