import { StyleSheet } from 'react-native';
import { COLORS } from './colors'
// import { StyleSheet } from "./text.js";
const globalStyle = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 28,
    marginBottom:20,
    zIndex:100
  },
  lightBackground: {
    backgroundColor: COLORS.white
  },
  grayBackground: {
    backgroundColor: '#F7F8FA'
  },
  fullContainer: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    backgroundColor: COLORS.white,
  },
  row:{flexDirection:'row',flex:1},
  itemCenter:{alignItems:'center'},
  justifyContentBetween:{justifyContent:'space-between'},
   rdFooter:{
        height:122,
        backgroundColor:COLORS.primary,
        borderTopLeftRadius:34,
        borderTopRightRadius:34,
        width:'102%',
        position:'absolute',
        bottom:-10,
        left:-5,
        right:-5
      },
     
})
export default globalStyle;