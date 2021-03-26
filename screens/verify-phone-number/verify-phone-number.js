
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import verifyPhonenNumberStyle from '../../screens/verify-phone-number/verify-phone-numberStyle';
import { TextInput, Button, Appbar, Headline, Paragraph } from 'react-native-paper';
import IconAntDedign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
class verifyPhonenNumber extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render() {
        const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={globalStyle.header}>
                    <Appbar.BackAction onPress={_goBack} />
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <View style={verifyPhonenNumberStyle.mainContainer}>
                        {/* <View style={verifyPhonenNumberStyle.imageContainer}>
                            <Image
                                style={verifyPhonenNumberStyle.logo}
                                source={require('../../src/images/logo.png')}
                            />
                        </View> */}
                        <Headline style={verifyPhonenNumberStyle.heading}>Verify Phone number</Headline>
                        <Text style={verifyPhonenNumberStyle.numberText}>Enter Your Phone Number</Text>
                        <View style={verifyPhonenNumberStyle.numberRow}>
                            <View style={verifyPhonenNumberStyle.col2}>
                                <View style={verifyPhonenNumberStyle.flagContainer}>
                                    <View >
                                        {/* <Text style={verifyPhonenNumberStyle.numberText}> Number</Text> */}
                                        <Image
                                            style={verifyPhonenNumberStyle.flag}
                                            source={require('../../src/images/flag.png')}
                                        />
                                    </View>
                                    <View >
                                        <Text style={verifyPhonenNumberStyle.number}>+61</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={verifyPhonenNumberStyle.col10}>
                                <TextInput style={verifyPhonenNumberStyle.textInput}
                                    keyboardType='numeric'
                                    maxLength={10}
                                />
                            </View>
                        </View>
                        <View style={verifyPhonenNumberStyle.centerContainer}>
                           
                            <Paragraph style={verifyPhonenNumberStyle.para}>
                                Fusce at condimentum dolor, id laoreet orci. Donec feugiat magna finibus nisl euismod, eu pellentesque felis malesuada.
                            </Paragraph>
                        </View>

                        <Button
                            onPress={() => this.props.navigation.navigate('otp')}
                            style={verifyPhonenNumberStyle.confirm} mode="contained" >
                            confirm
                    </Button>

                    </View>
                </ScrollView>
            </>
        )
    }
}

export default verifyPhonenNumber