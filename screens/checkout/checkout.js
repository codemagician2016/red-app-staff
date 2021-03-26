
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import checkoutStyle from './checkoutStyle';
import { Button, Appbar, Headline, Paragraph, Avatar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Footer, FooterTab, Icon, Header, Left, Right, Title, Switch, Picker, Form } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';

class checkout extends React.Component {

    constructor(props) {
        super();
        this.initializeState()
    }

    initializeState() {
        this.state = {
            selected: "key1",
            event: {},
            ticketTypes: [],
            totalAmount: 0,
            totalReserveSeat: 0,
            isCodSelected: false,
            isCreditCardSelected: false,
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.initializeState()
            this.getOrderData()
            this.getEventDetail()
        })
        this.getEventDetail()
        this.getOrderData()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getOrderData() {
        try {
            let totalAmount = 0, totalSeats = 0
            let data = await AsyncStorage.getItem("orderData")

            if (data) {
                data = JSON.parse(data)
                this.setState({ ticketTypes: data.orderData })
                if (this.state.ticketTypes.length > 0) {
                    this.state.ticketTypes.map(_ => {
                        totalAmount += Number(_.amount) * Number(_.orderQty),
                            totalSeats += Number(_.orderQty)
                    })
                    this.setState({ totalAmount: totalAmount })
                    this.setState({ totalReserveSeat: totalSeats })
                }
            }
        }
        catch (err) {
            console.warn(err.message)
        }
    }


    async getEventDetail() {
        try {
            let response = await axios.get(config.apiUrl + `event/${this.props.route.params.id}`)
            let res = response.data ? response.data : {}
            this.setState({ event: res.data ? res.data : {} })
        }
        catch (err) {
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    async checkout() {
        try {
            if (this.state.isCodSelected || this.state.isCreditCardSelected) {
                let payload = {
                    ticketTypes: this.state.ticketTypes,
                    amount: this.state.totalAmount,
                    totalSeats: this.state.totalReserveSeat,
                    paymentMode: this.state.isCodSelected ? "cod" : "creditCard"
                }
                let res = await AsyncStorage.setItem("orderData", JSON.stringify(payload))
                this.props.navigation.navigate('ticketInformation', { id: this.state.event._id })
            }
            else {
                Toast.show({
                    text1: "please select payment mode",
                    type: 'error'
                });
            }
        }
        catch (err) {
            console.warn(err.message)
        }
    }

    render() {

        return (
            <>
                {/* <Appbar.Header style={checkoutStyle.header}>
                    <Appbar.BackAction />
                    <Appbar.Action IconEntypo={menu} />
                    <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" />
                    <Appbar.Content style={checkoutStyle.headerText} color={'#000'} title="Checkout" />
                    <Appbar.Content style={checkoutStyle.headerText} color={'#000'} title="Checkout" />
                </Appbar.Header> */}
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={checkoutStyle.headerTitle}>Checkout</Title>
                    </Body>
                    <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconEntypo style={{ marginRight: 8, color: '#704ADC' }} name="clock"></IconEntypo>
                        <Text style={checkoutStyle.headerText}>{this.state.event.time?.hours} : {this.state.event?.time?.minutes}</Text>
                    </Right>
                </Header>

                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0, marginBottom: 0 }}>
                    <View style={checkoutStyle.mainContainer}>
                        {
                            this.state.event.isCod ?
                                <Pressable onPress={() => {
                                    this.setState({ isCreditCardSelected: false })
                                    this.setState({ isCodSelected: true })
                                }}>
                                    <Card style={this.state.isCodSelected ? checkoutStyle.selectedCard : checkoutStyle.checkoutCard}>
                                        <CardItem style={checkoutStyle.checkoutCardItem}>
                                            {/* <Icon active name="logo-googleplus" /> */}
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={checkoutStyle.cardTitle}>COD</Text>
                                                <Text style={checkoutStyle.cardtext}>Pay at Door, Delivery fees will apply</Text>
                                            </View>
                                            <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Image
                                                    style={checkoutStyle.welcomeImg}
                                                    source={require('../../src/images/cod.png')}
                                                />
                                            </Right>
                                        </CardItem>
                                    </Card>
                                </Pressable>
                                : null
                        }
                        {
                            this.state.event.isCreditCard ?
                                <Pressable onPress={() => {
                                    this.setState({ isCreditCardSelected: true })
                                    this.setState({ isCodSelected: false })
                                }}>
                                    <Card style={this.state.isCreditCardSelected ? checkoutStyle.selectedCard : checkoutStyle.checkoutCard}>
                                        <CardItem style={checkoutStyle.checkoutCardItem}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={checkoutStyle.cardTitle}>Credit Card</Text>
                                                <Text style={checkoutStyle.cardtext}>Paying online through Stripe app</Text>
                                            </View>
                                            <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Image
                                                    style={checkoutStyle.welcomeImg}
                                                    source={require('../../src/images/card.png')}
                                                />
                                            </Right>
                                        </CardItem>
                                    </Card>
                                </Pressable>
                                : null
                        }
                        {
                            this.state.event.isCreditCard ?
                                <View>
                                    <Card style={this.state.isCreditCard ? checkoutStyle.selectedCard : checkoutStyle.checkoutCard}>
                                        <CardItem style={checkoutStyle.checkoutCardItem}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={checkoutStyle.cardTitle}>**** **** **** 5967</Text>
                                                <Text style={checkoutStyle.cardtext}>Expires 09/25</Text>
                                            </View>
                                            <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Image
                                                    style={checkoutStyle.welcomeImg}
                                                    source={require('../../src/images/savecard.png')}
                                                />
                                            </Right>
                                        </CardItem>
                                    </Card>

                                    <Card style={checkoutStyle.walletCard}>
                                        <CardItem style={checkoutStyle.walletCardItem}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={checkoutStyle.walletcardTitle}>Wallet Balance</Text>
                                                <Text style={checkoutStyle.walletcardtext}>(520,000)</Text>
                                            </View>
                                            <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Switch style={{ color: COLORS.primary }} value={true} />
                                            </Right>
                                        </CardItem>
                                    </Card>
                                </View>
                                : null
                        }
                        <View style={checkoutStyle.addition}>
                            <Text style={checkoutStyle.additionText}>* Addition fees will be applied on orders with Cash On Delivery.</Text>
                            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
                                <Text style={checkoutStyle.additionText}>Add</Text>
                                <Pressable>
                                    <Text style={checkoutStyle.gift}> Gift Card</Text>
                                </Pressable>

                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 34 }} />
                        <Form>
                            <View style={{ marginRight: 16, marginLeft: 16 }}>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="City"
                                    iosIcon={<Icon type="FontAwesome" name="angle-down" />}
                                    style={checkoutStyle.picker}
                                    selectedValue={this.state.event.city}
                                // onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="Baghdad" value={this.state.event.city} />
                                    {/* <Picker.Item label="Baghdad" value="key1" /> */}

                                </Picker>
                            </View>
                        </Form>
                        <View style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 16 }} />
                        <View style={checkoutStyle.summary}>
                            <Text style={checkoutStyle.orderTitle}>Order summary</Text>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontSize: 12, fontWeight: '500' }}>Total seats</Text>
                                <Text style={{ fontSize: 12, fontWeight: '600' }}>{this.state.totalReserveSeat}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontSize: 12, fontWeight: '500' }}>Total Amount</Text>
                                <Text style={{ fontSize: 12, fontWeight: '600' }}>{this.state.totalAmount}$</Text>
                            </View>
                            {/* <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontSize: 12, fontWeight: '500' }}>Service fee</Text>
                                <Text style={{ fontSize: 12, fontWeight: '600' }}>50$</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginTop: 15 }}>
                                <Text style={{ fontSize: 12, fontWeight: '500' }}>Delivery fee</Text>
                                <Text style={{ fontSize: 12, fontWeight: '600' }}>50$</Text>
                            </View> */}
                        </View>
                       
                    </View>
                  
                </ScrollView>

<Card style={checkoutStyle.rdFooter}>
                        <Body >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                                <View style={{ flex: .4 }}>
                                    <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                        <Text style={checkoutStyle.lightText}>Total</Text>
                                        <Text style={checkoutStyle.darkText}>${this.state.totalAmount}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: .5 }}>
                                    <Button mode="contained" style={checkoutStyle.booknow}
                                        onPress={() => this.checkout()}
                                    >Continue</Button>
                                </View>
                            </View>
                        </Body>
                    </Card>

            </>
        )
    }
}

export default checkout
