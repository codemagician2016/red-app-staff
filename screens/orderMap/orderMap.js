
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import orderMapStyle from './orderMapStyle';
import { Button, Appbar, Headline, Title, Paragraph, Avatar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, CardItem, Body, Footer, FooterTab, Icon } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
class OrderMap extends React.Component {

    constructor(props) {
        super();
        this.state = {

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
               
                {/* <Appbar.Header style={orderMapStyle.header}>
                    <Appbar.BackAction />
                    <Appbar.Action IconEntypo={menu} />
                    {/* <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" /> */}

                {/* </Appbar.Header>  */}

                <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0 }}>
                    <View style={orderMapStyle.mainContainer}>
                        <View>
                            <Image style={orderMapStyle.map} source={require('../../src/images/fullmap.png')} />
                            <Button mode="contained" style={orderMapStyle.direction}>Direction</Button>
                        </View>
                    </View>

                </ScrollView>

            </>
        )
    }
}

export default OrderMap
