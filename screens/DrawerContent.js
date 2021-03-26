
import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal } from 'react-native';
import { List } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from "../src/styles/colors";
import { Switch, Drawer } from 'react-native-paper';
import ThemeContext from '../contexts/ThemeContext'
// export const ThemeContext = React.createContext(false)
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

class DrawerContent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isDarkTheme: false
        }
    }

    toggleTheme() {
        this.setState({ isDarkTheme: !this.state.isDarkTheme })
    }

    async logout() {
        try {
            let response = await AsyncStorage.removeItem('token')
            if (response == null) {
                Toast.show({
                    text1: "you have logged out successfully",
                    type: 'success'
                });
                await AsyncStorage.removeItem('token')
               this.props.navigation.reset({
                    index: 0,
                    routes: [{name: 'login'}],
                  });
                // this.props.navigation.replace('login');
                // this.props.navigation.navigate('login')
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
            <>
                <DrawerContentScrollView>
                     
                    <View style={styles.logoBox}>
                        <Image
                            style={styles.logo}
                            source={require('../src/images/logo.png')}
                        />
                    </View>
                    {/* <View style={styles.menuList}>
                    <List.Item style={styles.list}
                        title="Home"
                        // description="Item description"
                        left={props => <List.Icon {...props} icon="home" />}
                    />
                    <List.Item style={styles.list}
                        title="My Profile"
                        type="MaterialIcons"
                        left={props => <List.Icon  {...props} icon="person-pin" />}
                    />
                </View> */}

                    <View style={styles.menuList}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={'#C4C4C4'}
                                    size={30}
                                />
                            )}
                            label="Home"
                            onPress={() => this.props.navigation.navigate('home')}
                        />
                          <DrawerItem
                            icon={({ color, size }) => (
                                <IconFontAwesome5
                                    type="MaterialCommunityIcons"
                                    name="ticket-alt"
                                    color={'#C4C4C4'}
                                    size={25}></IconFontAwesome5>
                            )}
                            label="My Events"
                            onPress={() => this.props.navigation.navigate('myEvent')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-pin"
                                    color={'#C4C4C4'}
                                    size={30}
                                />
                            )}
                            label="My Profile"
                            onPress={() => this.props.navigation.navigate('profile')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconFontAwesome5
                                    type="MaterialCommunityIcons"
                                    name="ticket-alt"
                                    color={'#C4C4C4'}
                                    size={25}></IconFontAwesome5>
                            )}
                            label="My Tickets"
                            onPress={() => this.props.navigation.navigate('myticket')}
                        />
                       
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="heart"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="Favorites"
                            onPress={()=> this.props.navigation.navigate('myfavorite')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="bell"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="Notifications"
                            onPress={()=> this.props.navigation.navigate('notification')}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="wallet"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="Wallet"
                            onPress={() => this.props.navigation.navigate('wallet')}
                        />
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="comment-text-multiple"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="About Us"
                            onPress={()=>this.props.navigation.navigate('aboutus')}
                        /> */}
                         {/* <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="comment-text-multiple"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="Faq"
                            onPress={()=>this.props.navigation.navigate('faq')}
                        /> */}
                         {/* <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="comment-text-multiple"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="Privacy Policy"
                            onPress={()=>this.props.navigation.navigate('privacyPolicy')}
                        /> */}
                         {/* <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialCommunityIcons
                                    name="comment-text-multiple"
                                    color={'#C4C4C4'}
                                    size={25}></IconMaterialCommunityIcons>
                            )}
                            label="Terms Conditions"
                            onPress={()=>this.props.navigation.navigate('terms')}
                        /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="settings"
                                    color={'#C4C4C4'}
                                    size={25}></Icon>
                            )}
                            label="Settings"
                            onPress={()=>this.props.navigation.navigate('setting')}
                        />

                        <View style={styles.lowerBox}>
                            <Pressable onPress={() => this.logout()}>
                                <Text style={styles.lowerBoxText}>Logout</Text>
                            </Pressable>
                        </View>

                        {/* <DrawerItem label=""> */}
                        {/* <ThemeContext.Provider value={this.state.isDarkTheme}>
                                <View>
                                    <Text>Dark Theme</Text>
                                    <Switch
                                        value={this.state.isDarkTheme}
                                        onValueChange={() => { this.toggleTheme() }}
                                    />
                                </View>
                            </ThemeContext.Provider> */}
                        {/* </DrawerItem> */}

                    </View>

                </DrawerContentScrollView>
                {/* <Drawer.Section>

                   
                </Drawer.Section> */}
            </>
        );
    }
}

const styles = StyleSheet.create({

    logoBox: {
        marginTop: "10%",
        marginBottom: "10%"
    },
    logo: {
        width: 152,
        height: 45,
        // marginTop: 120,
        marginLeft: 20,
        resizeMode: 'contain'
    },
    menuList: {
        marginTop: 0
    },
    list: { fontSize: 24 },
    lowerBox: { marginTop: "20%", marginBottom: "20%", marginLeft: 24 },
    lowerBoxText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.black
    }
});

export default DrawerContent