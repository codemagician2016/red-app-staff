import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const faqStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginBottom:'10%'
    },
    header:{backgroundColor:COLORS.white},
    headeing:{color:COLORS.black,fontWeight:'600',fontSize:13,marginBottom:15},
    collapsheader:{
        marginLeft:16,marginRight:16,backgroundColor:COLORS.white,height:48,justifyContent:'center',borderRadius:5,paddingLeft:16,paddingRight:16,
    },
    collapsbody:{  marginLeft:16,marginRight:16,backgroundColor:COLORS.white,height:48,justifyContent:'center',borderRadius:5,paddingLeft:16,paddingRight:16,borderTopRightRadius:0,borderTopLeftRadius:0,padding:16},
    collapstext:{fontSize:12,lineHeight:20,color:'#817C8B'},
    headerbox:{flexDirection:'row',justifyContent:'space-between'},
    collapse:{marginBottom:16}
})
export default faqStyle;