import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import { TextInput, Button, Appbar } from 'react-native-paper';
import signUpStyle from '../../screens/sign-up/signUpStyle';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';


const validation = yup.object({
    mobile: yup.number().required()
})

class ForgotPass extends React.Component {
    constructor(props) {
        super()
    }

    async forgotPass(data,resetForm) {
        try {
            let response = await axios.post(config.apiUrl + `forgot`, data)
            let res = response.data ? response.data : {}
            if (res.success) {
                Toast.show({
                    text1:res.message,
                    type: 'success'
                });
                resetForm.resetForm()
                this.props.navigation.navigate('otp',{mobile:data.mobile,otp:res.otp})
            }
            else {
                Toast.show({
                    text1: res.message,
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
        return (
            <>

                <ScrollView style={globalStyle.lightBackground}>
                    <View style={globalStyle.mainContainer}>
                        <View style={globalStyle.imageContainer}>
                            <Image
                                style={signUpStyle.logo}
                                source={require('../../src/images/logo.png')}
                            />
                        </View>
                        <Formik initialValues={{ mobile: "" }}
                            onSubmit={(values,resetForm) => {
                                this.forgotPass(values,resetForm)
                            }}
                            validationSchema={validation}>
                            {
                                (props) => (
                                    <View>
                                        <TextInput style={signUpStyle.textInput}
                                            label="Phone Number"
                                            keyboardType='numeric'
                                            maxLength={10}
                                            name='mobile'
                                            value={props.values.mobile}
                                            onChangeText={props.handleChange('mobile')}
                                        />
                                        <Text style={signUpStyle.errText}>{props.touched.mobile && props.errors.mobile}</Text>

                                        <Button style={signUpStyle.loginButton} mode="contained" onPress={props.handleSubmit}>
                                            Submit
                                 </Button>
                                    </View>
                                )
                            }
                        </Formik>


                    </View>
                </ScrollView>
            </>
        )
    }
}


export default ForgotPass