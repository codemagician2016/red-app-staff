
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable, TextInput } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import profileStyle from './profileStyle';
import { Button,Appbar } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, CardItem, Footer, FooterTab, Header, Picker, Form, Icon, Title, Right } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import axios from 'axios'
import Toast from 'react-native-toast-message';
import config from '../../config'
import { Formik } from 'formik';
import { launchImageLibrary } from 'react-native-image-picker';
import { DrawerActions } from '@react-navigation/native';

class profile extends React.Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef()
        this.state = {
            isTempImg: true
        };
    }

    componentDidMount() {
        this.getProfile()
    }

    async getProfile() {
        try {
            let response = await axios.get(config.apiUrl + "profile")
            let res = response.data ? response.data : {}
            if (res.success) {
                let { name, mobile, city, gender, born, country, password, profileImage, id } = res.data
                this.formRef.current.setFieldValue("name", name ? name : "")
                this.formRef.current.setFieldValue("mobile", mobile ? mobile : "")
                this.formRef.current.setFieldValue("city", city ? city : "")
                this.formRef.current.setFieldValue("gender", gender ? gender : "")
                this.formRef.current.setFieldValue("born", born ? born : "")
                this.formRef.current.setFieldValue("country", country ? country : "")
                this.formRef.current.setFieldValue("password", password ? password : "")
                this.formRef.current.setFieldValue("profileImage", profileImage ? profileImage : "")
                this.formRef.current.setFieldValue("id", id ? id : "")
                this.setState({ isTempImg: false })
            }
        }
        catch (err) {
            Toast.show({
                text1: err.message,
                type: 'error'
            });
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
                        this.formRef.current.setFieldValue('profileImage', response.data.file.filename)
                        Toast.show({
                            text1: response.data.message,
                            type: 'success'
                        });
                        this.setState({ isTempImg: true })
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

    async updateProfile(data) {
        try {
            if (!this.state.isTempImg) {
                delete data.profileImage
            }
            let response = await axios.put(config.apiUrl + `profile`, data)
            let res = response.data ? response.data : {}
            if (res.success) {
                Toast.show({
                    text1: res.message,
                    type: 'success'
                });
                this.getProfile()
            }
            else {
                Toast.show({
                    text1: res.message,
                    type: 'error'
                });
            }
        }
        catch (err) {
            // Toast.show({
            //     text1: err.message,
            //     type: 'error'
            // });
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <>
                <Formik initialValues={{
                    name: "", mobile: "", gender: "", born: "", country: "",
                    city: "", password: "", profileImage: "", id: ""
                }} innerRef={this.formRef}
                    onSubmit={(values) => {
                        this.updateProfile(values)
                    }

                    }>
                    {
                        (props) => (
                            <View>
                                <Appbar.Header style={profileStyle.header}>
                                    <Icon type="Entypo" name="menu"
                                        onPress={() => {
                                            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                                        }
                                        }
                                        
                                    />
                                    <Appbar.Content title="My Profile"/>
                                </Appbar.Header>
                                <ScrollView style={{ marginHorizontal: 0, marginBottom: 0, backgroundColor: '#fff' }}>
                                    <View style={profileStyle.mainContainer}>
                                        <Card style={profileStyle.card}>
                                            <CardItem style={profileStyle.cardItem}>
                                                <Body>
                                                    {/* <View style={profileStyle.menurow}>
                                                        <IconEntypo style={{ marginRight: 8, fontSize: 30, color: COLORS.black, flex: .48 }} name="menu"
                                                            onPress={() => {
                                                                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                                                            }}></IconEntypo>
                                                        <View>
                                                            <Text>My Profile</Text>

                                                        </View>
                                                    </View> */}

                                                    <View style={profileStyle.profilebox}>
                                                        {
                                                            this.state.isTempImg ?
                                                                <Image
                                                                    style={profileStyle.profile}
                                                                    source={{ uri: `${config.apiUrl}public/temp/${props.values.profileImage}` }}
                                                                /> :
                                                                <Image
                                                                    style={profileStyle.profile}

                                                                    source={{ uri: `${config.apiUrl}public/profile/${props.values.id}/${props.values.profileImage}` }}
                                                                />
                                                        }
                                                        <Pressable style={profileStyle.change} onPress={() => { this.openGallery() }}>
                                                            <Text style={profileStyle.changetext}>Change image</Text>
                                                        </Pressable>
                                                    </View>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <View style={profileStyle.headingBox}>
                                            <Text style={profileStyle.headingText}>Contact details</Text>
                                        </View>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Name</Text>
                                                        <TextInput
                                                            style={profileStyle.textinput}
                                                            value={props.values.name}
                                                            name="name"
                                                            onChangeText={props.handleChange('name')}
                                                        />
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Phone Number</Text>
                                                        <TextInput
                                                            style={profileStyle.textinput}
                                                            value={props.values.mobile}
                                                            name='mobile'
                                                            onChangeText={props.handleChange('mobile')}
                                                            editable={false}
                                                        />
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Gender</Text>
                                                        <Form style={{ flex: .6 }}>
                                                            <Picker
                                                                mode="dropdown"
                                                                iosHeader="Gender"
                                                                iosIcon={<Icon type="FontAwesome" name="angle-down" />}
                                                                style={profileStyle.pickerinput}
                                                                name="gender"
                                                                selectedValue={props.values.gender}
                                                                onValueChange={props.handleChange('gender')}
                                                            >
                                                                <Picker.Item label="Select Gender" value="" />
                                                                <Picker.Item label="Male" value="Male" />
                                                                <Picker.Item label="Female" value="Female" />
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Born</Text>
                                                        <TextInput
                                                            style={profileStyle.textinput}
                                                            value={props.values.born}
                                                            name="born"
                                                            onChangeText={props.handleChange('born')}
                                                        />
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Country</Text>
                                                        <Form style={{ flex: .6 }}>
                                                            <Picker
                                                                mode="dropdown"
                                                                iosHeader="Country"
                                                                iosIcon={<Icon type="FontAwesome" name="angle-down" />}
                                                                style={profileStyle.pickerinput}
                                                                name='country'
                                                                selectedValue={props.values.country}
                                                                onValueChange={props.handleChange('country')}
                                                            >
                                                                <Picker.Item label="Select Country" />
                                                                <Picker.Item label="IRAQ" value="IRAQ" />
                                                                <Picker.Item label="USA" value="USA" />
                                                                <Picker.Item label="INDIA" value="INDIA" />

                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>City</Text>
                                                        <Form style={{ flex: .6 }}>
                                                            <Picker
                                                                mode="dropdown"
                                                                iosHeader="Country"
                                                                iosIcon={<Icon type="FontAwesome" name="angle-down" />}
                                                                style={profileStyle.pickerinput}
                                                                selectedValue={props.values.city}
                                                                name='city'
                                                                onValueChange={props.handleChange('city')}
                                                            >
                                                                <Picker.Item label="Select City" />
                                                                <Picker.Item label="Baghdad" value="Baghdad" />
                                                                <Picker.Item label="Faridabad" value="Faridabad" />
                                                            </Picker>
                                                        </Form>
                                                    </View>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        <View style={profileStyle.headingBox}>
                                            <Text style={profileStyle.headingText}>Password</Text>
                                        </View>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText, { color: COLORS.blue }}>Change password</Text>

                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Current password</Text>
                                                        <TextInput
                                                            style={profileStyle.textinput}
                                                            value={props.values.password}
                                                            name='password'
                                                            onChangeText={props.handleChange('password')}
                                                            secureTextEntry={true}
                                                        />
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>New password</Text>
                                                        <TextInput
                                                            style={profileStyle.textinput}
                                                            value={props.values.password}
                                                            name='password'
                                                            onChangeText={props.handleChange('password')}
                                                            secureTextEntry={true}
                                                        />
                                                    </View>
                                                    <View style={profileStyle.menurow}>
                                                        <Text style={profileStyle.profileText}>Confirm new pass</Text>
                                                        <TextInput
                                                            style={profileStyle.textinput}
                                                            value={props.values.password}
                                                            name='password'
                                                            onTextInput={props.handleChange('password')}
                                                            secureTextEntry={true}
                                                        />
                                                    </View>


                                                </Body>
                                            </CardItem>
                                        </Card>
                                   
                                    <Footer style={profileStyle.footer}>
                                        <FooterTab style={profileStyle.footertab}
                                            onPress={() => this.props.navigation.navigate('myticket')}
                                        >
                                            <Button style={profileStyle.booknow} full
                                                onPress={props.handleSubmit}
                                            >
                                                <Text style={{ color: COLORS.white }}>Save</Text>
                                            </Button>
                                        </FooterTab>
                                    </Footer>
                                    </View>
                                </ScrollView>
                             
                            </View>
                        )
                    }
                      
                </Formik>
                

            </>
        )
    }
}

export default profile
