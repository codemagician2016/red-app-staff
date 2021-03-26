
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import signinStyle from '../../screens/login/signinStyle';
import { TextInput, Button } from 'react-native-paper';
import IconAntDedign from "react-native-vector-icons/AntDesign";
import { Formik } from 'formik';
import * as yup from 'yup';
import IconEntypo from "react-native-vector-icons/Entypo";
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validation = yup.object(
    {
        mobile: yup.number().required(),
        password: yup.string().required()
    }
)
class login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isShowPass: false
        }
    }

    handlePass() {
        if (this.state.isShowPass) {
            this.setState({ isShowPass: false })
        }
        else {
            this.setState({ isShowPass: true })
        }
    }

    async login(data, formReset) {
        try {
            let response = await axios.post(config.apiUrl + 'login', data)
            if (response.data.success) {
                Toast.show({
                    text1: response.data.message,
                    type: 'success'
                });
                await AsyncStorage.setItem('token', response.data.token)
                await AsyncStorage.getItem('token').then(userToken => {
                    axios.defaults.headers.common['x-access-token'] = userToken ? userToken : "";
                }).catch(err => {
                    console.warn(err)
                })
                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'home' }],
                });
                formReset.resetForm()
            }
            else {
                Toast.show({
                    text1: response.data.message,
                    type: 'success'
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
                    <View style={signinStyle.mainContainer}>
                        <View style={signinStyle.imageContainer}>
                            <Image
                                style={signinStyle.logo}
                                source={require('../../src/images/logo.png')}
                            />
                        </View>
                        <Formik initialValues={{ mobile: "", password: "" }}
                            onSubmit={(values, resetForm) => {
                                this.login(values, resetForm)
                            }}
                            validationSchema={validation}>
                            {
                                (props) => (
                                    <View>
                                        <TextInput style={signinStyle.textInput}
                                            label="Phone Number"
                                            keyboardType='numeric'
                                            maxLength={10}
                                            name='mobile'
                                            value={props.values.mobile}
                                            onChangeText={props.handleChange('mobile')}
                                        />
                                        <Text style={signinStyle.errText}>{props.touched.mobile && props.errors.mobile}</Text>
                                        <View>
                                            <TextInput style={signinStyle.textInput}
                                                label="Password"
                                                secureTextEntry={!this.state.isShowPass}
                                                name='password'
                                                value={props.values.password}
                                                onChangeText={props.handleChange('password')}
                                            />
                                            {
                                                this.state.isShowPass ?
                                                    <IconEntypo style={signinStyle.eyeIcon} name="eye" size={20} onPress={() => this.handlePass()} />
                                                    :
                                                    <IconEntypo style={signinStyle.eyeIcon} name="eye-with-line" size={20} onPress={() => this.handlePass()} />
                                            }
                                            <Text style={signinStyle.errText}>{props.touched.password && props.errors.password}</Text>

                                        </View>
                                        <Button style={signinStyle.loginButton} mode="contained" onPress={props.handleSubmit}>
                                            Login
                                     </Button>
                                    </View>
                                )
                            }
                        </Formik>

                        <View>
                            <Pressable style={signinStyle.forgot} onPress={() => this.props.navigation.navigate("forgot")}>
                                <Text style={signinStyle.forgotText}>Forgot password</Text>
                            </Pressable>
                        </View>
                        <Text style={signinStyle.termsBox}>
                            <Text>By pressing “Login” you agree with out  </Text>
                            <Text style={signinStyle.link}>Terms & Conditions</Text>
                        </Text>

                        {/* <Text style={signinStyle.signUp}
                            onPress={() => this.props.navigation.navigate('signup')}
                        >
                            Sign up
                        </Text> */}
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default login