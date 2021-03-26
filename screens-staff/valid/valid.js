
import * as React from 'react';
import { View, ScrollView, Text, Image, ActivityIndicator,BackHandler } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import validStyle from './validStyle';
import { Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconFeather from "react-native-vector-icons/Feather";
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import axios from 'axios';
import config from '../../config'
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

class Valid extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isLoading: false,
            visitor: {}
        };
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'myEvent' }],
            });
        });
    }

    // async checkVisitor() {
    //     try {
    //         let paylaod = {
    //             "bookingId": this.props.route?.params?.bookingId ? this.props.route?.params?.bookingId : null,
    //             "visitorId": this.props.route?.params?.visitorId ? this.props.route?.params?.visitorId : null
    //         }
    //         this.setState({ isLoading: true })
    //         let response = await axios.post(config.apiUrl + `check/visitor`, paylaod)
    //         let res = response.data ? response.data : {}
    //         this.setState({ isLoading: false })
    //         if (res.success) {
    //             await this.setState({ visitor: res.data ? res.data : {} })
    //             if (this.state.visitor.isCheckIn) {
    //                 this.props.navigation.navigate('alreadyin')
    //             }
    //             else if (this.state.visitor.isBanned) {
    //                 this.props.navigation.navigate('banned', { bookingId: this.props.route?.params?.bookingId, visitorId: this.props.route?.params?.visitorId })
    //             }

    //         }
    //         else {
    //             this.props.navigation.navigate('invalid')
    //         }
    //     }
    //     catch (err) {
    //         this.setState({ isLoading: false })
    //         Toast.show({
    //             text1: err.message,
    //             type: 'error'
    //         });
    //     }
    // }

    async checkIn() {
        try {
            let paylaod = {
                bookingId: this.props.route.params.bookingId,
                visitorId: this.props.route.params.visitorId,
            }
            let response = await axios.put(config.apiUrl + `checkIn`, paylaod)
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
                <Appbar.Header style={validStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    {/* <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} /> */}
                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: '30%' }}>
                            <ActivityIndicator />

                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text style={{ textAlign: 'center' }}>Loading...</Text>
                        </View>
                        :
                        <>
                            <ScrollView style={globalStyle.lightBackground}>


                                <LinearGradient
                                    colors={['#9141CE', '#6F3DCD', '#512EA2']} style={validStyle.linearGradient}>
                                    <View style={validStyle.mainContainer}>

                                        <View style={validStyle.imgbox}>
                                            <View style={validStyle.qrboxx}>
                                                <Image style={validStyle.qrImg} source={require('../../src/images/valid.png')} />
                                                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: '700', marginTop: 37, }}>
                                                    {this.props.route.params.name ? this.props.route.params.name : null}
                                                </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 29 }}>
                                                    <IconFeather type="EvilIcons" style={validStyle.iconColor} name="check" ></IconFeather>
                                                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>Valid</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </LinearGradient>

                            </ScrollView>
                            {/* <Footer style={validStyle.footer}>
                            <FooterTab style={{backgroundColor:'transparent'}}>
                               
                            </FooterTab>
                        </Footer> */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                <Button style={validStyle.footer}
                                    onPress={() => this.checkIn()}>
                                    <Text style={{ color: '#fff' }}>Check In</Text>
                                </Button>
                            </View>
                        </>
                }

            </>
        )
    }
}

export default Valid
