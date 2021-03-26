import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const termsandconditionStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginBottom:'10%'
    },
    header:{backgroundColor:COLORS.white},
    headeing:{color:COLORS.black,fontWeight:'600',fontSize:14,marginTop:28},
    text:{fontSize:14,fontWeight:'500',color:'#817C8B',marginTop:'10%'},
})
export default termsandconditionStyle;