import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import EpisodeDetailScreen from "../screens/EpisodeDetailScreen";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
                <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation;
