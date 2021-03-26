
import * as React from 'react';
import { View, ScrollView, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import homeStyle from './homeStyle';
import { Button, Appbar, Headline } from 'react-native-paper';

import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import moment from 'moment'
import { DrawerActions } from '@react-navigation/native';

class MyEvent extends React.Component {

    constructor(props) {
        super();
        this.state = {
            images: [
                require('../../src/images/slider-1.png'),
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                // Local image
            ],
            selected: "key1",
            previousEvents: [],
            onGoingEvents: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getStaffEvents()
        })
        this.getStaffEvents()
    }

    async getStaffEvents() {
        try {
             this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `events`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                this.setState({ previousEvents: res.data.previousEvents ? res.data.previousEvents : [] })
                this.setState({ onGoingEvents: res.data.outgoingEvents ? res.data.outgoingEvents : [] })
            }
            else {
                this.setState({ previousEvents: [] })
                this.setState({ onGoingEvents: [] })
            }
        }
        catch (err) {
            console.warn(err)
        }
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {

        return (
            <>
                <Appbar.Header style={homeStyle.header}>
                    {/* <Appbar.BackAction  /> */}
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    <Icon type="Entypo" style={homeStyle.iconColor} name="menu" 
                     onPress={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                    }/>
                    <Appbar.Content title="Events" subtitle={''} />
                    {/* <View style={homeStyle.headerRow}>
                        <Icon type="EvilIcons" style={homeStyle.iconColor} name="search" />
                        <Icon type="AntDesign" style={homeStyle.iconColor} name="plus" />
                    </View> */}

                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ alignItems: 'center', marginTop: '40%' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Loading...</Text>
                        </View> :
                        this.state.previousEvents.length <= 0 && this.state.onGoingEvents.length <= 0 ?

                            <View style={{ alignItems: 'center', marginTop: '40%' }}>
                                <Text>No! Event Found</Text>
                            </View>
                            :
                            <ScrollView style={globalStyle.lightBackground}>
                                <View style={homeStyle.mainContainer}>


                                    <Card style={homeStyle.card}>
                                        <CardItem>
                                            <Body>
                                                <View style={homeStyle.lowerBox}>
                                                    <Text style={homeStyle.lowerBoxText}>Ongoing</Text>
                                                </View>
                                                <View style={homeStyle.row}>
                                                    {
                                                        this.state.onGoingEvents.map((_, index) => {
                                                            return (
                                                                <View style={homeStyle.col6}
                                                                    key={index.toString()}>
                                                                    <Pressable
                                                                     onPress={() => this.props.navigation.navigate('eventVisitors',{eventId:_._id})}>

                                                                        <Card style={homeStyle.eventCard}>

                                                                            <CardItem cardBody
                                                                            >
                                                                                <Image style={homeStyle.eventImg} source={{uri:`${config.imgUrl}public/event/${_.id}/${_.eventImages[0]}`}} />
                                                                            </CardItem>
                                                                            <CardItem style={homeStyle.eventCard}>
                                                                                <Body>
                                                                                    <Headline style={homeStyle.eventCardHeading}
                                                                                        
                                                                                    >{_.title}</Headline>
                                                                                    <Text style={homeStyle.eventCardText}>{moment(_.date).format('DD/MM/YYYY')}  |  {_.time.hours}:{_.time.minutes} </Text>
                                                                                    <Text style={homeStyle.eventCardLike}>{_.city}</Text>
                                                                                </Body>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </Pressable>

                                                                </View>
                                                            )
                                                        })
                                                    }
                                                </View>

                                                <View style={homeStyle.lowerBox}>
                                                    <Text style={homeStyle.lowerBoxText}>Previous</Text>
                                                </View>
                                                <View style={homeStyle.row}>
                                                    {
                                                        this.state.previousEvents.map((_, index) => {
                                                            return (

                                                                <View style={homeStyle.col6}
                                                                    key={index.toString()} >
                                                                    <Pressable 
                                                                     onPress={() => this.props.navigation.navigate('eventVisitors',{eventId:_._id})}>
                                                                        <Card style={homeStyle.eventCard}>

                                                                            <CardItem cardBody
                                                                            >
                                                                                <Image style={homeStyle.eventImg} source={{uri:`${config.imgUrl}public/event/${_.id}/${_.eventImages[0]}`}} />
                                                                            </CardItem>
                                                                            <CardItem style={homeStyle.eventCard}>
                                                                                <Body>
                                                                                    <Headline style={homeStyle.eventCardHeading}
                                                                                        
                                                                                    >{_.title}</Headline>
                                                                                    <Text style={homeStyle.eventCardText}>{moment(_.date).format('DD/MM/YYYY')}  |  {_.time?.hours}:{_?.time?.minutes} </Text>
                                                                                    <Text style={homeStyle.eventCardLike}>{_.city} </Text>
                                                                                </Body>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </Pressable>
                                                                </View>
                                                            )
                                                        })
                                                    }
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

export default MyEvent
