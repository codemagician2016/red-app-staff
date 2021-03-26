import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import TicketOption2Style from './ticket-option-2-style';
import { Button, Appbar, Headline, Title, Paragraph, Avatar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Icon, List, ListItem, Left, Right, Thumbnail, } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import profile from '../profile/profile';
class TicketOption2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // images: [
            //     require('../../src/images/noImage.png'),
            // ],
            selected: "key1"
        };
        console.log(this.props.route.params.image)
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {

        return (
            <>
                <Appbar.Header style={TicketOption2Style.header}>
                    <Appbar.BackAction
                    onPress={()=>this.props.navigation.navigate()} />
                    {/* <Appbar.Content title="Reserve" /> */}
                    {/* <Appbar.Action IconEntypo={menu} /> */}
                    {/* <Icon type="Entypo" style={{ color: "#fff", marginLeft: 16, fontSize: 30 }} name="menu" /> */}
                </Appbar.Header>
                {/* <ScrollView style={TicketOption2Style.main, { marginHorizontal: 0 }}> */}
                <View style={TicketOption2Style.mainContainer}>
                    {/* <SliderBox dotStyle={{ marginBottom: 30 }}
                            style={TicketOption2Style.slider} images={this.state.images}
                            onPress={() => this.props.navigation.navigate('ticketoption3')}
                            /> */}
                    {
                        this.props.route.params.image ?
                            <Image source={{ uri: this.props.route.params.image.image }} style={{ height: "100%", width: "100%" }} />
                            // <Text>{JSON.stringify(this.props.route.params.image)}</Text>
                            :
                            <Image source={require('../../src/images/noImage.png')} />
                    }

                </View>

                {/* </ScrollView> */}

            </>
        )
    }
}

export default TicketOption2
