import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {styles} from "./componentsStyles";
import NextButton from "./NextButton";

const CharacterListItem = ({item, navigation}) => {

    // useEffect(() => {
    //
    // },[])
    return(
        <View style={styles.listItemContainer}>
            <View style={{flexDirection:'row'}}>
                <Image
                    source={require('../../assets/img/rick-and-morty-avatar.jpeg')}
                    resizeMode='contain'
                    style={styles.listItemImageStyle}
                />
                <View style={styles.listItemInfoContainer}>
                    <Text style={styles.listItemInfoTitleText}>1</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.listItemInfoText}>2</Text>
                        <Text style={styles.listItemInfoText}>3</Text>
                    </View>
                </View>
            </View>
            <NextButton nextPage={'Detail'} navigation={navigation} params={item.url}/>
        </View>
    );
}

export default CharacterListItem;
