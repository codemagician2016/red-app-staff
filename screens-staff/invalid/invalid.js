
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import invalidStyle from './invalidStyle';
import { Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import Home from '../home/home'

class Banned extends React.Component {

    constructor(props) {
        super();
        this.state = {

        };
    }


    render() {

        return (
            <>

                <Appbar.Header style={invalidStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    {/* <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} /> */}
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>

                    <LinearGradient
                        colors={['#253134', '#1A2123', '#181D1F']} style={invalidStyle.linearGradient}>
                        <View style={invalidStyle.mainContainer}>

                            <View style={invalidStyle.imgbox}>
                                <View style={invalidStyle.qrbox}>
                                    <Image style={invalidStyle.qrImg} source={require('../../src/images/close.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', marginTop: 30, fontWeight: '700', fontSize: 24 }}>Invalid</Text>
                                </View>
                            </View>
                        </View>

                    </LinearGradient>

                </ScrollView>
                {/* <Footer style={invalidStyle.footer}>
                            <FooterTab style={{backgroundColor:'transparent'}}>
                               
                            </FooterTab>
                        </Footer> */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                    <Button style={invalidStyle.footer}
                         onPress={() => this.props.navigation.navigate("scanqr", { eventId: this.props.route.params.eventId })}
                    >
                        <Text style={{ color: '#fff' }}>Scan</Text>
                    </Button>
                </View>
            </>
        )
    }
}

export default Banned
