import { StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const otpStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    
    heading:{
        fontSize:24,
        color:COLORS.black,
        fontWeight:'700',
        
    },
    text:{
        fontSize:14,
        fontWeight:'600',
        marginTop:60
    },
    mobileText:{
        fontSize:14,
        fontWeight:'400',
        marginTop:10,
        color:COLORS.primary,
        fontWeight:'600'
    },
  
    confirm:{
        backgroundColor:COLORS.primary,
        height:48,
        marginTop:80,
        justifyContent:'center',
        fontSize:14,
        borderRadius:8,
        textTransform:'lowercase'
    },
    
    rowContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    col2:{
        flex:2,
        marginLeft:13,
        marginRight:13
    },
    textInput:{
        backgroundColor:COLORS.white,
        textAlign:'center'
    },
    termsBox:{
        textAlign:'center',
        marginTop:24,
        fontSize:14,
        fontWeight:'600',
        alignItems:'center',
    },
    link:{
        color:COLORS.primary,
        fontWeight:'600',
        fontSize:14
    },
    errText:{
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.red,
        marginStart: 9
    },
})
export default otpStyle;