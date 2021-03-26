
import * as React from 'react';
import { View, ScrollView, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import eventvisitorsStyle from './eventvisitorsStyle';
import { Appbar, Headline } from 'react-native-paper';

import { Button, Card, CardItem, Icon, Right, Thumbnail, Footer, FooterTab, Tab, Tabs, } from 'native-base';
import IconFeather from "react-native-vector-icons/Feather";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import moment from 'moment'

class Eventvisitors extends React.Component {

    constructor(props) {
        super();
        this.state = {
            eventVisitors: [],
            event: {},
            isLoading: false
        };
    }

    initializeState() {
        this.setState({ eventVisitors: [] })
        this.setState({ event: {} })
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.initializeState()
            this.getEventVisitors()
        });
        this.getEventVisitors()
    }

    async getEventVisitors() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `visitors/${this.props.route.params.eventId}`)
            let res = response.data ? response.data : {}
            this.setState({ isLoading: false })
            if (res.success) {
                res = res.data ? res.data : {}

                this.setState({ event: res.event[0] ? res.event[0] : {} })
                this.setState({ eventVisitors: res.users ? res.users : [] })
            }
            else {
                Toast.show({
                    text1: res.message,
                    type: 'error'
                });

                this.setState({ event: {} })
                this.setState({ eventVisitors: [] })
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
                <Appbar.Header style={eventvisitorsStyle.header}>
                    {/* <Appbar.BackAction  /> */}
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    <Icon type="Entypo" style={eventvisitorsStyle.iconColor} name="menu" />
                    <Appbar.Content color={'#fff'} title="" subtitle={''} />
                    <Icon type="EvilIcons" style={eventvisitorsStyle.iconColor} name="search" />

                </Appbar.Header>
                {
                    this.isLoading ?
                        <View style={{ marginTop: '40%', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Loading...</Text>

                        </View>
                        :
                        this.users?.length <= 0 ?
                            <View style={{ marginTop: '40%', alignItems: 'center' }}>
                                <Text>No! Visitors Found</Text>
                            </View>
                            :
                            <ImageHeaderScrollView style={{ resizeMode: 'contain' }}
                                maxHeight={222}
                                minHeight={58}
                                headerImage={{uri:`${config.apiUrl}public/event/${this.state.event?.event?.id}/${this.state.event?.event?.eventImages[0]}`}
                                }
                                renderForeground={() => (
                                    <View style={{ position: 'absolute', bottom: 19, left: 16 }} >
                                        <Text style={eventvisitorsStyle.bannerHeading}>{this.state.event?.event?.title}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={eventvisitorsStyle.bannerText}>{moment(this.state.event?.event?.date).format('DD/MM/YYYY')}   •  {this.state?.event?.event?.time?.hours}:{this.state?.event?.event?.time?.minutes}  •</Text>
                                            <Text style={eventvisitorsStyle.bannerBlueText}> {this.state.event?.event?.city}</Text>
                                        </View>
                                    </View>
                                )}
                            >
                                <View style={{ height: 800 }}>
                                    {/* <Appbar.Header style={eventvisitorsStyle.header}>
                            <Appbar.BackAction color={'#fff'} />
                            <Appbar.Content color={'#fff'} style={{ color: '#fff', zIndex: 999 }} title="Scan QR" subtitle="" />
                        </Appbar.Header> */}
                                    <TriggeringView onHide={() => console.log("text hidden")}>
                                        <View style={eventvisitorsStyle.mainContainer}>
                                            <View style={eventvisitorsStyle.lowerBox}>
                                                <Text style={eventvisitorsStyle.lowerBoxText}>Visitors</Text>
                                                <View style={{ flexDirection: 'row', }}>
                                                    <Text style={eventvisitorsStyle.lowerBoxText}>{this.state.event?.totalPurchasedTicket}</Text>
                                                    <Text style={eventvisitorsStyle.lowerText}>/{this.state.event?.totalTickets}</Text>
                                                </View>
                                            </View>
                                            {
                                                this.state.eventVisitors.map((_, index) => {
                                                    return (
                                                        <Pressable key={index.toString()} onPress={()=>
                                                            {
                                                            this.props.navigation.navigate('multipletickets',{userId:_._id,eventId:this.state.event?.event?._id})
                                                        }}>
                                                            <Card style={eventvisitorsStyle.list}>
                                                                <CardItem avatar>
                                                                    {
                                                                        _.profileImage ?
                                                                            <Thumbnail source={{ uri: `${config.apiUrl}public/profile/${_.id}/${_.profileImage}` }} />
                                                                            :
                                                                            <Thumbnail source={require('../../src/images/thumbnail.png')} />
                                                                    }
                                                                    <View>
                                                                        <View style={eventvisitorsStyle.textrow}>
                                                                            <Text style={eventvisitorsStyle.nametext}>{_.name}</Text>
                                                                            {
                                                                                _.isBanned ?
                                                                                    <Text style={eventvisitorsStyle.Banndtext}>(Banned)</Text>
                                                                                    : null
                                                                            }
                                                                        </View>
                                                                        <Text style={eventvisitorsStyle.tickettext}>{_?.totalPurchasedTicket} Tickets</Text>
                                                                    </View>
                                                                    <Right>
                                                                        <IconFeather size={30} name="check" ></IconFeather>
                                                                    </Right>
                                                                </CardItem>
                                                            </Card>
                                                        </Pressable>
                                                    )
                                                })
                                            }


                                        </View>
                                    </TriggeringView>
                                </View>
                            </ImageHeaderScrollView>


                }

                <Footer>
                    <FooterTab>
                        <Button iconLeft style={eventvisitorsStyle.footerbtn} onPress={()=>this.props.navigation.navigate("scanqr",{eventId:this.props.route.params.eventId})}>
                            <Icon style={eventvisitorsStyle.btnIcon} size={16} name="scan" />
                            <Text style={eventvisitorsStyle.btnText}>Scan</Text>
                        </Button>
                    </FooterTab>
                </Footer>


            </>
        )
    }
}

export default Eventvisitors
