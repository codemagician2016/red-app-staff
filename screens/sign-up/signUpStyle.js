import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const signUpStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
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
        marginTop: "10%",
        marginBottom: "10%",
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: COLORS.white
    },
    numberRow: {
        flexDirection: 'row',
        marginTop: 12,
    },
    col2: {
        flex: .3,
        borderBottomWidth: 1,
        borderBottomColor: '#a9b4c4',
        marginEnd: 7.5,
        paddingLeft: 12,
    },
    col10: {
        flex: .8,
        marginStart: 7.5
    },
    flagContainer: {
        flexDirection: 'row',
        marginTop: 11,
        alignItems:'center'
    },
    flag: {
        width: 32,
        height: 22
    },
    numberText: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.gray,
        
    },
    number: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.gray,
        marginStart: 9
    },
    textInput:{
        color:COLORS.gray,
        backgroundColor:COLORS.white,
        marginTop:12,
        fontFamily:'Montserrat-Regular',
        
    },
    loginButton:{
        backgroundColor:COLORS.primary,
        height:48,
        marginTop:48,
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
    termsBox:{
        textAlign:'center',
        marginTop:24,
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
        marginStart: 9
    },

})
export default signUpStyle;