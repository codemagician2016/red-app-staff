import { StyleSheet } from 'react-native';
import {COLORS} from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const welcomeStyle=StyleSheet.create({
skip:{
    fontSize:14,
    color:COLORS.black,
    textAlign:'right',
    marginEnd:16,
    marginTop:"10%"
},
welcomeImg:{
height:239,
width:'100%',
paddingStart:23,
paddingEnd:23,
marginTop:"10%",
resizeMode:'contain'
},
welcomeHeading:{
    marginTop:'10%',
    textAlign:'center',
    fontSize:24,
    fontWeight:'700',
    color:COLORS.black
},
welcomeText1:{
    marginTop:18,
    textAlign:'center',
    fontSize:14,
    fontWeight:'400',
    color:COLORS.black,
    justifyContent:'center',
},
welcomeText2:{
    textAlign:'center',
    fontSize:14,
    fontWeight:'400',
    color:COLORS.black,
    justifyContent:'center',
},
row:{
flexDirection:'row',
paddingEnd:16,
paddingStart:16,
alignItems:'center',

},

mt63:{
    marginTop:"30%",
    marginBottom:"10%"
},
col6:{
    flex:1,
    
},
priButton:{
    backgroundColor:COLORS.primary,
    borderRadius:8,
    width:200,
    height:50,
    alignItems:'center',
    padding:16,
    
},
buttonText:{
    fontSize:14,
    color:COLORS.white,
    fontWeight:'700',
    lineHeight:15.85
},
circleFill:{
    backgroundColor:COLORS.primary,
    width: 8,
    height: 8,
    borderRadius: 8,
    borderWidth:1,
    borderColor:COLORS.lightGray,
    marginEnd:10,
},
circle:{
    
    width: 8,
    height: 8,
    borderRadius: 8,
    borderWidth:1,
    borderColor:COLORS.lightGray,
    marginEnd:10,
},

})
export default welcomeStyle;