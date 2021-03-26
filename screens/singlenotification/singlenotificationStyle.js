import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const singlenotificationStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0,marginBottom:16 },
    header: {
        backgroundColor: COLORS.white,
        // position: 'absolute',
        // top: 66,
        marginLeft:16,marginRight:16,
        zIndex: 99
    },
    iconColor:{color:COLORS.black,fontSize:20},
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
  
    booknow: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      marginRight:24,
      marginLeft:24
    },
  

})
export default singlenotificationStyle;