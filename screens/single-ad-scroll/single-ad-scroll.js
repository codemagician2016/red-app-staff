import * as React from 'react';
import { View, ScrollView, Text, Image ,TouchableOpacity} from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import singleAdScrollStyle from './single-ad-scroll-style';
import { Button, Appbar, Headline, Title, Paragraph, Avatar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Footer, FooterTab, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";

class SingleAdScroll extends React.Component {

    constructor(props) {
        super();
        this.state = {
            images: [
                require('../../src/images/single-ad.png'),
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                // Local image
            ],
            selected: "key1"
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {

        return (
            <>
                <Appbar.Header style={singleAdScrollStyle.header}>
                        <Appbar.BackAction
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}/>
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" /> */}
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0,marginTop:0}}>
                    <View style={singleAdScrollStyle.mainContainer}>
                        <SliderBox dotStyle={{

                            marginBottom: 30
                        }}
                            style={singleAdScrollStyle.slider} images={this.state.images} />
                        {/* <View style={singleAdScrollStyle.sliderInfoBox}>
                            <View style={singleAdScrollStyle.sliderInfoRow}>
                                <View style={singleAdScrollStyle.slidercol8}>
                                    <Headline style={singleAdScrollStyle.bannerHeading}>Metallica Concert</Headline>
                                    <Text style={singleAdScrollStyle.bannerText}>18.04.2021  •  Baghdad Mall</Text>
                                </View>
                                <View style={singleAdScrollStyle.slidercol2}>
                                    <Button mode="contained" style={singleAdScrollStyle.bookbtn}>Book Now</Button>
                                </View>
                            </View>
                        </View> */}
                        <Card style={singleAdScrollStyle.card}>
                            <CardItem style={singleAdScrollStyle.cardHeader} header>
                                <Headline style={singleAdScrollStyle.cardHeading}>
                                    Metallica Concert
                               </Headline>
                                <Headline style={singleAdScrollStyle.cardHeading}>
                                    second line goes here
                               </Headline>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                    <Text style={singleAdScrollStyle.cardtext}>18.04.2021  |  19:00 - 22:00 </Text>
                                    <Text style={singleAdScrollStyle.cardlink}> <IconEntypo name="location-pin"></IconEntypo> Baghdad Mall</Text>
                                </View>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Title style={singleAdScrollStyle.title}>Description</Title>
                                    <Paragraph style={singleAdScrollStyle.pera}>
                                        If we were asked about One bar to go in Paris before going to a club, we would always recommend Night
                                        bar King. It’s not just a classic bar, but even more. It is a  must place to go to, a Master brewers of Paris, spend a lovely night with your love ones.
                                    </Paragraph>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, width: '100%', marginTop: 24, marginBottom: 33 }}>
                                        <Image source={require('../../src/images/no-smoking.png')} />
                                        <Image source={require('../../src/images/no-chlidren.png')} />
                                        <Image source={require('../../src/images/no-pets.png')} />
                                        
                                    </View>
                                    <Text style={singleAdScrollStyle.text}><IconEntypo name="location-pin"></IconEntypo>31 Rue Cambon,  21 Rue du Faubourg Saint-Honoré, 75001 Paris, France</Text>

                                </Body>
                            </CardItem>
                        </Card>
                        <View>
                            <Image style={singleAdScrollStyle.map} source={require('../../src/images/map.png')} />
                            <Button mode="contained" style={singleAdScrollStyle.direction}>Direction</Button>
                        </View>
                    </View>
                   
                </ScrollView>
                <Card style={singleAdScrollStyle.rdFooter}>
                    <Body >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1,alignItems:'center',width:'100%',paddingHorizontal:8 }}>
                            <View style={{flex:.4}}>
                               <View style={{flexDirection:'row',marginLeft:20}}>
                               <Button style={singleAdScrollStyle.iconBtn} icon dark>
                                    <Icon type="Entypo" name='share' style={{ fontSize: 22,color:'#4B5E67',}} />
                                </Button>
                                <Button style={singleAdScrollStyle.iconBtn} icon dark>
                                    <Icon type="AntDesign" name='heart' style={{ fontSize: 20,color:'#4B5E67' }} />
                                </Button>
                               </View>
                            </View>
                            <View style={{flex:.5}}>
                                <Button mode="contained" style={singleAdScrollStyle.soldOut}
                                 onPress={() => this.props.navigation.navigate('ticketoption1')}
                                >Sold Out</Button>
                            </View>
                        </View>
                    </Body>
                </Card>
            </>
        )
    }
}

export default SingleAdScroll
