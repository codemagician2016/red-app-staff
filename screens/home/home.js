
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable,} from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import homeStyle from './homeStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Form, Picker, Icon, Header, Left } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
// import Home from '../home/home'
import OrderMap from '../orderMap/orderMap'
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import moment from 'moment'
import { DrawerActions } from '@react-navigation/native';
import { cos } from 'react-native-reanimated';
// import { DrawerActions } from '@react-navigation/drawer';

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selected: "",
            banners: [],
            events: [],
            images: [],
            cities: [],
            isHotSelect: true,
            isConcertSelect: false,
            isInternationalSelect: false,
            param: {
                cityId: ""
            },
            eventType: "hot"
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getBanners()
            this.getCity()
            this.getAllEvents()
        })
        this.getBanners()
        this.getCity()
        this.getAllEvents()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getBanners() {
        try {
            let response = await axios.get(config.apiUrl + 'banner')
            let res = response.data ? response.data : {}
            this.setState({ banners: res.data ? res.data : [] })
            if (res.success) {
                let images = this.state.banners.map(_ => {
                    return `${config.apiUrl}public/banner/${_.id}/${_.images[0]}`
                })
                this.setState({ images: images })
            }
        }
        catch (err) {
            console.warn(err.message)
            // Toast.show({
            //     text1: err.message,
            //     type: 'error'
            // });
        }
    }

    async getAllEvents() {
        try {
            let param = {
                cityId: this.state.selected ? this.state.selected : "",
                eventType: this.state.eventType
            }
            let response = await axios.get(config.apiUrl + `all/events`, { params: param })
            let res = response.data ? response.data : []
            this.setState({ events: res.data ? res.data : [] })
        }
        catch (err) {
            console.warn(err)
            // Toast.show({
            //     text1: err.message,
            //     type: 'error'
            // });
        }
    }

    async getCity() {
        try {
            let response = await axios.get(config.apiUrl + `city`)
            let res = response.data != undefined ? response.data : {}
            if (res.success) {
                this.setState({ cities: res.data ? res.data : [] })
            }
        }
        catch (err) {
            console.warn(err.message)
        }
    }

    async setParam(val) {
        if (val) {
            await this.setState({ selected: val })
        }
        else {
            await this.setState({ selected: "" })
        }
        this.getAllEvents()
    }

    async setEventTypeParam(val) {
        await this.setState({ eventType: val })
        this.getAllEvents()
    }

    render() {
        return (
            <>
                <Appbar style={homeStyle.header}>
                    <Icon type="Entypo" name="menu" style={{ color: '#fff' }}
                        onPress={() => {
                            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                        }
                    />
                </Appbar>
                
                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0 }}>
                    <View style={homeStyle.mainContainer}>
                        <SliderBox dotStyle={{

                            marginBottom: 30
                        }}
                            style={homeStyle.slider} images={this.state.images}
                        />
                        <View style={homeStyle.sliderInfoBox}>

                            <View style={homeStyle.sliderInfoRow}>
                                <View style={homeStyle.slidercol8}>
                                    {
                                        this.state.banners.map((_) => {
                                            return (
                                                <View key={_.id.toString()}>
                                                    <Headline style={homeStyle.bannerHeading}>{_.event?.title ? _.event?.title : ""}</Headline>
                                                    <Text style={homeStyle.bannerText}>{moment(_?.event?.date).format('DD/MM/YYYY')}  • {_?.event?.city}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                {/* <View style={homeStyle.slidercol2}>
                                    <Button mode="contained" style={homeStyle.bookbtn}
                                    >Book Now</Button>
                                </View> */}
                            </View>
                        </View>
                        <Card style={homeStyle.card}>
                            <CardItem style={homeStyle.cardHeader} header>
                                <View style={[globalStyle.row, globalStyle.itemCenter, globalStyle.justifyContentBetween]}>
                                    <View >
                                        <Form>
                                            <Picker
                                                mode="dropdown"
                                                iosHeader="City"
                                                iosIcon={<Icon type="FontAwesome" name="angle-down" />}
                                                style={{ minHeight: 20, width: 140 }}
                                                selectedValue={this.state.selected}
                                                onValueChange={(e) => this.setParam(e)}
                                            >
                                                <Picker.Item label="Select City" value="" />
                                                {
                                                    this.state.cities.map((_, index) => {
                                                        return (
                                                            <Picker.Item label={_.name} value={_._id} key={index.toString()} />
                                                        )
                                                    })
                                                }


                                            </Picker>
                                        </Form>
                                    </View>
                                    <View>
                                        <IconAntDesign name="search1" size={20}></IconAntDesign>
                                    </View>
                                </View>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        <Button mode="contained" color={this.state.isHotSelect ? null : "#F9F9F9"} style={this.state.isHotSelect ? homeStyle.selectSegment : homeStyle.segment}
                                            onPress={() => {
                                                this.setState({ isHotSelect: true })
                                                this.setState({ isConcertSelect: false })
                                                this.setState({ isInternationalSelect: false })
                                                this.setEventTypeParam("hot")
                                            }}>Hot Event</Button>
                                        <Button mode="contained" color={this.state.isConcertSelect ? null : "#F9F9F9"} style={this.state.isConcertSelect ? homeStyle.selectSegment : homeStyle.segment}
                                            onPress={() => {
                                                this.setState({ isConcertSelect: true })
                                                this.setState({ isHotSelect: false })
                                                this.setState({ isInternationalSelect: false })
                                                this.setEventTypeParam("concert")
                                            }}>Concerts and party</Button>
                                        <Button mode="contained" color={this.state.isInternationalSelect ? null : "#F9F9F9"} style={this.state.isInternationalSelect ? homeStyle.selectSegment : homeStyle.segment}
                                            onPress={() => {
                                                this.setState({ isInternationalSelect: true })
                                                this.setState({ isHotSelect: false })
                                                this.setState({ isConcertSelect: false })
                                                this.setEventTypeParam("international")
                                            }}>International concerts</Button>
                                    </ScrollView>
                                    <View style={homeStyle.row}>
                                        {
                                            this.state.events.map((_) => {
                                                return (
                                                    <View style={homeStyle.col6}
                                                        key={_.id.toString()}>
                                                        <Pressable
                                                            // onPress={() => this.props.navigation.navigate('singleAd', { id: _._id })} 
                                                            >
                                                            <Card style={homeStyle.eventCard}>
                                                                {
                                                                    _.availableTicket == 0 ?
                                                                        <View style={homeStyle.eventBadge}>
                                                                            <Text style={homeStyle.badgeText}>SoldOut</Text>
                                                                        </View>
                                                                        : null
                                                                }
                                                                <CardItem cardBody
                                                                >
                                                                    <Image style={homeStyle.eventImg} source={{ uri: `${config.apiUrl}public/event/${_.id}/${_.eventImages[0]}` }} />
                                                                </CardItem>
                                                                <CardItem style={homeStyle.eventCard}>
                                                                    <Body>
                                                                        <Headline style={homeStyle.eventCardHeading}

                                                                        >{_.title}</Headline>
                                                                        <Text style={homeStyle.eventCardText}>{moment(_.date).format('DD/MM/YYYY')} |  {_.time?.hours} - {_.time?.minutes} </Text>
                                                                        <Text style={homeStyle.eventCardLike}>{_.city?.name} </Text>
                                                                    </Body>
                                                                </CardItem>
                                                            </Card>
                                                        </Pressable>
                                                    </View>
                                                )
                                            })
                                        }

                                        {/* <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>
                                                <View style={homeStyle.eventBadgeRed}>
                                                    <Text style={homeStyle.badgeText}>10 Tickets left</Text>
                                                </View>
                                                <View style={homeStyle.eventBadgeWhite}>
                                                    <Text style={homeStyle.badgeText}>10 Tickets left</Text>
                                                </View>
                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>

                                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                                                            <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                            <Image style={homeStyle.starImg} source={require('../../src/images/star.png')} />
                                                        </View>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>

                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        <View style={homeStyle.col6}>
                                            <Card style={homeStyle.eventCard}>

                                                <CardItem cardBody >
                                                    <Image style={homeStyle.eventImg} source={require('../../src/images/event-1.png')} />
                                                </CardItem>
                                                <CardItem style={homeStyle.eventCard}>
                                                    <Body>
                                                        <Headline style={homeStyle.eventCardHeading}>Metallica</Headline>
                                                        <Text style={homeStyle.eventCardText}>18.04.2021  |  19:00 - 22:00 </Text>
                                                        <Text style={homeStyle.eventCardLike}>Baghdad Mall </Text>
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

            </>
        )
    }
}

export default Home
