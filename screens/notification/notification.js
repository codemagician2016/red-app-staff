
import * as React from 'react';
import { View, ScrollView, Text, TextInput, ActivityIndicator } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import notificationstyle from './notificationstyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Form, Header, Icon, Item, Input, Thumbnail, Right } from 'native-base';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';

class Notification extends React.Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    constructor(props) {
        super();
        this.state = {
            isLoading: false,
            notifications: []
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getNotifications()
        })
        this.getNotifications()
    }

    async getNotifications() {
        try {
            this.setState({ isLoading: true })
            let response = await axios.get(config.apiUrl + `notification`)
            let res = response.data ? response.data : {}
            this.setState({isLoading:false})
            console.warn(res.data)
            if (res.success) {
                this.setState({ notifications: res.data })
            }
            else{
                this.setState({ notifications: [] })
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
                <Appbar.Header style={notificationstyle.header}>
                    <Icon type="Entypo" style={notificationstyle.iconColor} name="menu"
                        onPress={() => this.props.navigation.openDrawer()} />
                    <Appbar.Content title="Notifications" subtitle={''} />
                    {/* <Icon type="Entypo" style={notificationstyle.iconColor} name="plus" /> */}
                </Appbar.Header>
                {
                    this.state.isLoading ?
                        <View style={{ marginTop: '40%', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text>Loading...</Text>
                        </View>
                        :
                        this.state.notifications.length <= 0 && !this.state.isLoading ?
                            <View style={{ marginTop: '40%', alignItems: 'center' }}>
                                <Text>Notification not found!</Text>
                            </View>
                            :
                            <ScrollView style={globalStyle.whiteBackground}>
                                <View style={notificationstyle.mainContainer}>
                                    <View style={notificationstyle.lowerBox}>
                                        <Text style={notificationstyle.lowerBoxText}>All Notification</Text>
                                        {/* <Text style={notificationstyle.lowerBoxText}>8:40 PM</Text> */}

                                    </View>
                                    {
                                        this.state.notifications.map((_, index) => {
                                            return (
                                                <Card style={notificationstyle.list} transparent key={index.toString()}>
                                                    <CardItem avatar>
                                                        {/* <Thumbnail source={require('../../src/images/visitors.png')} /> */}
                                                        {
                                                            _.images.length > 0 ?
                                                                <Thumbnail source={{ uri: `${config.apiUrl}public/notification/${_.id}/${_?.images[0]}` }} />
                                                                :
                                                                <Thumbnail source={require('../../src/images/thumbnail.png')} />
                                                        }
                                                        <View>
                                                            <View style={notificationstyle.textrow}>
                                                                <View style={notificationstyle.textcol}>
                                                                    <Text style={notificationstyle.nametext}>
                                                                        {_.description}
                                                                    </Text>
                                                                    <Text style={notificationstyle.tickettext}>
                                                                        {new Date(_.created).getHours()}:{new Date(_.created).getMinutes()}
                                                                        {new Date(_.created).getHours() > 12 ? " PM" : " AM"}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </CardItem>
                                                </Card>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                }

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                </View>
            </>
        )
    }
}

export default Notification
