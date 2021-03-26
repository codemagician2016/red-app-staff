
import * as React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import ticketInformationStyle from './ticketInformationStyle';
import { Button, TextInput } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";
import { Card, Body, Icon, Header, Left, Right, Title, List, ListItem, Form, Thumbnail, } from 'native-base';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../src/styles/colors';
import { round } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';
import { Formik, FieldArray } from 'formik'

class ticketInformation extends React.Component {

    constructor(props) {
        super();
        this.initializeState()
    }

    initializeState() {
        this.state = {
            selected: "key1",
            orderData: {},
            ticketTypes: [],
            selectedSeats: []
        };
        this.formRef = React.createRef()
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.initializeState()
            this.getOrderData()
        })
        this.getOrderData()
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    async getOrderData() {
        try {
            let data = await AsyncStorage.getItem('orderData')
            let selectedSeats = await AsyncStorage.getItem("selectedSeats")
            this.setState({ selectedSeats: JSON.parse(selectedSeats) })
            if (data) {
                data = JSON.parse(data)
                this.setState({ orderData: data })
                this.setState({ ticketTypes: data.ticketTypes })
            }
        }
        catch (err) {
            console.warn(err.message)
        }
    }

    async confirmTicket() {
        try {
            let payload = {
                tickets: this.state.ticketTypes,
                amount: this.state.orderData.amount,
                totalSeats: this.state.orderData.totalSeats,
                visitors: this.formRef.current.values.visitors,
                paymentMode: this.state.orderData.paymentMode,
                eventId: this.props.route.params.id
            }
            let response = await axios.post(config.apiUrl + `book/ticket`, payload)
            let res = response.data
            if (res.success) {
                Toast.show({
                    text1: res.message,
                    type: 'success'
                });
                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'success' }],
                });
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
                <Header style={ticketInformationStyle.header}>
                    <Left>
                        {/* <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon style={{ color: '#fff' }} name='arrow-back' />
                        </Button> */}
                    </Left>
                    <Body>
                        <Title style={ticketInformationStyle.headerTitle}>Ticket Information</Title>
                    </Body>
                    <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <IconEntypo style={{ marginRight: 8, color: COLORS.white }} name="clock"></IconEntypo>
                        <Text style={ticketInformationStyle.headerText}>6:00</Text> */}
                    </Right>
                </Header>
                <Formik initialValues={{
                    visitors: [
                        {
                            name: "",
                            mobile: "",
                            ticketId: ""
                        },
                    ],
                }}
                    innerRef={this.formRef}

                >{
                        (props) => (
                            <ScrollView style={globalStyle.lightBackground, { marginHorizontal: 0, marginBottom: 168 }}>
                                <Form>
                                    <FieldArray
                                        name="visitors"
                                        render={arrayHelpers => (
                                            <View style={ticketInformationStyle.mainContainer}>
                                                {
                                                    this.state?.selectedSeats?.map((_, index) => {
                                                        return (
                                                            <View key={index}>
                                                                <View style={ticketInformationStyle.ticketnobox}>
                                                                    <Text style={ticketInformationStyle.firstcol}>{_?.description}</Text>
                                                                    <Text style={ticketInformationStyle.secondcol}>({_?.type})</Text>
                                                                </View>
                                                                <List>
                                                                    <ListItem style={{ backgroundColor: "#fff", width: '100%', marginLeft: 0, paddingLeft: 33, paddingRight: 33 }}>
                                                                        <Body>
                                                                            <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.black }}>Name</Text>
                                                                            <TextInput style={{ backgroundColor: 'transparent' }}
                                                                                name={`visitors.${index}.name`}
                                                                                onChangeText={props.handleChange(`visitors.${index}.name`)}></TextInput>
                                                                        </Body>
                                                                    </ListItem>
                                                                    <ListItem style={{ backgroundColor: "#fff", width: '100%', marginLeft: 0, paddingLeft: 33, paddingRight: 33 }}>
                                                                        <Body>
                                                                            <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.black }}>Phone Number</Text>
                                                                            <TextInput style={{ backgroundColor: 'transparent' }} keyboardType={'numeric'}
                                                                                name={`visitors.${index}.mobile`}
                                                                                onChangeText={(e) => {
                                                                                    props.setFieldValue(`visitors.${index}.mobile`, e)
                                                                                    props.setFieldValue(`visitors.${index}.ticketId`, _._id)
                                                                                }
                                                                                }></TextInput>
                                                                            <TextInput style={{ display: 'none' }} value={_._id} name={`visitors.${index}.ticketId`}></TextInput>
                                                                        </Body>
                                                                    </ListItem>
                                                                </List>
                                                            </View>
                                                        )
                                                    }

                                                    )
                                                }
                                            </View>
                                        )}>

                                    </FieldArray>
                                </Form>
                            </ScrollView>
                        )
                    }
                </Formik>

                <Card style={ticketInformationStyle.rdFooter}>
                    <Body>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>
                            {/* <View style={{ flex: .4 }}>
                                <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                                    <Text style={ticketInformationStyle.lightText}>Total</Text>
                                    <Text style={ticketInformationStyle.darkText}>$64.80</Text>
                                </View>
                            </View> */}
                            <View style={{ flex: 1 }}>
                                <Button mode="contained" style={ticketInformationStyle.booknow}
                                    onPress={() => this.confirmTicket()}
                                >Confirm</Button>
                            </View>
                        </View>
                    </Body>
                </Card>
            </>
        )
    }
}

export default ticketInformation
