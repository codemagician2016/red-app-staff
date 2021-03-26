
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import alreadyinStyle from './alreadyinStyle';
import { Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconFeather from "react-native-vector-icons/Feather";
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
//   } from '@react-navigation/drawer';
// import Home from '../home/home'

class Alreadyin extends React.Component {

    constructor(props) {
        super();
        this.state = {

        };
    }


    render() {

        return (
            <>

                <Appbar.Header style={alreadyinStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    {/* <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} /> */}
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>

                    <LinearGradient
                        colors={['#F6AF42', '#F2923D', '#0F0F0F']} style={alreadyinStyle.linearGradient}>
                        <View style={alreadyinStyle.mainContainer}>

                            <View style={alreadyinStyle.imgbox}>
                                <View style={alreadyinStyle.qrboxx}>
                                    <Image style={alreadyinStyle.qrImg} source={require('../../src/images/valid.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: '700', marginTop: 37, }}>
                                        {this.state.user?.name ? this.state.user?.name : null}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 29 }}>
                                        <IconFeather type="EvilIcons" style={alreadyinStyle.iconColor} name="check" ></IconFeather>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>Valid</Text>
                                    </View>
                                    <Text style={{ textAlign: 'center', color: '#fff', marginTop: 30 }}>
                                        User Identification Check Up {"\n"}
                                    is required
                            </Text>
                                </View>
                            </View>
                        </View>

                    </LinearGradient>

                </ScrollView>
                {/* <Footer style={alreadyinStyle.footer}>
                            <FooterTab style={{backgroundColor:'transparent'}}>
                               
                            </FooterTab>
                        </Footer> */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                    <Button style={alreadyinStyle.footer}
                        onPress={() => this.props.navigation.navigate("scanqr", { eventId: this.props.route.params.eventId })}>
                        <Text style={{ color: '#fff' }}>Scan</Text>
                    </Button>
                </View>
            </>
        )
    }
}

export default Alreadyin
