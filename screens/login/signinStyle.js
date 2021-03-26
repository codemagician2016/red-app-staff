import { StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const signinStyle = StyleSheet.create({
    mainContainer:{
        marginHorizontal:28,
        marginBottom:'10%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        // height: 139,
        width: 119,
        paddingStart: 23,
        paddingEnd: 23,
        marginTop: '20%',
        marginBottom:"10%",
        resizeMode: 'contain',
        justifyContent: 'center'
    },
    textInput:{
        color:COLORS.primary,
        backgroundColor:COLORS.white,
        marginBottom:28,
        
    },
    loginButton:{
        backgroundColor:COLORS.primary,
        height:48,
        marginTop:'10%',
        justifyContent:'center',
        fontSize:14,
        borderRadius:8
    },
    eyeIcon:{
        color:COLORS.gray,
        position:'absolute',
        right:16,
        justifyContent:'center',
        top:26,
        width:20,
        backgroundColor:COLORS.white,
        
    },
    forgot:{
        marginTop:68,
        fontFamily:'Montserrat',
    },
    forgotText:{
        color:COLORS.primary,
        textTransform:'capitalize',
        textAlign:'center',
        width:'100%',
        fontSize:14,
        fontWeight:'600'
    },

    termsBox:{
        textAlign:'center',
        marginTop:16,
        fontSize:12,
        // width:300,
        alignItems:'center'
    },
    link:{
        color:COLORS.primary,
        fontWeight:'600',
        fontSize:14
    },
    signUp:{
        fontSize:14,
        fontWeight:'600',
        textAlign:'center',
        marginTop:28,
        color:COLORS.primary,
    },
    errText:{
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.red,
        marginStart: 9,
        marginTop:0
    },
   

})
export default signinStyle;