
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import singlenotificationStyle from './singlenotificationTabStyle';
class English extends React.Component {

    constructor(props) {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <>

                <ScrollView >
                    <View style={singlenotificationStyle.mainContainer}>
                    <Text>English</Text>
                    </View>
                </ScrollView>

            </>
        )
    }
}

export default English
