import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const successStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop: 0, marginBottom: 0 },
   
    map: { width: '100%',resizeMode: 'contain',marginTop:'40%' },
    text:{textAlign:'center',marginTop:9,color:COLORS.black,fontSize:14},
    box:{marginTop:40},
    footer:{
        padding:16
    },
    booknow: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        fontSize: 13,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: "100%",
        marginBottom: 52
    },


})
export default successStyle;