
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import successStyle from './successStyle';
import { Button, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, Icon, Header, Left, Right, Title, Footer, FooterTab } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
class success extends React.Component {

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
                <ScrollView style={{ marginHorizontal: 0, marginBottom: 30}}>
                    <View style={successStyle.mainContainer}>
                        <Image
                            style={successStyle.map}
                            source={require('../../src/images/success.png')}
                        />
                        <View style={successStyle.box}>
                            <Text style={successStyle.text}>
                                Your Tickets has been
                                </Text>
                            <Text style={successStyle.text}>
                                Purchesed Successfully
                            </Text>
                            <Text style={successStyle.text}>
                                You will receive a call from us soon!
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <Footer style={successStyle.footer}>
                    <FooterTab style={successStyle}>
                        <Button style={successStyle.booknow} full
                          onPress={() => this.props.navigation.navigate('home')}
                        >
                            <Text style={{ color: COLORS.white }}>Okay</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </>
        )
    }
}

export default success
