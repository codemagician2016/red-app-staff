
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import addcreditcardStyle from './addcreditcardStyle';
import { Button, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Footer, FooterTab, Icon, Header, Left, Right, Title, Switch, Picker, Form } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import { round } from 'react-native-reanimated';
class addcreditcard extends React.Component {

    constructor(props) {
        super();
        this.state = {
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
                <Header style={addcreditcardStyle.header}>
                    <Left>
                        <Button transparent>
                            <Icon style={{ color: '#fff' }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={addcreditcardStyle.headerTitle}>Add credit card</Title>
                    </Body>
                    <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <IconEntypo style={{ marginRight: 8, color: COLORS.white }} name="clock"></IconEntypo>
                        <Text style={addcreditcardStyle.headerText}>6:00</Text> */}
                    </Right>
                </Header>

                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0, marginBottom: 168 }}>
                    <View style={addcreditcardStyle.mainContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, width: '100%', alignItems: 'center' }}>
                            <Image style={addcreditcardStyle.bg}
                                source={require('../../src/images/darkbd.png')}
                            />
                            <View style={addcreditcardStyle.savecardbox}>
                                <Image style={addcreditcardStyle.savecard}
                                    source={require('../../src/images/savedcard.png')} />
                            </View>
                        </View>
                        <View style={addcreditcardStyle.formbox}>
                            <TextInput style={addcreditcardStyle.input}
                                label="Name"
                                value="Name Surname"
                                onChangeText={text => setText(text)}
                            />
                            <TextInput style={addcreditcardStyle.input}
                                label="Credit card number"
                                value="1234 5678 9012"
                            />
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                                <TextInput style={[addcreditcardStyle.input, { flex: .4, }]}
                                    label="Expires"
                                    value="28/06"
                                />
                                <TextInput style={[addcreditcardStyle.input, { flex: .4, }]}
                                    label="CVV"
                                    value="..."
                                />
                            </View>
                        </View>
                        <View style={addcreditcardStyle.box}>
                            <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.black }}>
                                Debit cards are accepted at some locations and for some categories.
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, width: '100%',marginTop:19,justifyContent:'space-between',paddingLeft:48,paddingRight:48,alignItems:'center' }}>
                            <Image style={addcreditcardStyle.paymentoption}
                                source={require('../../src/images/visa.png')}
                            />
                            <Image style={addcreditcardStyle.paymentoption}
                                source={require('../../src/images/mastercard.png')}
                            />
                            <Image style={addcreditcardStyle.paymentoption}
                                source={require('../../src/images/discover.png')}
                            />
                            <Image style={addcreditcardStyle.paymentoption}
                                source={require('../../src/images/cirrus.png')}
                            />
                            <Image style={addcreditcardStyle.paymentoption}
                                source={require('../../src/images/debit.png')}
                            />
                            <Image style={addcreditcardStyle.paymentoption}
                                source={require('../../src/images/american.png')}
                            />
                           
                        </View>

                    </View>
                </ScrollView>
                <Card style={addcreditcardStyle.rdFooter}>
                    <Body >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                            {/* <View style={{ flex: .4 }}>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={addcreditcardStyle.lightText}>Total</Text>
                                    <Text style={addcreditcardStyle.darkText}>$64.80</Text>
                                </View>
                            </View> */}
                            <View style={{ flex: 1 }}>
                                <Button mode="contained" style={addcreditcardStyle.booknow}
                                    onPress={() => this.props.navigation.navigate('ticketInformation')}
                                >Book Now</Button>
                            </View>
                        </View>
                    </Body>
                </Card>
            </>
        )
    }
}

export default addcreditcard
