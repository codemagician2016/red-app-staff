import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const changepasswordStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    heading:{
        fontSize:24,
        fontWeight:'700',
        marginBottom:53,
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
    centerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:25,
    },
    loginButton:{
        backgroundColor:COLORS.primary,
        height:48,
        justifyContent:'center',
        fontSize:14,
        borderRadius:8,
        width:207
    },
    eyeIcon:{
        // color:COLORS.gray,
        position:'absolute',
        right:16,
        justifyContent:'center',
        top:26,
        width:20,
        backgroundColor:COLORS.white,
        
    },
    error:{
        fontSize:13
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        zIndex:200,
      },
      modalView: {
        flexDirection:'column',
        justifyContent:'center',
        width:305,
        height:186,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      imageContainer:{
        backgroundColor:COLORS.primary,
        width:74,
        height:74,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:37,
        position:'absolute',
        top:-40
      },
      openButton: {
        backgroundColor: COLORS.primary,
        width:'100%',
        borderRadius:8,
        height:48,
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        elevation: 2,
        marginTop:25
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginTop:69,
        textAlign: "center",
        fontSize:14,
        fontWeight:'600',
      },
      backdrop:{
          width:'100%',
          height:'100%',
          backgroundColor:'rgba(0, 0, 0, 0.8)',
          position:'absolute',
          zIndex:99


      },
      errText:{
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.red,
        marginStart: 9
    },
})
export default changepasswordStyle;