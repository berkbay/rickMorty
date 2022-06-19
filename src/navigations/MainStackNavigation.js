import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Anasayfa" component={HomeScreen}/>
                <Stack.Screen name="Bölüm Detayı" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation;