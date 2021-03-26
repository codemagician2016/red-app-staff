
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { Accordion, Icon } from 'native-base';
import globalStyle from '../../src/styles/globalStyle';
import faqStyle from '../faq/faqStyle';
import { TextInput, Button, Appbar, Switch, List } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

class Faq extends React.Component {
    constructor(props) {
        super();
        this.state = {
            dataArray: [
                { title: "First Element", content: "Lorem ipsum dolor sit amet" },
                { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
                { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
            ]
            // [expanded, setExpanded]: React.useState(true),
            // handlePress = () => setExpanded(!expanded),
        }
    }

    render() {

        // const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={faqStyle.header}>
                    <Appbar.BackAction onPress={() => {
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Supports & FAQs" />
                </Appbar.Header>
                <ScrollView style={globalStyle.grayBackground}>
                    <View style={faqStyle.mainContainer}>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={faqStyle.headeing}>Payments and Discount Fees</Text>
                        </View>

                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Totam rem aperiam</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Sed quia consequuntur magni</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Neque porro quisquam est</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Aliquam quaerat voluptatem</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={faqStyle.headeing}>Booking Information</Text>
                        </View>
                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Totam rem aperiam</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Sed quia consequuntur magni</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={faqStyle.collapse}>
                            <CollapseHeader style={faqStyle.collapsheader}>
                                <View style={faqStyle.headerbox}>
                                    <Text>Neque porro quisquam est</Text>
                                    <Icon icon style={{ fontSize: 20, marginLeft: 0, color: '#817C8B' }} name='chevron-down' />
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={faqStyle.collapsbody}>
                                <Text style={faqStyle.collapstext}>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</Text>
                            </CollapseBody>
                        </Collapse>

                        {/* Accordion List  */}
                        <AccordionList
                            list={this.state.list}
                            header={this._head}
                            body={this._body}
                            keyExtractor={item => item.key}
                        />
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default Faq