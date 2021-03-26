import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import TicketOption3Style from './ticket-option-3-style';
import { Button, Appbar, Headline, Title, Paragraph, Avatar, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
class TicketOption3 extends React.Component {

    constructor(props) {
        super();
        this.state = {
            images: [
                require('../../src/images/ticketoption1.png'),
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
                <Appbar.Header style={TicketOption3Style.header}>
                    <Appbar.BackAction />
                    <Appbar.Content title="Reserve" />
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" /> */}
                </Appbar.Header>
                <ScrollView style={TicketOption3Style.main, { marginHorizontal: 0 }}>
                    <View style={TicketOption3Style.mainContainer}>

                        <Card style={TicketOption3Style.card}>
                            <CardItem style={TicketOption3Style.cardItem}>
                                <Body style={TicketOption3Style.cardBody}>
                                    <View style={TicketOption3Style.row}>
                                        <View style={TicketOption3Style.col8}>
                                            <Text style={TicketOption3Style.seat}>VIP</Text>
                                            <Text style={TicketOption3Style.captionText} note>Allow attendns to get the first seat</Text>
                                            <Text style={TicketOption3Style.price} note>$10</Text>
                                        </View>
                                        <View style={TicketOption3Style.col2}>
                                            <View style={TicketOption3Style.innerRow}>
                                                <View style={TicketOption3Style.col1}>
                                                    <Button icon>
                                                        <Icon style={{ fontSize: 20 }} name='chevron-up' />
                                                    </Button>
                                                </View>
                                                <View style={TicketOption3Style.col1}>
                                                    <Text style={{ textAlign: 'center', color: COLORS.primary, fontWeight: '700', fontSize: 16 }}>212</Text>
                                                </View>
                                                <View style={TicketOption3Style.col1}>
                                                    <Button icon>
                                                        <Icon style={{ fontSize: 20 }} name='chevron-down' />
                                                    </Button>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={TicketOption3Style.rightDotImg}></View>
                                    <View style={TicketOption3Style.leftDotImg}></View>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={TicketOption3Style.card}>
                            <CardItem style={TicketOption3Style.cardItem}>
                                <Body style={TicketOption3Style.cardBody}>
                                    <View style={TicketOption3Style.row}>
                                        <View style={TicketOption3Style.col8}>
                                            <Text style={TicketOption3Style.seat}>Standard</Text>
                                            <Text style={TicketOption3Style.captionText} note>Regular seats, public entrance.</Text>
                                            <Text style={TicketOption3Style.price} note>$10</Text>
                                        </View>
                                        <View style={TicketOption3Style.col2}>
                                            <View style={TicketOption3Style.innerRow}>
                                                <View style={TicketOption3Style.col1}>
                                                    <Button icon>
                                                        <Icon style={{ fontSize: 20 }} name='chevron-up' />
                                                    </Button>
                                                </View>
                                                <View style={TicketOption3Style.col1}>
                                                    <Text style={{ textAlign: 'center', color: COLORS.primary, fontWeight: '700', fontSize: 16 }}>212</Text>
                                                </View>
                                                <View style={TicketOption3Style.col1}>
                                                    <Button icon>
                                                        <Icon style={{ fontSize: 20 }} name='chevron-down' />
                                                    </Button>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={TicketOption3Style.rightDotImg}></View>
                                    <View style={TicketOption3Style.leftDotImg}></View>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={TicketOption3Style.card}>
                            <CardItem style={TicketOption3Style.cardItem}>
                                <Body style={TicketOption3Style.cardBody}>
                                    <View style={TicketOption3Style.row}>
                                        <View style={TicketOption3Style.col8}>
                                            <Text style={TicketOption3Style.seat}>Child</Text>
                                            <Text style={TicketOption3Style.captionText} note>VIP entrance, privite seats.</Text>
                                            <Text style={TicketOption3Style.price} note>$10</Text>
                                        </View>
                                        <View style={TicketOption3Style.col2}>
                                            <View style={TicketOption3Style.innerRow}>
                                                <View style={TicketOption3Style.col1}>
                                                    <Button icon>
                                                        <Icon style={{ fontSize: 20 }} name='chevron-up' />
                                                    </Button>
                                                </View>
                                                <View style={TicketOption3Style.col1}>
                                                    <Text style={{ textAlign: 'center', color: COLORS.primary, fontWeight: '700', fontSize: 16 }}>212</Text>
                                                </View>
                                                <View style={TicketOption3Style.col1}>
                                                    <Button icon>
                                                        <Icon style={{ fontSize: 20 }} name='chevron-down' />
                                                    </Button>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={TicketOption3Style.rightDotImg}></View>
                                    <View style={TicketOption3Style.leftDotImg}></View>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={TicketOption3Style.lowerBox}>
                            <Pressable>
                                <Text style={TicketOption3Style.lowerBoxText}>Enter Promocode</Text>
                            </Pressable>
                            <TextInput style={TicketOption3Style.textInput}
                                placeholder="Type your promocode here"
                            />
                        </View>
                    </View>

                </ScrollView>
                <Card style={TicketOption3Style.rdFooter}>
                    <Body >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                            <View style={{ flex: .4 }}>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={TicketOption3Style.lightText}>Total</Text>
                                    <Text style={TicketOption3Style.darkText}>$64.80</Text>
                                </View>
                            </View>
                            <View style={{ flex: .5 }}>
                                <Button mode="contained" style={TicketOption3Style.soldOut}
                                    onPress={() => this.props.navigation.navigate('checkout')}
                                >Reserve</Button>
                            </View>
                        </View>
                    </Body>
                </Card>
            </>
        )
    }
}

export default TicketOption3
