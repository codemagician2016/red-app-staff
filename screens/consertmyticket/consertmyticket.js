import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable, ActivityIndicator } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import consertmyticketStyle from './consertmyticketStyle';
import { Button, Appbar, Headline, Title, Paragraph, Avatar, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, } from 'native-base';
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from '../../src/styles/colors';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment'

class consertmyticket extends React.Component {

    constructor(props) {
        super();
        this.initializeState()
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.initializeState()
            this.getAllVisitors()
        })
        this.getAllVisitors()
    }

    initializeState() {
        this.state = {
            selected: "key1",
            isLoading: false,
            visitors: [],
            event: {}
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getAllVisitors() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `visitors/${this.props.route.params.bookingId}`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ visitors: res.data.visitors ? res.data.visitors : [] })
                this.setState({ event: res.data.event ? res.data.event : {} })
            }
            else {
                Toast.show({
                    text1: res.message,
                    type: 'success'
                });
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

    render() {

        return (
            <>
                <Appbar.Header style={consertmyticketStyle.header}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()} />
                    {
                        this.state.isLoading ?
                            null
                            :
                            <Appbar.Content title={this.state.event.title} subtitle={moment(this.state.event.date).format('DD/MM/YYYY') + '•' + this.state.event.time?.hours + ':' + this.state.event.time?.minutes + '•' + this.state.event?.city} />
                    }


                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Ionicons" style={{ color: COLORS.black, marginRight: 16, fontSize: 30 }} name="search-outline"
                        onPress={() => this.props.navigation.navigate('myfavorite')}
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
                        <ScrollView style={consertmyticketStyle.main, { marginHorizontal: 0 }}>
                            <View style={consertmyticketStyle.mainContainer}>
                                {
                                    this.state.visitors.map((_, index) => {
                                        return (
                                            <Pressable key={index.toString()}
                                                onPress={() => this.props.navigation.navigate('ticketdetail', { visitorId: _._id })} >
                                                <Card style={consertmyticketStyle.card}>
                                                    <CardItem style={consertmyticketStyle.cardItem}>
                                                        <Body style={consertmyticketStyle.cardBody}>
                                                            <View style={consertmyticketStyle.row}>
                                                                <View style={consertmyticketStyle.col8}>
                                                                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                                        <View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                                                <IconFontAwesome style={{ fontSize: 10, color: COLORS.gray, marginTop: 28, marginRight: 8 }} name='user' ></IconFontAwesome>
                                                                                <Text style={consertmyticketStyle.seat}>{_.name} </Text>

                                                                            </View>
                                                                            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                                                                <IconMaterialCommunityIcons style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='ticket-confirmation'></IconMaterialCommunityIcons>
                                                                                <Text style={consertmyticketStyle.captionText} note>{_.mobile}</Text>
                                                                            </View>

                                                                        </View>
                                                                        <View>
                                                                            <IconFeather style={{ fontSize: 24, color: COLORS.gray, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                                <View style={consertmyticketStyle.col2}>
                                                                    <View style={consertmyticketStyle.innerRow}>
                                                                        <QRCode
                                                                            value={JSON.stringify(_)}
                                                                            size={50}
                                                                        />
                                                                        {/* <Image
                                                                    style={consertmyticketStyle.qr}
                                                                    source={require('../../src/images/qr.png')}
                                                                />
                                                                <Image
                                                                    style={consertmyticketStyle.dtted}
                                                                    source={require('../../src/images/dotted.png')}
                                                                /> */}
                                                                        <View style={consertmyticketStyle.rightDotImg}></View>
                                                                        <View style={consertmyticketStyle.leftDotImg}></View>
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

                                {/* <Card style={consertmyticketStyle.card}>
                            <CardItem style={consertmyticketStyle.cardItem}>
                                <Body style={consertmyticketStyle.cardBody}>
                                    <View style={consertmyticketStyle.row}>
                                        <View style={consertmyticketStyle.col8}>
                                            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View>
                                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                        <IconFontAwesome style={{ fontSize: 10, color: COLORS.gray, marginTop: 28, marginRight: 8 }} name='user' ></IconFontAwesome>
                                                        <Text style={consertmyticketStyle.seat}>Ibraheem Hassan </Text>

                                                    </View>
                                                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                                        <IconMaterialCommunityIcons style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='ticket-confirmation'></IconMaterialCommunityIcons>
                                                        <Text style={consertmyticketStyle.captionText} note>Backstage A </Text>
                                                    </View>

                                                </View>
                                                <View>
                                                    <IconFeather style={{ fontSize: 24, color: COLORS.primary, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={consertmyticketStyle.col2}>
                                            <View style={consertmyticketStyle.innerRow}>
                                                <Image
                                                    style={consertmyticketStyle.qr}
                                                    source={require('../../src/images/qr.png')}
                                                />
                                                <Image
                                                    style={consertmyticketStyle.dtted}
                                                    source={require('../../src/images/dotted.png')}
                                                />
                                                <View style={consertmyticketStyle.rightDotImg}></View>
                                                <View style={consertmyticketStyle.leftDotImg}></View>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card> */}
                                <View style={consertmyticketStyle.notebox}>
                                    <Text style={consertmyticketStyle.note}>
                                        * Place the QR tickets in safly, Ticket won’t be valid once QRis scanned, by any person.
                        </Text>

                                </View>
                            </View>

                        </ScrollView>
                }

            </>
        )
    }
}

export default consertmyticket
