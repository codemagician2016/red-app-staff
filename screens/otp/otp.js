
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView} from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import otpStyle from '../../screens/otp/otpStyle';
import { TextInput, Button, Appbar, Headline, Paragraph } from 'react-native-paper';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import * as yup from 'yup';

const validation = yup.object({
    otp1:yup.number().required(),
    otp2:yup.number().required(),
    otp3:yup.number().required(),
    otp4:yup.number().required()
})
class otp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otp:""
        }
      
    }

    async resendOtp() {
        try {
            let data = {
                mobile: this.props.route.params.mobile != undefined ? this.props.route.params.mobile : null
            }
            let response = await axios.post(config.apiUrl + `forgot`, data)
            if (response.data.success) {
                Toast.show({
                    text1: response.data.message,
                    type: 'success'
                });
                this.setState({otp:response.data.otp})
            }
            else {
                Toast.show({
                    text1: response.data.message,
                    type: 'error'
                });
            }
        }
        catch (err) {
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    // verify otp

    async verifyOtp(data,resetForm) {
        try {
            let otp = "" + data.otp1 + data.otp2 + data.otp3 + data.otp4
            let payload = {
                verifyOtp: parseInt(otp),
                mobile: this.props.route.params.mobile != undefined ? this.props.route.params.mobile : null
            }

            let response = await axios.post(config.apiUrl + `otp/verify`, payload)
            if (response.data.success) {
                Toast.show({
                    text1: response.data.message,
                    type: 'success'
                });
                resetForm.resetForm()
                this.props.navigation.navigate('changepassword',{otp:parseInt(otp),mobile:payload.mobile})
            }
            else {
                Toast.show({
                    text1: response.data.message,
                    type: 'error'
                });
            }
        }
        catch (err) {
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    render() {
        // const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={globalStyle.header}>
                    <Appbar.BackAction onPress={()=>{
                        this.props.navigation.goBack()
                    }} />
                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <Formik initialValues={{ otp1: "", otp2: "", otp3: "", otp4: "", mobile: "" }}
                        onSubmit={(values,resetForm) => {
                            this.verifyOtp(values,resetForm)
                        }}
                        validationSchema={validation}>
                        {
                            (props) => (
                                <View style={otpStyle.mainContainer}>
                                    <Headline style={otpStyle.heading}>Enter code</Headline>
                                    <Text style={otpStyle.text}>Enter the four-digit code we sent to</Text>
                                    <Text style={otpStyle.mobileText}>{this.props.route.params.mobile != undefined ? this.props.route.params.mobile : null}</Text>
                                    <View>
                                    <Text>Your Otp is :{this.props.route.params.otp} </Text>
                                    </View>
                                    <View style={otpStyle.rowContainer}>
                                        
                                        <View style={otpStyle.col2}>
                                            <TextInput style={otpStyle.textInput}
                                                keyboardType='numeric'
                                                maxLength={1}
                                                name='otp1'
                                                value={props.values.otp1}
                                                onChangeText={props.handleChange('otp1')}
                                            />
                                        </View>
                                        <View style={otpStyle.col2}>
                                            <TextInput style={otpStyle.textInput}
                                                keyboardType='numeric'
                                                maxLength={1}
                                                name='otp2'
                                                value={props.values.otp2}
                                                onChangeText={props.handleChange('otp2')}
                                            />
                                        </View>
                                        <View style={otpStyle.col2}>
                                            <TextInput style={otpStyle.textInput}
                                                keyboardType='numeric'
                                                maxLength={1}
                                                name='otp3'
                                                value={props.values.otp3}
                                                onChangeText={props.handleChange('otp3')}
                                            />
                                        </View>
                                        <View style={otpStyle.col2}>
                                            <TextInput style={otpStyle.textInput}
                                                keyboardType='numeric'
                                                maxLength={1}
                                                name='otp4'
                                                value={props.values.otp4}
                                                onChangeText={props.handleChange('otp4')}
                                            />
                                        </View>
                                    </View>
                                    <Text style={otpStyle.errText}>{props.errors.otp1 || props.errors.otp2 || props.errors.otp3|| props.errors.otp4}</Text>
                                    <Text style={otpStyle.termsBox}>
                                        <Text>Didn’t receive SMS? </Text>
                                        <Text
                                            onPress={() => this.resendOtp()}
                                            style={otpStyle.link}>Resend Code</Text>
                                    </Text>
                                    <Button
                                        onPress={props.handleSubmit}
                                        style={otpStyle.confirm} mode="contained" >
                                        confirm
                                     </Button>

                                </View>
                            )
                        }
                    </Formik>
                </ScrollView>
            </>
        )
    }
}

export default otp