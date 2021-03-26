
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import singlenotificationStyle from './singlenotificationStyle';
import { Button, Appbar, Headline } from 'react-native-paper';
import { Card, CardItem, Body, Form, Picker, Icon, Tab, Tabs, Header } from 'native-base';
import IconEntypo from "react-native-vector-icons/Entypo";
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../../src/styles/colors';
import All from '../singlenotification/singlenotificationTabs/singlenotificationall';
import English from '../singlenotification/singlenotificationTabs/singlenotificationKurdish';
import Arabic from "../singlenotification/singlenotificationTabs/singlenotificationEnglish";
import Kurdish from "../singlenotification/singlenotificationTabs/singlenotificationArabic";
import { color } from 'react-native-reanimated';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';

class Createevent extends React.Component {

    constructor(props) {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <>
                <Appbar.Header style={singlenotificationStyle.header} >
                    <Appbar.BackAction 
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Create Event" />
                    <Icon type="Entypo" size={16} style={singlenotificationStyle.iconColor} name="dots-three-vertical" />

                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <View style={singlenotificationStyle.mainContainer}>

                        <Tabs tabBarUnderlineStyle={{ backgroundColor: COLORS.primary }}>
                            <Tab heading="All" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: COLORS.primary }}>
                                <All />
                            </Tab>
                            <Tab heading="English" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: COLORS.primary }}>
                                <English />
                            </Tab>
                            <Tab heading="Arabic" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: COLORS.primary }}>
                                <Arabic />
                            </Tab>
                            <Tab heading="Kurdish" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: COLORS.primary }}>
                                <Kurdish />
                            </Tab>
                            {/* <Tab heading="Tab2">
                                <Tab2 />
                            </Tab>
                            <Tab heading="Tab3">
                                <Tab3 />
                            </Tab> */}
                        </Tabs>
                    </View>
                </ScrollView>
                <Card style={singlenotificationStyle.rdFooter}>
                    <Body>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                            {/* <View style={{ flex: .4 }}>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={singlenotificationStyle.lightText}>Total</Text>
                                    <Text style={singlenotificationStyle.darkText}>$64.80</Text>
                                </View>
                            </View> */}
                            <View style={{ flex: 1 }}>
                                <Button mode="contained" style={singlenotificationStyle.booknow}
                                    onPress={() => this.props.navigation.navigate('assignEvent')}
                                >Save</Button>
                            </View>
                        </View>
                    </Body>
                </Card>
            </>
        )
    }
}

export default Createevent
