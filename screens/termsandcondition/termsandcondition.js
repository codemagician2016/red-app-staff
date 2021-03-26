
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { Accordion } from 'native-base';
import globalStyle from '../../src/styles/globalStyle';
import termsandconditionStyle from '../termsandcondition/termsandconditionStyle';
import { TextInput, Button, Appbar, Switch, List } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";


class Termsandcondition extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {

        // const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={termsandconditionStyle.header}>
                    <Appbar.BackAction onPress={()=>{
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Terms and Condition" />
                </Appbar.Header>
                <ScrollView style={globalStyle.grayBackground}>
                    <View style={termsandconditionStyle.mainContainer}>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={termsandconditionStyle.text}>
                                These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.
                            </Text>
                            <Text style={termsandconditionStyle.text}>
                            These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                            </Text>
                            
                            <Text style={termsandconditionStyle.text}>
                            Minors or people below 18 years old are not allowed to use this Website.
                            </Text>
                            <Text style={termsandconditionStyle.text}>
                            Intellectual Property Rights
                            </Text>
                            <Text style={termsandconditionStyle.text}>
                            Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
                            </Text>
                            <Text style={termsandconditionStyle.text}>
                            You are granted limited license only for purposes of viewing the material contained on this Website.
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            </>
        )
    }
}

export default Termsandcondition