import {Text, View} from "react-native";
import React from "react";
import {styles} from "./Styles";

const InfoTextItem = ({type , info}) => {
    return(
        <View style={styles.characterItemTextsContainer}>
            <Text style={styles.characterItemTypeText}>{type}</Text>
            <Text style={styles.characterItemInfoText}>{info}</Text>
        </View>
    );
}

export default InfoTextItem;
