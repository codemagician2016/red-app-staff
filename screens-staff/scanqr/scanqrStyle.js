import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const scanqrStyle = StyleSheet.create({
    mainContainer: { marginTop: 80, padding: 0 },
    header: {
        // backgroundColor:'transparent',
        // position: 'absolute',
        top: 66,
        width:'100%',
        marginLeft:0,marginRight:1,
        zIndex: 99
    },
    linearGradient:{minHeight:1000,},
    qrImg:{width:224,height:227,resizeMode:'contain',},
    qrbox:{backgroundColor:'#B7BBBD',borderRadius:20,width:224},
    imgbox:{flexDirection:'row',justifyContent:'center',flex:1,alignItems:'center',height:'100%',marginTop:'35%'},
    loginButton:{
        backgroundColor:COLORS.primary,
        height:48,
        marginTop:'10%',
        justifyContent:'center',
        fontSize:14,
        borderRadius:8,
        marginLeft:10,
        marginRight:10
    },
    loginButtonRed:{
        backgroundColor:'red',
        height:48,
        marginTop:'10%',
        justifyContent:'center',
        fontSize:14,
        borderRadius:8,
        marginLeft:10,
        marginRight:10,
        marginBottom:10
    }
})
export default scanqrStyle;