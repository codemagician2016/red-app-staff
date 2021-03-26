import { ImageBackground, StyleSheet } from 'react-native';
import { COLORS } from '../../src/styles/colors'
// import { StyleSheet } from "./text.js";
const walletStyle = StyleSheet.create({
    mainContainer: { margin: 0, padding: 0, marginTop: 8 },
    header: {
        backgroundColor: COLORS.white,
    },
    main: {
        marginBottom: 180,
    },
    wallet: {
        width: '100%',
        resizeMode: 'contain',marginTop:'10%'
    },
    paymentcard:{backgroundColor:COLORS.primary,height:96,borderTopLeftRadius:20,borderTopRightRadius:20,alignItems:'center',flexDirection:'row',justifyContent:'center',width:'100%',flex:1},
    row:{flexDirection:'row',width:'100%',flex:1,marginTop:"2%"},
    alignItemsCenter:{alignItems:'center'},
    justifycontentbetween:{justifyContent:'space-between'},
    balanceText:{fontSize:16,fontWeight:'600',color:COLORS.white},
    balance:{fontSize:30,fontWeight:'700',color:COLORS.white},
    paymentOption:{backgroundColor:COLORS.white,borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:-15},
    paymentText:{fontSize:14,fontWeight:"700",color:COLORS.black,marginTop:'10%',marginBottom:10},
    checkoutCard: { marginRight: 16, borderRadius: 8, marginBottom: 10,width:'100%' },
    checkoutCardItem: { borderRadius: 8, height: 68 },
    cardTitle: { fontWeight: '700', fontSize: 14, color: COLORS.black },
    cardtext: { fontWeight: '500', fontSize: 10, color: COLORS.black },
})
export default walletStyle;
