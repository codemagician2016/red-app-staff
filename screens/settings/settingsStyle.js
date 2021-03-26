import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const settingsStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginBottom:'10%'
    },
    row:{flexDirection:'row',justifyContent:'flex-end',width:'100%',flex:1,alignItems:'center'},
    text:{color:COLORS.primary,fontWeight:'600',fontSize:14,marginRight:16},
    maintext:{color:COLORS.black,fontSize:14,fontWeight:'500'},
    card:{shadowOpacity:0,borderColor:COLORS.white,padding:0}
})
export default settingsStyle;