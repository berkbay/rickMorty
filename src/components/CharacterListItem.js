import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {styles} from "./Styles";
import NextButton from "./NextButton";
import axios from "axios";

const CharacterListItem = ({item, navigation}) => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios.get(item).then(res => {
            setCharacter(res.data)
        })
    },[item])

    return(
        <View style={[styles.listItemContainer]}>
            <View style={{flexDirection:'row'}}>
                <Image
                    source={{uri: character.image}}
                    resizeMode='contain'
                    style={styles.listItemImageStyle}
                />
                <View style={styles.listItemInfoContainer}>
                    <Text style={styles.listItemInfoTitleText}>{character.name}</Text>
                    <Text style={styles.listItemInfoText}>{character.species}</Text>
                </View>
            </View>
            <NextButton nextPage={'CharacterDetail'} navigation={navigation} params={character.url}/>
        </View>
    );
}

export default CharacterListItem;
