
import * as React from 'react';
import { View, ScrollView, Text, Image, TextInput } from 'react-native';
import { Card, Form, Picker, Icon, Item, Input, Textarea, Button, Tab, Tabs, CardItem, Body, Right, Left, Thumbnail } from 'native-base';
import singlenotificationTabStyle from './singlenotificationTabStyle';
import { Divider, ToggleButton, Switch } from 'react-native-paper';
import globalStyle from '../../../src/styles/globalStyle';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../../../src/styles/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

class Singlenotification extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {

        return (
            <>
                <View style={singlenotificationTabStyle.maincontainer}>

                    <View style={globalStyle.divider}></View>
                    <View style={singlenotificationTabStyle.pickerContainer}>
                        <Form>
                            <Picker
                                mode="dropdown"
                                iosHeader="City"
                                iosIcon={<Icon type="FontAwesome" name="angle-down" />}
                                style={singlenotificationTabStyle.picker}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Baghdad" value="key0" />
                                <Picker.Item label="Baghdad" value="key1" />
                            </Picker>
                        </Form>
                    </View>
                    <View style={globalStyle.divider}></View>
                    <View style={singlenotificationTabStyle.input}>
                        <Item style={singlenotificationTabStyle.inputbox}>
                            <Input value="Title" />
                        </Item>
                    </View>
                    <View style={globalStyle.divider}></View>
                    <View style={globalStyle.divider}></View>
                    <View style={singlenotificationTabStyle.input}>
                        <Item style={singlenotificationTabStyle.inputbox}>
                            <Textarea style={{ width: '100%' }} rowSpan={5} placeholder="Description" />
                        </Item>
                    </View>
                    <View style={globalStyle.divider}></View>

                    <View style={singlenotificationTabStyle.input}>
                        <Item style={singlenotificationTabStyle.inputbox}>
                            <Input placeholder="Type event address here" />
                        </Item>
                    </View>
                    <View style={globalStyle.divider}></View>
                    <View style={singlenotificationTabStyle.input}>
                        <Item style={singlenotificationTabStyle.inputbox}>
                            <Icon style={{ color: COLORS.black }} name='location' />
                            <Input placeholder='Textbox with Success Input' />
                            <Button transparent>
                                <Text style={{ color: COLORS.primary, fontWeight: '600' }}>Map</Text>
                            </Button>
                        </Item>
                    </View>
                    <View style={globalStyle.divider}></View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={singlenotificationTabStyle.imgslider}>
                        <View style={singlenotificationTabStyle.addImgbox}>
                            <Image style={singlenotificationTabStyle.add}
                                source={require('../../../src/images/addImage.png')} />
                            <Text style={singlenotificationTabStyle.addtxt}>Add Image</Text>
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                        <View style={singlenotificationTabStyle.addedImgbox}>
                            <Image style={singlenotificationTabStyle.added}
                                source={require('../../../src/images/added-1.png')} />
                            <Image style={singlenotificationTabStyle.cross}
                                source={require('../../../src/images/cross.png')} />
                            <Image style={singlenotificationTabStyle.drag}
                                source={require('../../../src/images/drag.png')} />
                        </View>
                    </ScrollView>
                    <View style={singlenotificationTabStyle.divider}></View>
                    <View style={singlenotificationTabStyle.mx3}>
                        <View style={singlenotificationTabStyle.row}>
                            <Pressable style={singlenotificationTabStyle.col6} >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <IconAntDesign name="calendar"></IconAntDesign>
                                    <Text style={{ marginLeft: 10 }}>21 March</Text>
                                </View>
                                <View style={singlenotificationTabStyle.line}></View>
                            </Pressable>
                            <Pressable style={singlenotificationTabStyle.col6} >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <IconAntDesign name="clockcircleo"></IconAntDesign>
                                    <Text style={{ marginLeft: 10 }}>23:00</Text>
                                </View>
                            </Pressable>
                        </View>
                        <View style={singlenotificationTabStyle.divider}></View>

                    </View>

                    <View style={singlenotificationTabStyle.divider}></View>

                </View>
            </>
        )
    }
}

export default Singlenotification
