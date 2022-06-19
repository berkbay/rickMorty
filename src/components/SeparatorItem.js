import {View} from "react-native";
import React from "react";

const SeparatorItem = ({color}) => {
    return(
        <View
            style={{
                backgroundColor: !!color ? color : 'grey',
                height: 0.5,
                marginVertical:3,
            }}
        />
    );
}

export default SeparatorItem;
