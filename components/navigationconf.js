import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const navigationStyles = (nameIcon, background, textHeader) => {
    var myObj = new Object()
    myObj.headerTitleAlign = 'center'
    myObj.headerStyle = {
        height: 40,
        backgroundColor: background ? background :'#1e85d7',
        borderBottomWidth:0,
        elevation: 0,
        shadowOpacity: 0
    },
    myObj.headerShadowVisible = false // Remove boxshadow
    myObj.headerTintColor = textHeader ? textHeader : '#ffffff'

    myObj.headerTitleStyle = {
        fontWeight: '400',
    }

    myObj.cardStyle = {
        backgroundColor: background ? background :'#1e85d7'
    }
    myObj.tabBarIcon = ({ color, size }) => (
        <MaterialIcons name={nameIcon} color={color} size={size} />
    )

    myObj.tabBarActiveTintColor = '#1e85d7'
    return myObj
}

export const tabStyles = {
    tabBarStyle: {
        height: 40
    },
    tabBarActiveTintColor: '#e91e63'
}