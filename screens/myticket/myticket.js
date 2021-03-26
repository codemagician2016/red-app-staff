import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable, ActivityIndicator } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import myticketStyle from './myticketStyle';
import { Button, Appbar, Headline, Title, Paragraph, Avatar, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, } from 'native-base';
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import moment from 'moment'
// import {QRCode}  from 'react-native-qrcode-generator';
import QRCode from 'react-native-qrcode-svg';

class myticket extends React.Component {

    constructor(props) {
        super();
        this.initialiazeState()
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getUserTickets()
        })
        this.getUserTickets()
    }

    initialiazeState() {
        this.state = {
            images: [],
            selected: "key1",
            onGoingTickets: [],
            previousTickets: [],
            isLoading: false
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getUserTickets() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + 'user/tickets')
            let res = response.data.data ? response.data.data : {}
            this.setState({ onGoingTickets: res.onGoingEvents ? res.onGoingEvents : [] })
            this.setState({ previousTickets: res.previousEvents ? res.previousEvents : [] })
            this.setState({ isLoading: false })
        }
        catch (err) {
            this.setState({ isLoading: false })
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    render() {

        return (
            <>
                <Appbar.Header style={myticketStyle.header}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()} />
                    <Appbar.Content title="My Tickets" />
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Ionicons" style={{ color: COLORS.black, marginRight: 16, fontSize: 30 }} name="search-outline"
                        onPress={() => this.props.navigation.navigate('consertmyticket')}
                    /> */}
                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: '30%' }}>
                            <ActivityIndicator />

                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text style={{ textAlign: 'center' }}>Loading...</Text>
                        </View>
                        :
                        <ScrollView style={myticketStyle.main, { marginHorizontal: 0 }}>
                            <View style={myticketStyle.mainContainer}>

                                <View style={myticketStyle.lowerBox}>
                                    <Text style={myticketStyle.lowerBoxText}>Ongoing</Text>
                                </View>
                                {
                                    this.state.onGoingTickets.map((_, index) => {
                                        return (
                                            <Pressable onPress={() => {
                                                this.props.navigation.navigate('consertmyticket', { bookingId: _._id })
                                            }} key={index.toString()}>
                                                <Card style={myticketStyle.card} >
                                                    <CardItem style={myticketStyle.cardItem}>
                                                        <Body style={myticketStyle.cardBody}>
                                                            <View style={myticketStyle.row}>
                                                                <View style={myticketStyle.col8}>
                                                                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                                        <View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                                                <Text style={myticketStyle.seat}>{_.event.title}</Text>
                                                                                <Text style={myticketStyle.small}>({_.totalSeats}) </Text>
                                                                            </View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                                                                <Icon style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='calendar' />
                                                                                <Text style={myticketStyle.captionText} note>{moment(_.event.date).format('DD/MM/YYYY')}  | {_.event.time.hours}:{_.event.time.minutes} </Text>

                                                                            </View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 7 }}>
                                                                                <IconEntypo style={{ fontSize: 14, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='location-pin'></IconEntypo>
                                                                                <Text style={myticketStyle.captionText} note>{_.event.city}</Text>
                                                                            </View>
                                                                        </View>
                                                                        <View>
                                                                            <IconFeather style={{ fontSize: 24, color: COLORS.gray, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                                        </View>
                                                                    </View>

                                                                </View>
                                                                <View style={myticketStyle.col2}>
                                                                    <View style={myticketStyle.innerRow}>
                                                                        <QRCode
                                                                            value={JSON.stringify(_)}
                                                                            size={50}
                                                                        />
                                                                        {/* <Image
                                                                    style={myticketStyle.dtted}
                                                                    source={require('../../src/images/dotted.png')}
                                                                /> */}
                                                                        <View style={myticketStyle.rightDotImg}></View>
                                                                        <View style={myticketStyle.leftDotImg}></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </Body>
                                                    </CardItem>
                                                </Card>
                                            </Pressable>
                                        )
                                    })
                                }

                                <View style={myticketStyle.lowerBox}>
                                    <Text style={myticketStyle.lowerBoxText}>Previous</Text>
                                </View>
                                {
                                    this.state.previousTickets.map((_, index) => {
                                        return (
                                            <Pressable onPress={() => {
                                                this.props.navigation.navigate('consertmyticket', { bookingId: _._id })
                                            }} key={index.toString()}>
                                                <Card style={myticketStyle.card} >
                                                    <CardItem style={myticketStyle.cardItem}>
                                                        <Body style={myticketStyle.cardBody}>
                                                            <View style={myticketStyle.row}>
                                                                <View style={myticketStyle.col8}>
                                                                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                                        <View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                                                <Text style={myticketStyle.seat}>{_.event.title} </Text>
                                                                                <Text style={myticketStyle.small}>({_.totalSeats}) </Text>
                                                                            </View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                                                                <Icon style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='calendar' />
                                                                                <Text style={myticketStyle.captionText} note>{moment(_.event.date).format('DD/MM/YYYY')}  | {_.event.time.hours}:{_.event.time.minutes}</Text>

                                                                            </View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 7 }}>
                                                                                <IconEntypo style={{ fontSize: 14, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='location-pin'></IconEntypo>
                                                                                <Text style={myticketStyle.captionText} note>{_.event.city}</Text>
                                                                            </View>
                                                                        </View>
                                                                        <View>
                                                                            <IconFeather style={{ fontSize: 24, color: COLORS.gray, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                                        </View>
                                                                    </View>

                                                                </View>
                                                                <View style={myticketStyle.col2}>
                                                                    <View style={myticketStyle.innerRow}>
                                                                        <QRCode
                                                                            value={JSON.stringify(_)}
                                                                            size={50}
                                                                        />
                                                                        {/* <Image
                                                                    style={myticketStyle.qr}
                                                                    source={require('../../src/images/qr.png')}
                                                                />
                                                                <Image
                                                                    style={myticketStyle.dtted}
                                                                    source={require('../../src/images/dotted.png')}
                                                                /> */}
                                                                        <View style={myticketStyle.rightDotImg}></View>
                                                                        <View style={myticketStyle.leftDotImg}></View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </Body>
                                                    </CardItem>
                                                </Card>
                                            </Pressable>
                                        )
                                    })
                                }
                            </View>

                        </ScrollView>
                }

            </>
        )
    }
}

export default myticket
