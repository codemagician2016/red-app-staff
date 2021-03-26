
import * as React from 'react';
import { View, ScrollView, Text, Image,ActivityIndicator } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import multipleticketsStyle from './multipleticketsStyle';
import { Button, Appbar, Headline } from 'react-native-paper';

import { Card, CardItem, Body, Form, Picker, Icon } from 'native-base';
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../../src/styles/colors';
import eventvisitorsStyle from '../eventvisitors/eventvisitorsStyle';
import Toast from 'react-native-toast-message';
import axios from 'axios'
import config from '../../config'
import Moment from 'moment';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment'

class multipletickets extends React.Component {

    constructor(props) {
        super();
        this.state = {
            visitors: [],
            event: {},
            isLoading: false,
            user: {}
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getAllVisitors()
        });
        this.getAllVisitors()
    }
    async getAllVisitors() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `visitorDetail/${this.props.route.params.userId}/${this.props.route.params.eventId}`)
            this.setState({ isLoading: false })
            let res = response.data ? response.data : {}
            if (res.success) {
                await this.setState({ visitors: res.data.visitors ? res.data.visitors : [] })
                await this.setState({ user: res.data.user ? res.data.user : {} })
                await this.setState({ event: res.data.event ? res.data.event : {} })
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
                <Appbar.Header style={multipleticketsStyle.header} >
                    <Appbar.BackAction onPress={()=>{
                        this.props.navigation.goBack()
                    }}/>
                    {
                        this.state.isLoading ? 
                        null
                        :
                        <Appbar.Content title={this.state?.event?.title} subtitle={moment(this.state.event?.event?.date).format('DD/MM/YYYY')+ "•"+ this.state.event?.time?.hours+":"+ this.state.event?.time?.minutes +"•"+ this.state.event?.city} />
                    }
                    {/* <Icon type="EvilIcons" style={multipleticketsStyle.iconColor} name="search" /> */}

                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: '40%', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Loading...</Text>
                        </View>
                        :
                        <ScrollView style={globalStyle.lightBackground}>
                            <View style={multipleticketsStyle.mainContainer}>


                                {/* <Card style={multipleticketsStyle.card} transparent>
                            <CardItem>
                                <Body> */}
                                <View style={multipleticketsStyle.lowerBox}>
                                    <Text style={multipleticketsStyle.lowerBoxText}>{this.state.user.name}</Text>
                                </View>

                                {
                                    this.state.visitors.map((_, index) => {
                                        return (
                                            <Card style={multipleticketsStyle.card} key={index.toString()}>
                                                <CardItem style={multipleticketsStyle.cardItem}>
                                                    <Body style={multipleticketsStyle.cardBody}>
                                                        <View style={multipleticketsStyle.row}>
                                                            <View style={multipleticketsStyle.col8}>
                                                                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <View>
                                                                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                                                            <IconFontAwesome style={{ fontSize: 14, color: COLORS.gray, marginTop: 24, marginRight: 8 }} name='user' ></IconFontAwesome>
                                                                            <Text style={multipleticketsStyle.seat}>{_.name}</Text>
                                                                            {
                                                                                _.isBanned ?
                                                                                    <Text style={multipleticketsStyle.banned}>(Banned) </Text>
                                                                                    : null
                                                                            }
                                                                        </View>

                                                                        <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 7 }}>
                                                                            <IconMaterialCommunityIcons style={{ fontSize: 14, color: COLORS.gray, marginTop: 4, marginRight: 8 }} name='ticket-confirmation'></IconMaterialCommunityIcons>
                                                                            <Text style={multipleticketsStyle.captionText} note>{_?.mobile}</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View>
                                                                        {
                                                                            _.isCheckIn ?
                                                                                <IconFeather style={{ fontSize: 24, color: COLORS.gray, marginTop: 16, marginRight: 16 }} name='check'></IconFeather>
                                                                                : null
                                                                        }
                                                                    </View>
                                                                </View>

                                                            </View>
                                                            <View style={multipleticketsStyle.col2}>
                                                                <View style={multipleticketsStyle.innerRow}>
                                                                    <QRCode
                                                                        value={JSON.stringify(_)}
                                                                        size={50}
                                                                    />
                                                                    <View style={multipleticketsStyle.rightDotImg}></View>
                                                                    <View style={multipleticketsStyle.leftDotImg}></View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        )
                                    })
                                }

                                <View style={multipleticketsStyle.notebox}>
                                    <Text style={multipleticketsStyle.note}>
                                        * Place the QR tickets in safly, Ticket won’t be valid once QR is scanned, by any person.
                            </Text>
                                </View>
                            </View>
                        </ScrollView>

                }

            </>
        )
    }
}

export default multipletickets
