import * as React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Pressable, Image, Button } from 'react-native';
import globalStyle from '../../src/styles/globalStyle';
import welcomeStyle from './welcomeStyle';

class W1 extends React.Component {
    constructor(props) {
        super();
        this.state = {}
        }
    
    render() {
        
        return (
            <>
               {/* <NavigationContainer> */}
                    
                {/* </NavigationContainer> */}
                <ScrollView style={globalStyle.lightBackground,{zIndex:-1}}>
                
                    <Pressable>
                        <Text style={welcomeStyle.skip}>Skip</Text>
                    </Pressable>
                  
                    <Image
                        style={welcomeStyle.welcomeImg}
                        source={require('../../src/images/w1.png')}
                    />
                  
                    <View>
                        <Text style={welcomeStyle.welcomeHeading}>Welcome</Text>
                    </View>
                    <View>
                        <Text style={welcomeStyle.welcomeText1}>
                            Sed ut perspiciatis unde
                        </Text>
                    </View>
                    <View>
                        <Text style={welcomeStyle.welcomeText2}>
                            omnis iste natus error sit.
                        </Text>
                    </View>
                    <View style={[welcomeStyle.row, welcomeStyle.mt63]}>
                        <View style={welcomeStyle.col6}>
                            <View style={welcomeStyle.row}>
                                <View style={welcomeStyle.circleFill}>

                                </View>
                                <View style={welcomeStyle.circle}>

                                </View>
                                <View style={welcomeStyle.circle}>

                                </View>
                            </View>
                        </View>
                        {/* <View style={welcomeStyle.col6}>
                            
                        </View> */}

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('welcome2')}
                            style={welcomeStyle.priButton}>
                            <Text style={welcomeStyle.buttonText}

                            >Next</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default W1