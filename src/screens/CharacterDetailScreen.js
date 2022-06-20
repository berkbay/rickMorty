import React, {useCallback, useEffect, useState} from "react";
import {Text, SafeAreaView, View, Image, FlatList, Dimensions} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {useDispatch, useSelector} from "react-redux";
import {getEpisodeDetail} from "../store/actions/EpisodeAction";
import Loading from "../components/Loading";
import EmptyListComponent from "../components/EmptyListComponent";
import CharacterListItem from "../components/CharacterListItem";
import SeparatorItem from "../components/SeparatorItem";
import axios from "axios";
import InfoTextItem from "../components/InfoTextItem";

const {width, height} = Dimensions.get('window')

const CharacterDetailScreen = ({navigation, route,}) => {

    const [characterDetail, setCharacterDetail] = useState([])
    const [loading, setLoading] = useState(true)

    const getCharacterDetail = () => {
        setLoading(true)
        axios.get(route.params).then(res => {
            setLoading(false)
            setCharacterDetail(res.data)
        }).catch(err=> {
            setLoading(false)
            alert('There is a mistake')
        })
    }

    useEffect(() => {
        getCharacterDetail()
    },[route.params])

    return (
        <SafeAreaView style={{flex:1}}>
            {loading === true ? <Loading/> :
                <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <CustomHeader navigation={navigation} name={`${characterDetail.name}`}/>
                            <View style={{alignItems:'center'}}>
                                <Image source={{uri: characterDetail.image}} style={{width:width*0.60, height:width*0.60}}/>
                            </View>
                            <View style={{marginHorizontal:20, marginVertical:20}}>
                                <InfoTextItem type={'Gender : '} info={characterDetail.gender}/>
                                <InfoTextItem type={'Species : '} info={characterDetail.species}/>
                                <InfoTextItem type={'Status : '} info={characterDetail.status}/>
                                <InfoTextItem type={'Location : '} info={characterDetail.location?.name}/>
                                <InfoTextItem type={'Origin : '} info={characterDetail.origin?.name}/>
                                {characterDetail.type !== '' ? <InfoTextItem type={'Type : '} info={characterDetail.type}/> : null}
                                <InfoTextItem type={'Episode Number : '} info={characterDetail.episode?.length}/>
                            </View>
                        </View>
                </View>
            }
        </SafeAreaView>
    );
}

export default CharacterDetailScreen;

