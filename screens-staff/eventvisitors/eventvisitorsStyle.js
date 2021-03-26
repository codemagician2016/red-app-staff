import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const eventvisitorsStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0,marginVertical:16 },
    iconColor:{color:'#fff'},
    header:{backgroundColor:'transparent',position:'absolute',top:50,zIndex:99,justifyContent:'space-between',width:'100%'},
    bannerHeading:{color:COLORS.white,fontSize:20,fontWeight:'700',marginBottom:5},
    bannerText:{color:COLORS.white,fontSize:10,fontWeight:'500',marginBottom:5},
    bannerBlueText:{color:COLORS.blue,fontSize:10,fontWeight:'500',marginBottom:5},
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
    textrow:{flexDirection:'row'},
    nametext:{fontSize:13,fontWeight:'700',marginLeft:10,color:COLORS.black},
    Banndtext:{fontSize:13,fontWeight:'700',marginLeft:10,color:COLORS.red},
    tickettext:{fontSize:10,fontWeight:'500',marginLeft:10,color:COLORS.black,},
    list:{marginLeft:16,marginRight:16,borderRadius:8},
    listitem:{borderRadius:8},
    check:{color:COLORS.primary},
    footerbtn:{flexDirection:'row',backgroundColor:COLORS.primary,height:48,marginLeft:16,marginRight:16,borderRadius:8},
    btnIcon:{color:COLORS.white},
    btnText:{color:COLORS.white,fontSize:13,marginLeft:5,fontWeight:'700'},
})
export default eventvisitorsStyle;