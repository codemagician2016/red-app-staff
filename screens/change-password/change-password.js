
import * as React from 'react';
import { View, ScrollView, Modal, Text, TouchableHighlight, Image } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import changepasswordStyle from './change-password-style';
import { TextInput, Button, Appbar, Headline, HelperText } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import * as yup from 'yup';

const passValidation = yup.object({
    password: yup.string().required('password is required'),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], "Passwords doesn’t match!")
})

class changepassword extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }


    constructor(props) {
        super();
        // this.state = {}
    }

    async resetPassword(data,resetForm) {
        try {
            let payload = {
                otp:this.props.route.params.otp ? this.props.route.params.otp : "",
                mobile:this.props.route.params.mobile ? this.props.route.params.mobile : "",
                password:data.password 
            }
            let response = await axios.post(config.apiUrl+`set/password`,payload)
            let res = response.data ? response.data : {}
            if(res.success){
                Toast.show({
                    text1: res.message,
                    type: 'success'
                });
                resetForm.resetForm()
                this.props.navigation.reset({
                    index: 0,
                    routes: [{name: 'login'}],
                  });
            }
            else{
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

        const _goBack = () => console.log('Went back');
        const { modalVisible } = this.state;

        return (
            <>
                <Appbar.Header style={globalStyle.header}>
                    <Appbar.BackAction onPress={()=>{
                        this.props.navigation.goBack()
                    }} />
                </Appbar.Header>
                <Formik initialValues={{ password:"",confirmPassword:""}}
                    onSubmit={(values,resetForm) => {
                        this.resetPassword(values,resetForm)
                    }}
                    validationSchema={passValidation}>
                    {
                        (props) => (
                            <ScrollView style={globalStyle.lightBackground}>
                                <View style={changepasswordStyle.mainContainer}>
                                    <Headline style={changepasswordStyle.heading}>Reset password</Headline>

                                    {/* <View>
                                    <TextInput style={changepasswordStyle.textInput}
                                        label="Old password"
                                        value="nishant"
                                        secureTextEntry={true} />
                                    <IconEntypo style={changepasswordStyle.eyeIcon} name="eye-with-line" color="#ADA9B6" size={20} />
                                </View> */}

                                    <View>
                                        <TextInput style={changepasswordStyle.textInput}
                                            label="New password"
                                            value={props.values.password}
                                            secureTextEntry={true} 
                                            name='password'
                                            onChangeText={props.handleChange('password')}
                                            />
                                              <Text style={changepasswordStyle.errText}>{props.touched.password && props.errors.password}</Text>
                                        {/* <IconEntypo style={changepasswordStyle.eyeIcon} name="check" color="green" size={20} /> */}
                                    </View>

                                    <View>
                                        <TextInput style={changepasswordStyle.textInput}
                                            label="Repeat new password"
                                            value={props.values.confirmPassword}
                                            name='confirmPassword'
                                            secureTextEntry={true}
                                            onChangeText={props.handleChange('confirmPassword')} />
                                        <HelperText style={changepasswordStyle.error} type="error">
                                            
                                   </HelperText>
                                        {/* <IconEntypo style={changepasswordStyle.eyeIcon} name="cross" color="red" size={20} /> */}
                                        <Text style={changepasswordStyle.errText}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                                    </View>

                                    <View style={changepasswordStyle.centerContainer}>
                                        <Button
                                            onPress={props.handleSubmit}
                                            style={changepasswordStyle.loginButton} mode="contained" >
                                            Continue
                                </Button>
                                    </View>

                                </View>
                            </ScrollView>
                        )
                    }

                </Formik>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={changepasswordStyle.centeredView}>
                        <View style={changepasswordStyle.modalView}>
                            <View style={changepasswordStyle.imageContainer}>
                                <Image
                                    style={changepasswordStyle.logo}
                                    source={require('../../src/images/check.png')}
                                />
                            </View>
                            <Text style={changepasswordStyle.modalText}>Your Password Changed</Text>

                            <TouchableHighlight
                                style={changepasswordStyle.openButton}

                                onPress={() => {
                                    this.setModalVisible(!modalVisible); this.props.navigation.navigate('drawerContent')
                                }}

                            >
                                <Text style={changepasswordStyle.textStyle}>Done</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View
                        onPress={() => {
                            this.setModalVisible(!modalVisible);
                        }}
                        style={changepasswordStyle.backdrop}>

                    </View>
                </Modal>
            </>
        )
    }
}

export default changepassword
