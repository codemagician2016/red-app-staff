import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const aboutusStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginBottom:'10%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'10%',
        

    },
    logo: {
        // height: 139,
        width: 119,
        paddingStart: 23,
        paddingEnd: 23,
        marginTop: 0,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginBottom:16
    },
    row:{flexDirection:'row',justifyContent:'center'},
    socialmedia:{width:40,marginRight:'5%'},
    caption:{fontSize:12,fontWeight:'400',color:'#817C8B'},
    header:{backgroundColor:COLORS.white},
    headeing:{color:COLORS.black,fontWeight:'600',fontSize:14,marginTop:28},
    text:{fontSize:14,fontWeight:'500',color:'#817C8B',marginTop:'10%'},
})
export default aboutusStyle;