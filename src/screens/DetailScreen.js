import React, {useEffect} from "react";
import {Text, SafeAreaView, View, Image} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {useDispatch, useSelector} from "react-redux";
import {getEpisodeDetail} from "../store/actions/EpisodeAction";
import Loading from "../components/Loading";
import EmptyListComponent from "../components/EmptyListComponent";
import {getCharacter} from "../store/actions/CharacterAction";

const DetailScreen = ({navigation, route}) => {

    const dispatch = useDispatch()
    const episode = route.params.slice(-1)

    useEffect(() => {
        dispatch(getEpisodeDetail(episode))
    },[episode])

    const {episodeData, episodeLoading, episodeError} = useSelector(state => state.episodes)

    return (
        <SafeAreaView style={{flex:1}}>
            {episodeLoading === true ? <Loading/> :
                <View style={{flex:1}}>
                    {episodeError !== '' ? <EmptyListComponent error={episodeError}/> :
                        <View style={{flex:1, alignItems:'center'}}>
                            <CustomHeader navigation={navigation} name={episodeData.name}/>
                            <Image source={require('../../assets/img/rick-and-morty-avatar.jpeg')}/>
                        </View>
                    }
                </View>
            }

        </SafeAreaView>
    );
}

export default DetailScreen;

