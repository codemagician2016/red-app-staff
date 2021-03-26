
import * as React from 'react';
import { View, ScrollView, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import myfavoriteStyle from './myfavoriteStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
// import Home from '../home/home'
import OrderMap from '../orderMap/orderMap'
import { COLORS } from '../../src/styles/colors';
import moment from 'moment'

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selected: "key1",
            onGoingEvents: [],
            previousEvents: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getFavorite()
        })
        this.getFavorite()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getFavorite() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `favorite`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ onGoingEvents: res.data.outGoingEvents ? res.data.outGoingEvents : [] })
                this.setState({ previousEvents: res.data.previousEvents ? res.data.previousEvents : [] })
            }
            else {
                this.setState({ onGoingEvents: [] })
                this.setState({ previousEvents: [] })
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
                <Appbar.Header style={myfavoriteStyle.header}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: COLORS.black, marginLeft: 16, fontSize: 30 }} name="menu"/> */}
                    <Appbar.Content title="My Favorite" />

                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: '40%', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Loading...</Text>
                        </View>
                        :
                        this.state?.previousEvents?.length <= 0 && this.state.outGoingEvents?.length <= 0 ?
                            <View style={{ marginTop: '40%', alignItems: 'center' }}>
                                <Text>No Event Foun!</Text>
                            </View>
                            :
                            <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0 }}>
                                <View style={myfavoriteStyle.mainContainer}>

                                    <Card style={myfavoriteStyle.card}>

                                        <CardItem>
                                            <Body>
                                                <View style={myfavoriteStyle.lowerBox}>
                                                    <Text style={myfavoriteStyle.lowerBoxText}>Ongoing</Text>
                                                </View>
                                                <View style={myfavoriteStyle.row}>
                                                    {
                                                        this.state.onGoingEvents.map((_, index) => {
                                                            return (
                                                                <View style={myfavoriteStyle.col6}
                                                                 key={index.toString()}>
                                                                    <Pressable>
                                                                        <Card style={myfavoriteStyle.eventCard}>
                                                                            {
                                                                                _.totalPurchasedTicket >= _.totalTickets ?
                                                                                    <View style={myfavoriteStyle.eventBadge}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>SoldOut</Text>
                                                                                    </View>
                                                                                    :
                                                                                    <View style={myfavoriteStyle.eventBadgeRed}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>
                                                                                            {_.totalTickets - _.totalPurchasedTicket}Tickets left</Text>
                                                                                    </View>
                                                                            }
                                                                            <CardItem cardBody
                                                                            >
                                                                                <Image style={myfavoriteStyle.eventImg} source={{uri:`${config.apiUrl}public/event/${_.id}/${_.eventImages[0]}`}} />
                                                                            </CardItem>
                                                                            <CardItem style={myfavoriteStyle.eventCard}>
                                                                                <Body>
                                                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                                                        <Headline style={myfavoriteStyle.eventCardHeading}>{_?.title}</Headline>
                                                                                        {
                                                                                            _.isStar ?
                                                                                                <Image style={myfavoriteStyle.starImg} source={require('../../src/images/star.png')} />
                                                                                                : null
                                                                                        }
                                                                                    </View>
                                                                                    <Text style={myfavoriteStyle.eventCardText}>{moment(_?.event?.date).format('DD/MM/YYYY')}  |  {_.time?.hours}:{_.time?.minutes} </Text>
                                                                                    <Text style={myfavoriteStyle.eventCardLike}>{_.city}</Text>
                                                                                </Body>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </Pressable>
                                                                </View>
                                                            )
                                                        })
                                                    }

                                                </View>
                                                <View style={myfavoriteStyle.lowerBox}>
                                                    <Text style={myfavoriteStyle.lowerBoxText}>Previous</Text>
                                                </View>
                                                <View style={myfavoriteStyle.row}>
                                                    {
                                                        this.state.previousEvents.map((_, index) => {
                                                            return (
                                                                <View style={myfavoriteStyle.col6}
                                                                >
                                                                    <Pressable>
                                                                        <Card style={myfavoriteStyle.eventCard}>
                                                                            {
                                                                                _.totalPurchasedTicket >= _.totalTickets ?
                                                                                    <View style={myfavoriteStyle.eventBadge}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>SoldOut</Text>
                                                                                    </View>
                                                                                    :
                                                                                    <View style={myfavoriteStyle.eventBadgeRed}>
                                                                                        <Text style={myfavoriteStyle.badgeText}>
                                                                                            {_.totalTickets - _.totalPurchasedTicket}Tickets left</Text>
                                                                                    </View>
                                                                            }
                                                                            <CardItem cardBody
                                                                            >
                                                                                <Image style={myfavoriteStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                                            </CardItem>
                                                                            <CardItem style={myfavoriteStyle.eventCard}>
                                                                                <Body>
                                                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                                                        <Headline style={myfavoriteStyle.eventCardHeading}>{_?.title}</Headline>
                                                                                        {
                                                                                            _.isStar ?
                                                                                                <Image style={myfavoriteStyle.starImg} source={require('../../src/images/star.png')} />
                                                                                                : null
                                                                                        }
                                                                                    </View>
                                                                                    <Text style={myfavoriteStyle.eventCardText}>{moment(_?.event?.date).format('DD/MM/YYYY')}  |  {_.time?.hours}:{_.time?.minutes} </Text>
                                                                                    <Text style={myfavoriteStyle.eventCardLike}>{_.city}</Text>
                                                                                </Body>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </Pressable>
                                                                </View>
                                                            )
                                                        })
                                                    }

                                                    {/* <View style={myfavoriteStyle.col6}>
                                                        <Card style={myfavoriteStyle.eventCard}>
                                                            <View style={myfavoriteStyle.eventBadgeRed}>
                                                                <Text style={myfavoriteStyle.badgeText}>10 Tickets left</Text>
                                                            </View>
                                                            <View style={myfavoriteStyle.eventBadgeWhite}>
                                                                <Text style={myfavoriteStyle.badgeText}>10 Tickets left</Text>
                                                            </View>
                                                            <CardItem cardBody >
                                                                <Image style={myfavoriteStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                            </CardItem>
                                                            <CardItem style={myfavoriteStyle.eventCard}>
                                                                <Body>

                                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                                        <Headline style={myfavoriteStyle.eventCardHeading}>Metallica</Headline>
                                                                        <Image style={myfavoriteStyle.starImg} source={require('../../src/images/star.png')} />
                                                                    </View>
                                                                    <Text style={myfavoriteStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                                    <Text style={myfavoriteStyle.eventCardLike}>Baghdad Mall </Text>
                                                                </Body>
                                                            </CardItem>
                                                        </Card>
                                                    </View>
                                                    <View style={myfavoriteStyle.col6}>
                                                        <Card style={myfavoriteStyle.eventCard}>
                                                            <View style={myfavoriteStyle.eventBadgeRed}>
                                                                <Text style={myfavoriteStyle.badgeText}>10 Tickets left</Text>
                                                            </View>
                                                            <View style={myfavoriteStyle.eventBadgeWhite}>
                                                                <Text style={myfavoriteStyle.badgeText}>10 Tickets left</Text>
                                                            </View>
                                                            <CardItem cardBody >
                                                                <Image style={myfavoriteStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                            </CardItem>
                                                            <CardItem style={myfavoriteStyle.eventCard}>
                                                                <Body>

                                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                                        <Headline style={myfavoriteStyle.eventCardHeading}>Metallica</Headline>
                                                                        <Image style={myfavoriteStyle.starImg} source={require('../../src/images/star.png')} />
                                                                    </View>
                                                                    <Text style={myfavoriteStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                                    <Text style={myfavoriteStyle.eventCardLike}>Baghdad Mall </Text>
                                                                </Body>
                                                            </CardItem>
                                                        </Card>
                                                    </View> */}
                                                </View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                            </ScrollView>

                }

            </>
        )
    }
}

export default Home
