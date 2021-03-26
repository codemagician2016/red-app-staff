import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// staff
import Banned from './screens-staff/banned/banned';
import Alreadyin from './screens-staff/alreadyin/alreadyin';
import Scanqr from './screens-staff/scanqr/scanqr';
import Valid from './screens-staff/valid/valid';
import Invalid from './screens-staff/invalid/invalid';
import Eventvisitors from './screens-staff/eventvisitors/eventvisitors';
import multipletickets from './screens-staff/multipletickets/multipletickets';
// staff
import W1 from './screens/welcome/w1';
import w2 from './screens/welcome/w2';
import w3 from './screens/welcome/w3';
import login from './screens/login/signin';
import signup from './screens/sign-up/sign-up';
import verifyPhonenNumber from './screens/verify-phone-number/verify-phone-number';
import otp from './screens/otp/otp';
import changepassword from './screens/change-password/change-password';
import Home from './screens/home/home';
import singleAd from './screens/single-ad/single-ad';
import OrderMap from './screens/orderMap/orderMap';
import SingleAdScroll from './screens/single-ad-scroll/single-ad-scroll';
import TicketOption1 from './screens/ticketOption1/ticket-option-1';
import TicketOption2 from './screens/ticket-option-2/ticket-option-2';
import TicketOption3 from './screens/ticketOption3/ticket-option-3';
import checkout from './screens/checkout/checkout';
import addcreditcard from './screens/addcreditcard/addcreditcard';
import ticketInformation from './screens/ticketInformation/ticketInformation';
import ticketInformation2 from './screens/ticketInformation-2/ticketInformation2';
import success from './screens/success/success';
import profile from './screens/profile/profile';
import myticket from './screens/myticket/myticket';
import consertmyticket from './screens/consertmyticket/consertmyticket';
import myfavorite from './screens/myfavorite/myfavorite';
import ticketdetail from './screens/ticketdetail/ticketdetail';
import Wallet from './screens/wallet/wallet';
import Map from './screens/single-ad/map';
import Settings from './screens/settings/settings';
import Faq from './screens/faq/faq';
import Privacypolicy from './screens/privacypolicy/privacypolicy';
import Termsandcondition from './screens/termsandcondition/termsandcondition';
import Aboutus from './screens/aboutus/aboutus';
import Notification from './screens/notification/notification'
import {
  Provider as PaperProvider,
  DarkTheme as paperDarkTheme,
  DefaultTheme as paperDefaultTheme
} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './screens/DrawerContent'
import ThemeContext from './contexts/ThemeContext'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import ForgotPass from './screens/sign-up/forgotPass'
import MyEvent from './screens-staff/home/home'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

const customDarkTheme = {
  ...NavigationDarkTheme,
  ...paperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...paperDarkTheme.colors
  }
}

const customDefaultTheme = {
  ...NavigationDefaultTheme,
  ...paperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...paperDefaultTheme.colors
  }
}


export default function App() {
  const [isToken, setToken] = React.useState(false)

  React.useEffect(() => {
    checkToken()
  })

  const checkToken = async () => {
    try {
      let token = await AsyncStorage.getItem('token')
      if (token) {
        setToken(true)
      }
    }
    catch (err) {
      console.warn(err.message)
    }
  }

  return (
    <PaperProvider theme={customDefaultTheme}>
      <NavigationContainer theme={customDefaultTheme}>
        <Drawer.Navigator headerShown='none' drawerContent={props => <DrawerContent {...props} />}>
          {/* {
            isToken ?
              <React.Fragment> */}
          {/* <Drawer.Screen name="Welcome1" component={W1} options={{ headerShown: false }} options={({ route }) => {
                  return {
                    swipeEnabled: false,
                  };
                }} />
                <Stack.Screen name="welcome2" component={w2} options={{ headerShown: false }}
                  options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} />
                <Stack.Screen name="welcome3" component={w3} options={{ headerShown: false }}
                  options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} /> */}
          <Stack.Screen name="login" component={login} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          {/* <Stack.Screen name="forgot" component={ForgotPass} options={{ headerShown: false }}
                  options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} />
                <Stack.Screen name="verifyPhonenNumber" component={verifyPhonenNumber} options={{ headerShown: false }}
                  options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} />
                <Stack.Screen name="otp" component={otp} options={{ headerShown: false }}
                  options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} />
                  <Stack.Screen name="changepassword" component={changepassword} options={{ headerShown: false }} 
                   options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} /> */}
          <Drawer.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Drawer.Screen name="myEvent" component={MyEvent} options={{ headerShown: false }} />
          <Drawer.Screen name="orderMap" component={OrderMap} />
          <Drawer.Screen name="profile" component={profile} options={{ headerShown: false }} />
          <Drawer.Screen name="map" component={Map} options={{ headerShown: false }} />
          <Drawer.Screen name="wallet" component={Wallet} options={{ headerShown: false }} />
          <Drawer.Screen name="myticket" component={myticket} options={{ headerShown: false }} />
          <Drawer.Screen name="singleAd" component={singleAd} options={{ headerShown: false }} />
          <Stack.Screen name="ticketoption1" component={TicketOption1} options={{ headerShown: false }} />
          <Stack.Screen name="ticketoption2" component={TicketOption2} options={{ headerShown: false }} />
          <Drawer.Screen name="checkout" component={checkout} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Drawer.Screen name="addcreditcard" component={addcreditcard} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Drawer.Screen name="ticketInformation" component={ticketInformation} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Drawer.Screen name="success" component={success} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Drawer.Screen name="myfavorite" component={myfavorite} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Drawer.Screen name="notification" component={Notification} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="ticketdetail" component={ticketdetail} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />

          <Stack.Screen name="consertmyticket" component={consertmyticket} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />

          <Stack.Screen name="aboutus" component={Aboutus} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="setting" component={Settings} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="faq" component={Faq} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="privacyPolicy" component={Privacypolicy} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="terms" component={Termsandcondition} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="eventVisitors" component={Eventvisitors} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="multipletickets" component={multipletickets} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="scanqr" component={Scanqr} options={{ headerShown: false }}
            options={() => {
              return {
                swipeEnabled: false
              }
            }} />
          <Stack.Screen name="invalid" component={Invalid} options={{ headerShown: false }} 
          options={() => {
            return {
              swipeEnabled: false
            }
          }}/>
          <Stack.Screen name="banned" component={Banned} options={{ headerShown: false }} 
          options={() => {
            return {
              swipeEnabled: false
            }
          }}/>
          <Stack.Screen name="alreadyin" component={Alreadyin} options={{ headerShown: false }} 
          options={() => {
            return {
              swipeEnabled: false
            }
          }}/>
          <Stack.Screen name="valid" component={Valid} options={{ headerShown: false }} 
          options={() => {
            return {
              swipeEnabled: false
            }
          }}/>
          {/* <Stack.Screen name="login" component={login} options={{ headerShown: false }}
                  options={() => {
                    return {
                      swipeEnabled: false
                    }
                  }} />
              </React.Fragment>
              :
              <React.Fragment> */}

          {/* <Drawer.Screen name="home" component={Home} options={{ headerShown: false }} />

              </React.Fragment>
          } */}
        </Drawer.Navigator>
        {/* staff */}
        {/* 
          <Stack.Screen name="Eventvisitors" component={Eventvisitors} options={{ headerShown: false }} />
        
         
          <Stack.Screen name="map" component={Map} options={{ headerShown: false }} /> 
            <Stack.Screen name="aboutus" component={Aboutus} options={{ headerShown: false }} />
        <Stack.Screen name="termsandcondition" component={Termsandcondition} options={{ headerShown: false }} />
        <Stack.Screen name="privacypolicy" component={Privacypolicy} options={{ headerShown: false }} />
        <Stack.Screen name="faq" component={Faq} options={{ headerShown: false }} />
        <Stack.Screen name="settings" component={Settings} options={{ headerShown: false }} />
          */}
        {/* <Stack.Screen name="home" component={Home} options={{ headerShown: false }} /> */}
        {/* staff */}
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </PaperProvider>
  );
}