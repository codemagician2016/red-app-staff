
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { Card, CardItem, Icon, Right } from 'native-base';
import globalStyle from '../../src/styles/globalStyle';
import settingsStyle from '../../screens/settings/settingsStyle';
import { TextInput, Button, Appbar, Switch } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";


class Settings extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        // const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={globalStyle.header}>
                    <Appbar.BackAction
                        onPress={() => {
                            this.props.navigation.goBack()
                        }} />
                    <Appbar.Content title="Settings" />
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <View style={settingsStyle.mainContainer}>
                        <Card style={settingsStyle.card}>
                            <CardItem style={settingsStyle.card}>
                                <Text style={settingsStyle.maintext}>Language</Text>
                                <Right style={settingsStyle.row}>
                                    <View style={settingsStyle.row}>
                                        <Text style={settingsStyle.text}>English</Text>
                                        <IconAntDesign style={{ fontSize: 16 }} type='AntDesign' name="right" ></IconAntDesign>
                                    </View>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={settingsStyle.card} >
                            <CardItem style={settingsStyle.card}>
                                <Text style={settingsStyle.maintext}>Notifications</Text>
                                <Right style={settingsStyle.row}>
                                    <Switch />
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={settingsStyle.card}>
                            <CardItem style={settingsStyle.card}>
                                <Text style={settingsStyle.maintext}>Help</Text>
                                <Right style={settingsStyle.row}>
                                    <View style={settingsStyle.row}>
                                        <IconAntDesign style={{ fontSize: 16 }} type='AntDesign' name="right" ></IconAntDesign>
                                    </View>
                                </Right>
                            </CardItem>
                        </Card>
                        <Pressable onPress={() => this.props.navigation.navigate('faq')}>
                            <Card style={settingsStyle.card}>
                                <CardItem style={settingsStyle.card}>
                                    <Text style={settingsStyle.maintext}>Faq</Text>
                                    <Right style={settingsStyle.row}>
                                        <View style={settingsStyle.row}>
                                            <IconAntDesign style={{ fontSize: 16 }} type='AntDesign' name="right" ></IconAntDesign>
                                        </View>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => this.props.navigation.navigate('aboutus')}>
                            <Card style={settingsStyle.card}>
                                <CardItem style={settingsStyle.card}>
                                    <Text style={settingsStyle.maintext}>About Us</Text>
                                    <Right style={settingsStyle.row}>
                                        <View style={settingsStyle.row}>
                                            <IconAntDesign style={{ fontSize: 16 }} type='AntDesign' name="right" ></IconAntDesign>
                                        </View>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => this.props.navigation.navigate('terms')}>
                            <Card style={settingsStyle.card}>
                                <CardItem style={settingsStyle.card}>
                                    <Text style={settingsStyle.maintext}>Terms and Condition</Text>
                                    <Right style={settingsStyle.row}>
                                        <View style={settingsStyle.row}>
                                            <IconAntDesign style={{ fontSize: 16 }} type='AntDesign' name="right" ></IconAntDesign>
                                        </View>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Pressable>
                        <Pressable onPress={() => this.props.navigation.navigate('privacyPolicy')}>
                            <Card style={settingsStyle.card}>
                                <CardItem style={settingsStyle.card}>
                                    <Text style={settingsStyle.maintext}>Privacy Policy</Text>
                                    <Right style={settingsStyle.row}>
                                        <View style={settingsStyle.row}>
                                            <IconAntDesign style={{ fontSize: 16 }} type='AntDesign' name="right" ></IconAntDesign>
                                        </View>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Pressable>
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default Settings