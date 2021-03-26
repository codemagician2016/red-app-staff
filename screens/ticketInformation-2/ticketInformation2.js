
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import ticketInformation2Style from './ticketInformation2Style';
import { Button, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, Icon, Header, Left, Right, Title, List, ListItem, Thumbnail, } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import { round } from 'react-native-reanimated';
class ticketInformation2 extends React.Component {

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
                <Header style={ticketInformation2Style.header}>
                    <Left>
                        <Button transparent>
                            <Icon style={{ color: COLORS.black }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={ticketInformation2Style.headerTitle}>Ticket Information</Title>
                    </Body>
                    <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconEntypo style={{ marginRight: 8, color: '#704ADC' }} name="clock"></IconEntypo>
                        <Text style={ticketInformation2Style.headerText}>6:00</Text>
                    </Right>
                </Header>

                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0, marginBottom: 168 }}>
                    <View style={ticketInformation2Style.mainContainer}>
                        <Image
                            style={ticketInformation2Style.map}
                            source={require('../../src/images/map2.png')}
                        />

                    </View>
                </ScrollView>
                <Card style={ticketInformation2Style.rdFooter}>
                    <View style={ticketInformation2Style.formbox}>
                        <TextInput style={ticketInformation2Style.input}
                            placeholder="Address Description"
                        />
                    </View>
                    <View style={ticketInformation2Style.formbox}>
                        <TextInput style={ticketInformation2Style.input}
                            placeholder="Note (Optional)"
                        />
                    </View>
                    <Button mode="contained" style={ticketInformation2Style.booknow}
                        onPress={() => this.props.navigation.navigate('success')}
                    >Book Now</Button>
                </Card>
            </>
        )
    }
}

export default ticketInformation2
