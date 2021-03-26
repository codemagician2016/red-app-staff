
import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import singlenotificationStyle from './singlenotificationTabStyle';
class Arabic extends React.Component {

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
                    <Text>Nishant</Text>
                    </View>
                </ScrollView>

            </>
        )
    }
}

export default Arabic
