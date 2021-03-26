
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import bannedStyle from './bannedStyle';
import { Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import axios from 'axios';
import config from '../../config'
import Toast from 'react-native-toast-message';

class Banned extends React.Component {

    constructor(props) {
        super();
        this.state = {

        }; 
    }

    async unBlock() {
        try {
            let payload = {
                bookingId: this.props.route.params.bookingId,
                visitorId: this.props.route.params.visitorId,
                eventId: this.props.route.params.eventId
            }
            let response = await axios.put(config.apiUrl + `ublock`, payload)
            let res = response.data ? response.data : {}
            if (res.success) {
                Toast.show({
                    text1: res.message,
                    type: 'success'
                });
                this.props.navigation.navigate('eventVisitors', { eventId: this.props.route.params.eventId })
            }
            else {
                Toast.show({
                    text1: res.message,
                    type: 'error'
                });
            }
        }

        catch (err) {
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    render() {

        return (
            <>

                <Appbar.Header style={bannedStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    {/* <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} /> */}
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>

                    <LinearGradient
                        colors={['#BA2A26', '#9C211E', '#0F0F0F']} style={bannedStyle.linearGradient}>
                        <View style={bannedStyle.mainContainer}>

                            <View style={bannedStyle.imgbox}>
                                <View style={bannedStyle.qrboxx}>
                                    <Image style={bannedStyle.qrImg} source={require('../../src/images/valid.png')} />
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: '700', marginTop: 37, }}>

                                        {this.props.route.params.name ? this.props.route.params.name : null}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 29 }}>
                                        <IconAntDesign type="EvilIcons" style={bannedStyle.iconColor} name="close" ></IconAntDesign>
                                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>Banned</Text>
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
                {/* <Footer style={bannedStyle.footer}>
                            <FooterTab style={{backgroundColor:'transparent'}}>
                               
                            </FooterTab>
                        </Footer> */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                    <Button style={bannedStyle.footer}
                        onPress={() => this.unBlock()}
                    >
                        <Text style={{ color: '#fff' }}>Unblock</Text>
                    </Button>
                </View>
            </>
        )
    }
}

export default Banned
