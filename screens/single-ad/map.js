import * as React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'
import { Appbar } from 'react-native-paper';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import singleAdStyle from './singleAdStyle';
import axios from 'axios'
import config from '../../config'
import Toast from 'react-native-toast-message';

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: "",
            longitude: ""
        }
        this.getEventDetail()
    }

    componentDidMount() {

    }

    async getEventDetail() {
        try {
            let response = await axios.get(config.apiUrl + `event/${this.props.route.params.id}`)
            let res = response.data ? response.data : {}
            if (res.success) {
                if(res.data.mapAddress){
                    this.setState({ latitude: res.data.mapAddress.latitude ? res.data.mapAddress.latitude : "" })
                    this.setState({ longitude: res.data.mapAddress.longitude ? res.data.mapAddress.longitude : "" })
                }
              
            }
        }
        catch (err) {
            console.warn(err)
            Toast.show({
                text1: err.message,
                type: 'error'
            });
        }
    }

    render() {
        return (
            <View>
                <Appbar.Header style={singleAdStyle.header}>
                    <Appbar.BackAction
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    />
                </Appbar.Header>
                {
                    this.state.latitude ?
                        <MapView style={{ height: 500, width: 500 }}
                            initialRegion={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            showsMyLocationButton={true}
                            zoomEnabled={true}
                            minZoomLevel={10}
                        >
                            <Marker draggable={true} coordinate={this.state}>
                                <Image source={require('../../src/images/marker.png')} style={{ height: 60, width: 40 }} />
                            </Marker>
                        </MapView>
                        : null
                }
            </View>
        )
    }
}


export default Map



