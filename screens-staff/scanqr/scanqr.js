
import * as React from 'react';
import { View, ScrollView, Text, Image, BackHandler } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import scanqrStyle from './scanqrStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import config from '../../config'
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

class Scanqr extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isScan: false,
            isVisible: false,
            user: ""
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.setState({ isScan: true })
        })
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.setState({ isScan: false })
            this.setState({ isVisible: false })
        });
        this.setState({ isScan: true })
    }

    async scanData(data) {
         if (data.data) {
            let response = JSON.parse(data.data)
            await this.setState({ isScan: false })
            await this.setState({ isVisible: true })
            await this.setState({ user: response })
        }
    }


    async checkVisitor() {
        if (this.state.user.bookingId && this.state.user._id && this.state.user.eventId) {
        try {
            let paylaod = {
                bookingId: this.state.user?.bookingId ? this.state.user?.bookingId : null,
                visitorId: this.state.user?._id ? this.state.user?._id : null,
                // eventId: this.state.user?.eventId ? this.state.user?.eventId : null
                eventId:this.props.route.params.eventId ? this.props.route.params.eventId : null
            }
            this.setState({ isLoading: true })
            let response = await axios.post(config.apiUrl + `check/visitor`, paylaod)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            await this.setState({ isVisible: false })
            if (res.success) {
                await this.setState({ visitor: res.data ? res.data : {} })
                if (this.state.visitor.isCheckIn) {
                    this.props.navigation.navigate('alreadyin',{eventId:this.props.route.params.eventId,name:this.state.user?.name})
                }
                else if (this.state.visitor.isBanned) {
                    this.props.navigation.navigate('banned', { bookingId: this.state.user?.bookingId, visitorId: this.state.user?._id,
                        name:this.state.user?.name,
                        eventId:this.props.route.params.eventId })
                }
                else {
                    this.props.navigation.navigate('valid', { bookingId: this.state.user?.bookingId, visitorId: this.state.user?._id,name:this.state.user?.name,
                    eventId:this.props.route.params.eventId })
                }
            }
            else {
                this.props.navigation.navigate('invalid',{eventId:this.props.route.params.eventId,name:this.state.user?.name})
            }
        }
        catch (err) {
            this.setState({ isLoading: false })
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
        }
        else {
            Toast.show({
                text1: "scan data is invalid",
                type: 'error'
            });
        }

    }


    async banVisitor() {
        try {
            let payload = {
                bookingId: this.state.user?.bookingId ? this.state.user?.bookingId : null,
                visitorId: this.state.user?._id ? this.state.user?._id : null,
                eventId:this.props.route.params.eventId ? this.props.route.params.eventId : null
            }
            let response = await axios.put(config.apiUrl + `ban/visitor`, payload)
            let res = response.data ? response.data : {}
            if (res.success) {
                Toast.show({
                    text1: res.message,
                    type: 'success'
                });
                await this.setState({ isVisible: false })
                this.props.navigation.navigate('banned', { bookingId: this.state.user?.bookingId, visitorId: this.state.user?._id ,
                    eventId:this.props.route.params.eventId,name:this.state.user?.name})
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
                {/* <Appbar.Header style={scanqrStyle.header}>
                    <Appbar.BackAction color={'#fff'} />
                    <Appbar.Content color={'#fff'} title="Scan QR" subtitle={''} />
                </Appbar.Header> */}
                <Appbar.Header style={globalStyle.header}>
                    <Appbar.BackAction onPress={() => {
                        this.setState({ isVisible: false })
                        this.setState({ isScan: false })
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Scan QR" subtitle={''} />
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    {
                        this.state.isScan ?
                            <QRCodeScanner
                                styles={{ height: '100%' }}
                                reactivate={true}
                                onRead={(e) => this.scanData(e)}
                                topContent={
                                    <Text style={{}}>
                                        Place the code in the square and wait a bit</Text>
                                } />
                            : null
                    }

                    {/* <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#243338', '#243338', '#243338']} style={scanqrStyle.linearGradient}>
                        <View style={scanqrStyle.mainContainer}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>
                                Place the code in the square{"\n"}
                                and wait a bit
                            </Text>
                            <View style={scanqrStyle.imgbox}>
                                <View style={scanqrStyle.qrbox}>
                                    <Image style={scanqrStyle.qrImg} source={require('../../src/images/qrbig.png')} />
                                </View>
                            </View>
                        </View>
                    </LinearGradient> */}


                </ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Modal isVisible={this.state.isVisible}>
                        <View style={{ backgroundColor: 'white' }}>
                            <Image soure={require('../../src/images/thumbnail.png')} style={{ height: 40, width: 40 }} />
                            <View style={{ alignItems: 'center' }}>
                                <Text >{this.state.user?.name}</Text>
                                <Text>{this.state.user.mobile}</Text>
                            </View>
                            <Button style={scanqrStyle.loginButton} mode="contained"
                                onPress={async () => {
                                    this.checkVisitor()
                                }}>
                                Check in
                            </Button>
                            <Button style={scanqrStyle.loginButtonRed} mode="contained"
                                onPress={async () => {
                                    this.banVisitor()

                                }}>
                                Ban
                            </Button>
                        </View>
                    </Modal>
                </View>
            </>
        )
    }
}

export default Scanqr
