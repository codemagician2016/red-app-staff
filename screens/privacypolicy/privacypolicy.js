
import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { Accordion } from 'native-base';
import globalStyle from '../../src/styles/globalStyle';
import privacypolicyStyle from '../privacypolicy/privacypolicyStyle';
import { TextInput, Button, Appbar, Switch, List } from 'react-native-paper';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";


class Privacypolicy extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {

        const _goBack = () => console.log('Went back');
        return (
            <>
                <Appbar.Header style={privacypolicyStyle.header}>
                    <Appbar.BackAction onPress={()=>{
                        this.props.navigation.goBack()
                    }} />
                    <Appbar.Content title="Privacy Policy" />
                </Appbar.Header>
                <ScrollView style={globalStyle.grayBackground}>
                    <View style={privacypolicyStyle.mainContainer}>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={privacypolicyStyle.text}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                            </Text>
                            <Text style={privacypolicyStyle.text}>
                                Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </Text>
                            <Text style={privacypolicyStyle.headeing}>
                            Lorem Ipsum
                            </Text>
                            <Text style={privacypolicyStyle.text}>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            </>
        )
    }
}

export default Privacypolicy