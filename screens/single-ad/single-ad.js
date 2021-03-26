
import * as React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import singleAdStyle from './singleAdStyle';
import { Button, Appbar, Headline, Title, Paragraph, Avatar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Footer, FooterTab, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import moment from 'moment'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'

class singleAd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../src/images/single-ad.png'),
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
            ],
            selected: "key1",
            event: {},
            latitude: "",
            longitude: ""
        };
    }
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getEventDetail()
            
        })
        this.getEventDetail()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getEventDetail() {
        try {
            let response = await axios.get(config.apiUrl + `event/${this.props.route.params.id}`)
            let res = response.data ? response.data : {}
            await this.setState({ event: res.data ? res.data : {} })
            if (res.success) {
                let sittingImages , eventImages
                if (res.data.mapAddres) {
                    this.setState({ latitude: res.data.mapAddress.latitude ? res.data.mapAddress.latitude : "" })
                    this.setState({ longitude: res.data.mapAddress.longitude ? res.data.mapAddress.longitude : "" })
                }
                if (this.state.event.eventImages.length > 0) {
                     eventImages = this.state.event.eventImages.map(_ => {
                        return `${config.apiUrl}public/event/${this.state.event.id}/${_}`
                    })
                }

                if (this.state.event.sittingImages.length > 0) {
                    sittingImages = this.state.event.sittingImages.map(_ => {
                        return `${config.apiUrl}public/eventSitting/${this.state.event.id}/${_}`
                    })
                }
                this.setState({ images: [...eventImages, ...sittingImages] })
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

    render() {
        return (
            <>
                <Appbar.Header style={singleAdStyle.header}>
                    <Appbar.BackAction color='#fff'
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    />
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" /> */}
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0 }}>
                    <View style={singleAdStyle.mainContainer}>
                        <SliderBox dotStyle={{

                            marginBottom: 30
                        }}
                            style={singleAdStyle.slider} images={this.state.images} />
  
                        <Card style={singleAdStyle.card}>
                            <CardItem style={singleAdStyle.cardHeader} header>
                                <Headline style={singleAdStyle.cardHeading}>
                                    {this.state.event?.title}
                                </Headline>
                                <Headline style={singleAdStyle.cardHeading}>
                                    {this.state.event?.eventAddress}
                                </Headline>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                    <Text style={singleAdStyle.cardtext}>{moment(this.state.event?.data).format('DD/MM/YYYY')} | {this.state.event?.time?.hours} - {this.state.event?.time?.minutes} </Text>
                                    {/* <Text style={singleAdStyle.cardlink}> <IconEntypo name="location-pin"></IconEntypo> {this.state.event?.city}</Text> */}
                                </View>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Title style={singleAdStyle.title}>Description</Title>
                                    <Paragraph style={singleAdStyle.pera}>
                                        {this.state.event?.description}
                                    </Paragraph>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flex: 1, width: '100%', marginTop: 24, marginBottom: 33 }}>
                                        {
                                            this.state.event?.isSmoking ?
                                                <Image style={singleAdStyle.allow} source={require('../../src/images/no-smoking.png')} />
                                                :
                                                null
                                        }
                                        {
                                            this.state.event?.isChild ?
                                                <Image style={singleAdStyle.allow} source={require('../../src/images/no-chlidren.png')} />
                                                :
                                                null
                                        }
                                        {
                                            this.state.event?.isPet ?
                                                <Image style={singleAdStyle.allow} source={require('../../src/images/no-pets.png')} />
                                                :
                                                null
                                        }
                                        {
                                            this.state.event?.isFreeDrink ?
                                                <Image style={singleAdStyle.allow} source={require('../../src/images/free-drink.png')} />
                                                :
                                                null
                                        }

                                    </View>
                                    <Text style={singleAdStyle.text}><IconEntypo name="location-pin"></IconEntypo>
                                        {this.state.event?.eventAddress} {this.state.event?.address}
                                        {this.state.event?.city?.name} {this.state.event?.country}
                                    </Text>
                                    <Button mode="contained" style={singleAdStyle.direction}
                                    // onPress={() => this.props.navigation.navigate('map', { id: this.state.event._id })}
                                    >
                                        Direction</Button>
                                </Body>
                            </CardItem>
                        </Card>
                        <View>
                            {/* <Image style={singleAdStyle.map} source={require('../../src/images/map.png')} /> */}
                            <MapView style={{ height: 250, width: 500, flex: 1 }}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                showsMyLocationButton={true}
                                zoomEnabled={true}
                            >
                                {
                                    this.state.coordinate?.latitude ?
                                        <Marker draggable={true} coordinate={this.state.mapAddres}>
                                            <Image source={require('../../src/images/marker.png')} style={{ height: 60, width: 40 }} />
                                        </Marker> : null
                                }
                            </MapView>

                        </View>

                    </View>
                    <Card style={singleAdStyle.rdFooter}>
                    <Body >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                            <View style={{ flex: .4 }}>
                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                    <Button style={singleAdStyle.iconBtn} icon dark>
                                        <Icon type="AntDesign" name='upload' style={{ fontSize: 20, color: '#4B5E67', }} />
                                    </Button>
                                    <Button style={singleAdStyle.iconBtn} icon dark>
                                        <Icon type="AntDesign" name='heart'
                                            style={{ fontSize: 20, color: '#4B5E67' }}
                                        />
                                    </Button>
                                </View>
                            </View>
                            <View style={{ flex: .5 }}>
                                {
                                    this.state.event.availableTicket == 0 ?
                                        <Button mode="contained" style={singleAdStyle.booknow}
                                            disabled={true}
                                        >Sold Out</Button>
                                        :
                                        <Button mode="contained" style={singleAdStyle.booknow}
                                            onPress={() => this.props.navigation.navigate("ticketoption1", { id: this.state.event._id })}
                                        >Book Now</Button>
                                }

                            </View>
                        </View>
                    </Body>
                </Card>
                </ScrollView>
               
            </>
        )
    }
}

export default singleAd
