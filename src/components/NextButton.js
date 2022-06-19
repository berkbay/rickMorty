import {MaterialIcons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import React from "react";

const NextButton = ({nextPage, navigation, params}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(nextPage, !!params ? params : null)}
            style={{justifyContent:'center', padding:10}}
        >
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
        </TouchableOpacity>
    );
}

export default NextButton;
