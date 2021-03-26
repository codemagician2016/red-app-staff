
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import singlenotificationStyle from './singlenotificationTabStyle';
class Kurdish extends React.Component {

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
                    <Text>Kurdish</Text>
                    </View>
                </ScrollView>

            </>
        )
    }
}

export default Kurdish
