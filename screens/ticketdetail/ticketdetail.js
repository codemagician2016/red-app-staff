import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable, ActivityIndicator } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import ticketdetailStyle from './ticketdetailStyle';
import { Button, Appbar, Headline, Title, Paragraph, Avatar, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, Footer, FooterTab } from 'native-base';
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment'

class ticketdetail extends React.Component {

    constructor(props) {
        super();
        this.initializeState()
    }

    initializeState() {
        this.state = {
            visitor: {},
            loading: false,
            event: {}
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.initializeState()
            this.getVisitorDetail()
        })
        this.getVisitorDetail()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getVisitorDetail() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `visitor/detail/${this.props.route.params.visitorId}`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ event: res.data.event ? res.data.event : {} })
                this.setState({ visitor: res.data.visitor ? res.data.visitor : {} })
            }
            else {

                console.warn(err)
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
                <Appbar.Header style={ticketdetailStyle.header}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()} />
                    <Appbar.Content title="Ticket Details" />
                    <Icon type="Ionicons" style={{ color: COLORS.black, marginRight: 16, fontSize: 30 }} name="print"

                    />
                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: '30%' }}>
                            <ActivityIndicator />

                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text style={{ textAlign: 'center' }}>Loading...</Text>
                        </View>
                        :
                        <ScrollView style={ticketdetailStyle.main, { marginHorizontal: 0 }}>
                            <View style={ticketdetailStyle.mainContainer}>



                                <Card style={ticketdetailStyle.card}>
                                    <CardItem style={ticketdetailStyle.cardItem}>
                                        <Body style={ticketdetailStyle.cardBody}>
                                            <View style={ticketdetailStyle.row}>
                                                <View style={ticketdetailStyle.col8}>


                                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                        <Text style={ticketdetailStyle.seat}>{this.state.event.title}</Text>

                                                    </View>
                                                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
                                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                                            <Icon style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='calendar' />
                                                            <Text style={ticketdetailStyle.captionText} note>{this.state.visitor?.name} </Text>
                                                        </View>
                                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 8, marginLeft: 28 }}>
                                                            <Icon style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='calendar' />
                                                            <Text style={ticketdetailStyle.captionText} note>{this.state.visitor?.mobile} </Text>
                                                        </View>

                                                    </View>
                                                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 7 }}>
                                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 8, }}>
                                                            <Icon style={{ fontSize: 10, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='calendar' />
                                                            <Text style={ticketdetailStyle.captionText} note>{this.state.event?.time?.hours}:{this.state.event?.time?.minutes}  |  {moment(this.state.event.date).format('DD/MM/YYYY')} </Text>
                                                        </View>
                                                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 8, marginLeft: 28 }}>

                                                            <IconEntypo style={{ fontSize: 14, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='location-pin'></IconEntypo>
                                                            <Text style={ticketdetailStyle.price} note>{this.state.event?.city ? this.state.event?.city : null}</Text>
                                                        </View>
                                                    </View>




                                                </View>
                                                <View style={ticketdetailStyle.col2}>
                                                    <View style={ticketdetailStyle.innerRow}>
                                                        <QRCode
                                                            value={JSON.stringify(this.state.visitor)}
                                                            size={210}
                                                        />
                                                        {/* <Image
                                                            style={ticketdetailStyle.qr}
                                                            source={require('../../src/images/qrfull.png')}
                                                        />
                                                        <Image
                                                            style={ticketdetailStyle.dotted}
                                                            source={require('../../src/images/dotted.png')}
                                                        /> */}
                                                        <View style={ticketdetailStyle.rightDotImg}></View>
                                                        <View style={ticketdetailStyle.leftDotImg}></View>
                                                    </View>
                                                </View>
                                            </View>
                                        </Body>
                                    </CardItem>
                                </Card>

                            </View>

                        </ScrollView>
                }
                {
                    this.state.isLoading ?
                        null :
                        <Footer style={ticketdetailStyle.footer}>
                            <FooterTab style={ticketdetailStyle.footertab}
                                onPress={() => this.props.navigation.navigate('myticket')}
                            >
                                <Button style={ticketdetailStyle.booknow} full

                                >
                                    <Text style={{ color: COLORS.white }}>Share</Text>
                                </Button>
                            </FooterTab>
                        </Footer>
                }
            </>
        )
    }
}

export default ticketdetail
