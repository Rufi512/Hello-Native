import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { navigationStyles, tabStyles } from './components/navigationconf'
import Home from './screens/Home'
import Register from './screens/Register'
import Contacts from './screens/Contacts'
import Transfer from './screens/Transfer'
import Bill from './screens/Bill'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


//Component to render in own Stack

function HomeStack(){
    const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

   return(
       <Stack.Navigator theme={navTheme} screenOptions={{ headerShown: true }}>
           <Stack.Screen name="Home Index" options={{...navigationStyles('home','','#082431'), headerShown: false}} component={Home} />
           <Stack.Screen name="Send Money" component={Transfer} options={{...navigationStyles('home','#ffffff','#082431')}}>
           </Stack.Screen>
           <Stack.Screen name="Bill" component={Bill} options={{...navigationStyles('home','transparent','#082431')}}></Stack.Screen>
       </Stack.Navigator>
   )
}

function ContactsStack(){
  return(
   <Stack.Navigator screenOptions={{ headerShown: true }}>
       <Stack.Screen name="Contacts List" options={navigationStyles('contacts')} component={Contacts} />
       <Stack.Screen name="Register" options={navigationStyles('contacts')} component={Register} />
   </Stack.Navigator>
   )
}
  
//Component to render screens on tab
function MyTab() {
    return (
        <Tab.Navigator screenOptions={tabStyles}>

            <Tab.Screen name="Home" component={HomeStack} options={{...navigationStyles('home'), headerShown: false}}/>

            <Tab.Screen name="Contacts" options={{...navigationStyles('contacts'), headerShown: false }} component={ContactsStack}/>     

        </Tab.Navigator>
    )
}

export default function App() {

 //Fonts Custom
 let [fontsLoaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

//Waiting for load fonts registered
   if (!fontsLoaded) {
    return(<AppLoading/>)
  }

//Initialization App
    return (
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
       )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});