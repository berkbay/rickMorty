import {Image, Text, View} from "react-native";
import React from "react";
import {styles} from "./Styles";

const EmptyListComponent = ({image, error}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.emptyListImage}
            />
            <Text style={styles.emptyListErrorText}>
                {error}
            </Text>
        </View>
    );
}

export default EmptyListComponent;
