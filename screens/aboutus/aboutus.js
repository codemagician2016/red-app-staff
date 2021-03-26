
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { Accordion } from 'native-base';
import globalStyle from '../../src/styles/globalStyle';
import aboutusStyle from '../aboutus/aboutusStyle';
import { TextInput, Button, Appbar, Switch, List } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";


class Aboutus extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {

        // const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={aboutusStyle.header}>
                    <Appbar.BackAction onPress={()=>{
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="About Us" />
                </Appbar.Header>
                <ScrollView style={globalStyle.grayBackground}>
                    <View style={aboutusStyle.mainContainer}>
                        <View style={aboutusStyle.imageContainer}>
                            <Image
                                style={aboutusStyle.logo}
                                source={require('../../src/images/logo.png')}
                            />
                            <Text style={aboutusStyle.caption}>
                                Red app. Version 1.1
                            </Text>
                        </View>
                        <Text style={aboutusStyle.text}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                        </Text>
                        <Text style={aboutusStyle.text}>
                        Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Text>
                    </View>
                    <View style={aboutusStyle.imageContainer}>
                          <View style={aboutusStyle.row}>
                          <Image
                                style={aboutusStyle.socialmedia}
                                source={require('../../src/images/Twitter.png')}
                            />
                            <Image
                                style={aboutusStyle.socialmedia}
                                source={require('../../src/images/Facebook.png')}
                            />
                            <Image
                                style={aboutusStyle.socialmedia}
                                source={require('../../src/images/Pinterest.png')}
                            />
                            <Image
                                style={aboutusStyle.socialmedia}
                                source={require('../../src/images/Instagram.png')}
                            />
                          </View>
                           
                        </View>

                </ScrollView>
            </>
        )
    }
}

export default Aboutus