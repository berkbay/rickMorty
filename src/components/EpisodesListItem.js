import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {styles} from "./Styles";
import {MaterialIcons} from "@expo/vector-icons";
import NextButton from "./NextButton";

const EpisodesListItem = ({item, navigation}) => {
    return(
        <View style={[styles.listItemContainer, {flex:1}]}>
            <View style={{flexDirection:'row', flex:1}}>
                <Image
                    source={require('../../assets/img/rick-and-morty-avatar.jpeg')}
                    resizeMode='contain'
                    style={styles.listItemImageStyle}
                />
            <View style={[styles.listItemInfoContainer,{flex:1}]}>
                <Text style={styles.listItemInfoTitleText}>{item.name}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.listItemInfoText}>{item.episode} / </Text>
                    <Text style={styles.listItemInfoText}>{item.air_date}</Text>
                </View>
            </View>
            </View>
            <NextButton nextPage={'EpisodeDetail'} navigation={navigation} params={item.url}/>
        </View>
    );
}

export default EpisodesListItem;
