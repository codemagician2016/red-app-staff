import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const validStyle = StyleSheet.create({
    mainContainer: { marginTop: 80, padding: 0 },
    header: {
        backgroundColor:'transparent',
        position: 'absolute',
        top: 66,
        width:'100%',
        marginLeft:0,marginRight:1,
        zIndex: 99
    },
    linearGradient:{minHeight:1000,},
    qrImg:{width:224,height:227,resizeMode:'contain',},
    qrbox:{backgroundColor:'#B7BBBD',borderRadius:20,width:224},
    imgbox:{flexDirection:'row',justifyContent:'center',flex:1,alignItems:'center',height:'100%',marginTop:'35%'},
    iconColor:{fontSize:20,color:'#fff',marginRight:5},
    footer:{position:'absolute',bottom:50,zIndex:999,backgroundColor:COLORS.primary,width:'90%',justifyContent:'center',height:48,borderRadius:8}
})
export default validStyle;