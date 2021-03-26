import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable, TextInput } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import TicketOption1Style from './ticket-option-1-style';
import { Button, Appbar, Headline, Title, Paragraph, Avatar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import profile from '../profile/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cos } from 'react-native-reanimated';

class TicketOption1 extends React.Component {

    constructor(props) {
        super(props);
        this.initializeState()
    }

    initializeState() {
        this.state = {
            images: [],
            selected: "key1",
            event: {},
            ticketType: [],
            ticketQty: 0,
            totalAmount: 0,
            reserveTickets: [],
            selectedSeats: []
        };
        this.setState({ reserveTickets: [] })
        this.setState({ selectedSeats: [] })
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.initializeState()
            this.deleteOrderData()
            this.getEventDetail()
        })
        this.deleteOrderData()
        this.getEventDetail()
    }

    async deleteOrderData() {
        await AsyncStorage.removeItem('orderData')
    }

    async getEventDetail() {
        try {
            let response = await axios.get(config.apiUrl + `event/${this.props.route.params.id}`)
            let res = response.data ? response.data : {}
            await this.setState({ event: res.data ? res.data : {} })
            await this.setState({ totalAmount: 0 })
            await this.setState({ ticketType: this.state.event.ticketType ? this.state.event.ticketType : [] })
            let previousOrderData = await AsyncStorage.getItem('orderData')
            previousOrderData = JSON.parse(previousOrderData)

            if (res.success) {
                if (this.state.ticketType.length > 0) {
                    this.state.ticketType.map(_ => {
                        _.orderQty = 0
                    })
                }
                let images = this.state.event.sittingImages.map(_ => {
                    return `${config.apiUrl}public/eventSitting/${this.state.event.id}/${_}`
                })
                this.setState({ images: images })
            }
        }
        catch (err) {
            console.warn(err)
            // Toast.show({
            //     text1: err.message,
            //     type: 'error'
            // });
        }
    }

    showImage(index) {
        let imageData = this.state.images[index]
        if (imageData) {
            this.props.navigation.navigate('ticketoption2', { image: imageData })
        }
    }

    async increasetQty(ticket) {
        if (parseInt(ticket.quantity) > ticket.orderQty) {
            ticket.orderQty = ticket.orderQty + 1
            let index = this.state.reserveTickets.indexOf(ticket)
            if (index < 0) {
                await this.setState({ reserveTickets: [...this.state.reserveTickets, ticket] })
            }
            await this.setState({ selectedSeats: [...this.state.selectedSeats, ticket] })
            let totalAmt = this.state.totalAmount + parseInt(ticket.amount)
            this.setState({ totalAmount: totalAmt })
        }
        else {
            Toast.show({
                text1: "Oops Quantity Reached !",
                type: 'error'
            });
        }
    }

    async descreaseQty(ticket) {
        if (ticket.orderQty > 0) {
            // this.setState({ ticketQty: this.state.ticketQty - 1 })
            ticket.orderQty = ticket.orderQty - 1
            let seatIndex = this.state.selectedSeats.indexOf(ticket._id)
            let selectedSeats = this.state.selectedSeats
            selectedSeats.splice(seatIndex, 1)
            await this.setState({ selectedSeats: selectedSeats })

            if (ticket.orderQty == 0) {
                let index = this.state.reserveTickets.indexOf(ticket)
                let tickets = []
                tickets = this.state.reserveTickets
                tickets.splice(index, 1)
                this.setState({ reserveTickets: tickets })
            }
            let amount = this.state.totalAmount - ticket.amount
            await this.setState({ totalAmount: amount })
        }
    }

    async setOrderData() {
        try {
            let payload = {
                orderData: this.state.reserveTickets
            }
            let response = await AsyncStorage.setItem("orderData", JSON.stringify(payload))
            await AsyncStorage.setItem("selectedSeats", JSON.stringify(this.state.selectedSeats))
            this.props.navigation.navigate('checkout', { id: this.state.event._id })
        }
        catch (err) {
            console.warn(err)
        }
    }

    render() {

        return (
            <>
                <Appbar.Header style={TicketOption1Style.header}>
                    <Appbar.BackAction onPress={() => {
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Reserve" />
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" /> */}
                </Appbar.Header>
                <ScrollView style={TicketOption1Style.main, { marginHorizontal: 0 }}>
                    <View style={TicketOption1Style.mainContainer}>
                        <SliderBox dotStyle={{ marginBottom: 30 }}
                            style={TicketOption1Style.slider} images={this.state.images}
                            onCurrentImagePressed={(index) => this.showImage(index)} />


                        {
                            this.state?.ticketType?.map((_, index) => {
                                return (
                                    <Card style={TicketOption1Style.card} key={index.toString()}>
                                        <CardItem style={TicketOption1Style.cardItem}>
                                            <Body style={TicketOption1Style.cardBody}>
                                                <View style={TicketOption1Style.row}>
                                                    <View style={TicketOption1Style.col8}>
                                                        <Text style={TicketOption1Style.seat}>{_.quantity}</Text>
                                                        <Text style={TicketOption1Style.captionText} note>{_.description}</Text>
                                                        <Text style={TicketOption1Style.price} note>${_.amount}</Text>
                                                    </View>
                                                    <View style={TicketOption1Style.col2}>
                                                        <View style={TicketOption1Style.innerRow}>
                                                            <View style={TicketOption1Style.col1}>
                                                                {/* <Button icon onPress={() => this.increasetQty(_, index)}> */}
                                                                <Icon
                                                                    icon onPress={() => this.increasetQty(_, index)}
                                                                    style={{ fontSize: 20, marginLeft: 0 }} name='chevron-up' />
                                                                {/* </Button> */}
                                                            </View>
                                                            <View style={TicketOption1Style.col1}>
                                                                <Text style={{ textAlign: 'center', color: COLORS.primary, fontWeight: '700', fontSize: 16 }}>{_.orderQty}</Text>
                                                            </View>
                                                            <View style={TicketOption1Style.col1}>
                                                                {/* <Button style={{height:10,width:10,padding:0}} icon onPress={() => {
                                                                    this.descreaseQty(_, index)
                                                                }}> */}
                                                                <Icon icon onPress={() => {
                                                                    this.descreaseQty(_, index)
                                                                }} style={{ fontSize: 20, marginLeft: 0 }} name='chevron-down' />
                                                                {/* </Button> */}
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={TicketOption1Style.rightDotImg}></View>
                                                <View style={TicketOption1Style.leftDotImg}></View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                )
                            })
                        }
                        <View style={TicketOption1Style.lowerBox}>
                            <Pressable>
                                <Text style={TicketOption1Style.lowerBoxText}>Enter Promocode</Text>
                            </Pressable>
                            <View style={{ marginTop:10}}>
                            <TextInput style={TicketOption1Style.textInput}
                                placeholder="Type your promocode here"
                            />
                            <Button mode="" style={TicketOption1Style.apply}>Apply</Button>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <Card style={TicketOption1Style.rdFooter}>
                    <Body >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                            <View style={{ flex: .4 }}>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={TicketOption1Style.lightText}>Total</Text>
                                    <Text style={TicketOption1Style.darkText}>${this.state.totalAmount}</Text>
                                </View>
                            </View>
                            <View style={{ flex: .5 }}>
                                <Button mode="contained" style={TicketOption1Style.soldOut}
                                    onPress={() => this.setOrderData()}
                                >Reserve</Button>
                            </View>
                        </View>
                    </Body>
                </Card>
            </>
        )
    }
}

export default TicketOption1
