
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import signUpStyle from '../../screens/sign-up/signUpStyle';
import { TextInput, Button, Appbar } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Formik } from 'formik';
import * as yup from 'yup';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';

const registerValidation = yup.object({
    name: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    mobile: yup.number().required()
})

class signup extends React.Component {
    constructor(props) {
        super();
        this.formRef = React.createRef()
        this.state = {
            isShowPass: false,
            isShowConfirmPass: false,
            image: "",
            message: ''
        }
    }

    handlePass(type) {
        if (type == 'confirm') {
            this.setState({ isShowConfirmPass: !this.state.isShowConfirmPass })
        }
        else {
            this.setState({ isShowPass: !this.state.isShowPass })
        }
    }

    async openGallery() {
        try {
            launchImageLibrary({}, async (res) => {
                if (!res.didCancel) {
                    let formData = new FormData()
                    formData.append('file', {
                        uri: res.uri,
                        type: res.type,
                        name: res.fileName
                    });
                    let response = await axios.post(config.apiUrl + 'file/upload', formData)
                    if (response.data.success) {
                        Toast.show({
                            text1: response.data.message,
                            type: 'success'
                        });
                        this.formRef.current.setFieldValue('profileImage', response.data.file.filename)
                    }
                    else {
                        Toast.show({
                            text1: response.data.message,
                            type: 'error'
                        });
                    }
                }
            })
        }
        catch (err) {
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    async registerUser(data) {
        try {
            let response = await axios.post(config.apiUrl + 'register', data)
            if (response.data.success) {
                Toast.show({
                    text1: response.data.message,
                    type: 'success'
                });
                this.formRef.current.resetForm()
                this.props.navigation.navigate('otp', { mobile: data.mobile,otp:response.data.otp })
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
        return (
            <>
                <Appbar.Header style={globalStyle.header}>
                    <Appbar.BackAction onPress={()=>this.props.navigation.goBack()} />

                </Appbar.Header>
                <ScrollView style={globalStyle.lightBackground}>
                    <View style={signUpStyle.mainContainer}>
                        <View style={signUpStyle.imageContainer}>
                            <Image
                                style={signUpStyle.logo}
                                source={require('../../src/images/logo.png')}
                            />
                        </View>
                        <Formik initialValues={{ name: '', mobile: '', profileImage: "", password: '', confirmPassword: '', profileImage: "" }}
                            onSubmit={(values) => {
                                this.registerUser(values)
                            }}
                            validationSchema={registerValidation}
                            innerRef={this.formRef}
                        >
                            {
                                (props) => (
                                    <View>
                                        <TextInput style={signUpStyle.textInput}
                                            label="Name"
                                            value={props.values.name}
                                            maxLength={10}
                                            name='name'
                                            onChangeText={props.handleChange('name')}
                                        />
                                        <Text style={signUpStyle.errText}>{props.touched.name && props.errors.name}</Text>
                                        <View style={signUpStyle.numberRow}>
                                            <View style={signUpStyle.col2}>
                                                <Text style={signUpStyle.numberText}>Number</Text>
                                                <View style={signUpStyle.flagContainer}>
                                                    <View>
                                                        <Image
                                                            style={signUpStyle.flag}
                                                            source={require('../../src/images/flag.png')}
                                                        />
                                                    </View>
                                                    <View>
                                                        <Text style={signUpStyle.number}>+61</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={signUpStyle.col10}>
                                                <TextInput style={signUpStyle.textInput}
                                                    keyboardType='numeric'
                                                    maxLength={10}
                                                    name='mobile'
                                                    onChangeText={props.handleChange('mobile')}
                                                    value={props.values.mobile}
                                                />
                                            </View>
                                        </View>
                                        <Text style={signUpStyle.errText}>{props.touched.mobile && props.errors.mobile}</Text>

                                        <View>
                                            <TextInput style={signUpStyle.textInput}
                                                label="Password"
                                                value={props.values.password}
                                                secureTextEntry={!this.state.isShowPass}
                                                name='password'
                                                onChangeText={props.handleChange('password')} />
                                            {
                                                this.state.isShowPass ?
                                                    <IconEntypo style={signUpStyle.eyeIcon} name="eye" size={20} onPress={() => this.handlePass("")} />
                                                    :
                                                    <IconEntypo style={signUpStyle.eyeIcon} name="eye-with-line" size={20} onPress={() => this.handlePass("")} />
                                            }
                                        </View>
                                        <Text style={signUpStyle.errText}>{props.touched.password && props.errors.password}</Text>

                                        <View>
                                            <TextInput style={signUpStyle.textInput}
                                                label="Repeat Password"
                                                value={props.values.confirmPassword}
                                                secureTextEntry={!this.state.isShowConfirmPass}
                                                name='confirmPassword'
                                                onChangeText={props.handleChange('confirmPassword')} />
                                            {
                                                this.state.isShowConfirmPass ?
                                                    <IconEntypo style={signUpStyle.eyeIcon} name="eye" size={20} onPress={() => this.handlePass("confirm")} />
                                                    :
                                                    <IconEntypo style={signUpStyle.eyeIcon} name="eye-with-line" size={20} onPress={() => this.handlePass("confirm")} />
                                            }

                                        </View>
                                        <Text style={signUpStyle.errText}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>

                                        <View>
                                            <TextInput style={signUpStyle.textInput}
                                                label="Repeat Profile picture"
                                                value="Select your profile picture"
                                                name='profileImage'
                                            />
                                            {
                                                props.values.profileImage ?
                                                    <Image source={{ uri: `${config.apiUrl}public/temp/${props.values.profileImage}` }} style={{ height: 50, width: 100,margin:'auto' }} />
                                                    : null
                                            }
                                            <IconEntypo style={signUpStyle.eyeIcon} name="upload" size={20} onPress={() => {this.openGallery()}} />
                                        </View>
                                        <Button
                                            // onPress={() => this.props.navigation.navigate('verifyPhonenNumber')}
                                            onPress={props.handleSubmit}
                                            style={signUpStyle.loginButton} mode="contained" >
                                            Sign Up
                                        </Button>
                                    </View>

                                )
                            }
                        </Formik>

                        <Text style={signUpStyle.termsBox}>
                            <Text>By pressing “Login” you agree with out  </Text>
                            <Text style={signUpStyle.link}>Terms & Conditions</Text>
                        </Text>

                        <Text style={signUpStyle.termsBox}>
                            <Text>Already member?   </Text>
                            <Text
                                onPress={() => this.props.navigation.navigate('login')}
                                style={signUpStyle.link}>Login</Text>
                        </Text>
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default signup