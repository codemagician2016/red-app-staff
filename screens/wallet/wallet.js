import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import walletStyle from './walletStyle';
import { Button, Appbar, Headline, Title, Paragraph, Avatar, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, Footer, FooterTab } from 'native-base';
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import { DrawerActions } from '@react-navigation/native';

class Wallet extends React.Component {

    constructor(props) {
        super();
        this.state = {
        };
    }

    onValueChange(value) {
    }

    render() {

        return (
            <>
                <Appbar.Header style={walletStyle.header}>
                    {/* <Appbar.BackAction /> */}
                    <Appbar.Action icon='menu' 
                     onPress={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                    }}/>
                    <Appbar.Content title="Wallet" />

                    {/* <Icon type="Ionicons" style={{ color: COLORS.black, marginRight: 16, fontSize: 30 }} name="print"
                        onPress={() => this.props.navigation.navigate('consertticketdetail')}
                    /> */}
                </Appbar.Header>
                <ScrollView style={walletStyle.main, { marginHorizontal: 0 }}>
                    <View style={walletStyle.mainContainer}>
                        <View>
                            <Image
                                style={walletStyle.wallet}
                                source={require('../../src/images/wallet.png')}
                            />
                            <Card>
                                <CardItem style={walletStyle.paymentcard}>
                                    <Body>
                                        <View style={[walletStyle.row, walletStyle.alignItemsCenter, walletStyle.justifycontentbetween]}>
                                            <View>
                                                <Text style={walletStyle.balanceText}>Your Balance</Text>
                                            </View>
                                            <View>
                                                <Text style={walletStyle.balance}>$50.000</Text>
                                            </View>
                                        </View>
                                    </Body>
                                </CardItem>
                                <CardItem style={walletStyle.paymentOption}>
                                    <Body>
                                        <View>
                                            <Text style={walletStyle.paymentText}>Payments</Text>
                                        </View>
                                        <Card style={walletStyle.checkoutCard}>
                                            <CardItem style={walletStyle.checkoutCardItem}>
                                                {/* <Icon active name="logo-googleplus" /> */}
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={walletStyle.cardTitle}>COD</Text>
                                                    <Text style={walletStyle.cardtext}>Pay at Door, Delivery fees will apply</Text>
                                                </View>
                                                <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                    <Image
                                                        style={walletStyle.welcomeImg}
                                                        source={require('../../src/images/cod.png')}
                                                    />
                                                </Right>
                                            </CardItem>
                                        </Card>
                                        <Card style={walletStyle.checkoutCard}>
                                            <CardItem style={walletStyle.checkoutCardItem}>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={walletStyle.cardTitle}>Credit Card</Text>
                                                    <Text style={walletStyle.cardtext}>Paying online through Stripe app</Text>
                                                </View>
                                                <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                    <Image
                                                        style={walletStyle.welcomeImg}
                                                        source={require('../../src/images/card.png')}
                                                    />
                                                </Right>
                                            </CardItem>
                                        </Card>
                                        <View>
                                            <Text style={walletStyle.paymentText}>Saved</Text>
                                        </View>
                                        <Card style={walletStyle.checkoutCard}>
                                            <CardItem style={walletStyle.checkoutCardItem}>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={walletStyle.cardTitle}>**** **** **** 5967</Text>
                                                    <Text style={walletStyle.cardtext}>Expires 09/25</Text>
                                                </View>
                                                <Right style={{ textAlign: 'right', justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                    <Image
                                                        style={walletStyle.welcomeImg}
                                                        source={require('../../src/images/savecard.png')}
                                                    />
                                                </Right>
                                            </CardItem>
                                        </Card>
                                    </Body>


                                </CardItem>
                            </Card>
                        </View>
                    </View>
                </ScrollView>

            </>
        )
    }
}

export default Wallet
