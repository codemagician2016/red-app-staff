import { StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const verifyPhonenNumberStyle = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        height: 139,
        width: 119,
        paddingStart: 23,
        paddingEnd: 23,
        marginTop: 0,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    heading:{
        fontSize:24,
        color:COLORS.black,
        fontWeight:'700',
        
    },
    numberText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.gray,
        marginTop:52
        
    },
    textInput: {
        backgroundColor: COLORS.white
    },
    numberRow: {
        flexDirection: 'row',
        marginTop: 50,
        
    },
    col2: {
        flex: .2,
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
        marginBottom: 0,
        alignItems:'center'
    },
    flag: {
        width: 32,
        height: 22,
        marginTop:30
    },
    
    number: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.gray,
        marginStart: 9,
        marginTop:30
    },
    textInput:{
        color:COLORS.gray,
        backgroundColor:COLORS.white,
        marginTop:12,
        fontFamily:'Montserrat-Regular',
        
    },
    centerContainer:{
        textAlign:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },
    para:{
        textAlign:'center',
        marginTop:30,
        fontSize:12,
        width:320
    },
    confirm:{
        backgroundColor:COLORS.primary,
        height:48,
        marginTop:70,
        justifyContent:'center',
        fontSize:14,
        borderRadius:8,
        textTransform:'lowercase'
    },
    
    link:{
        color:COLORS.primary,
        fontWeight:'600',
        fontSize:14
    },
  
})
export default verifyPhonenNumberStyle;