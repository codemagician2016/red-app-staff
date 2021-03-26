import { ImageBackground, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { shadow } from 'react-native-paper';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const profileStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop: 0, marginBottom: 100},
    header:{backgroundColor:COLORS.white},
    card:{marginTop:0,
    shadowOpacity:0,
    borderWidth:0,
    backgroundColor:'#ccc'
    },
    cardItem:{
    shadowOpacity:0,
    borderWidth:0,
    },
    menurow:{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:"#F0F2F4",height:48},
    profilebox:{justifyContent:'center',flex:1,flexDirection:'column',width:'100%',alignItems:'center',marginTop:20},
    change:{marginTop:14},
    changetext:{color:COLORS.blue,marginTop:14,textTransform:'capitalize'},
    headingBox:{
        backgroundColor:'#F7F7F7',
        height:65,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        flex:1,
        paddingLeft:16
    },
    pickerinput:{
        width:"100%",color:COLORS.black,fontSize:12,
    },
    headingText:{fontSize:14,fontWeight:'700',color:COLORS.black},
    profileText:{flex:.5,color:COLORS.black,fontSize:12,fontWeight:'500'},
    textinput:{
        height: 40, borderColor: '#fff', borderWidth: 0,textAlign:'left',flex:.5
    },
    footer:{
        padding:16,
        height:58
    },
    footertab:{  height:58},
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
    profile:{
        height:100,
        width:100
    }

})
export default profileStyle;