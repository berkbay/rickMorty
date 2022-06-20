import React, {useCallback, useEffect} from "react";
import {Text, SafeAreaView, View, Image, FlatList} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {useDispatch, useSelector} from "react-redux";
import {getEpisodeDetail} from "../store/actions/EpisodeAction";
import Loading from "../components/Loading";
import EmptyListComponent from "../components/EmptyListComponent";
import CharacterListItem from "../components/CharacterListItem";
import SeparatorItem from "../components/SeparatorItem";

const EpisodeDetailScreen = ({navigation, route}) => {

    const dispatch = useDispatch()
    const episode = route.params.slice(-1)

    useEffect(() => {
        dispatch(getEpisodeDetail(episode))
    },[episode])

    const onRefresh = useCallback(() => {
        dispatch(getEpisodeDetail(episode))
    },[episode])

    const {episodeData, episodeLoading, episodeError} = useSelector(state => state.episodes)

    return (
        <SafeAreaView style={{flex:1}}>
            {episodeLoading === true ? <Loading/> :
                <View style={{flex:1}}>
                    {episodeError !== '' ? <EmptyListComponent error={episodeError}/> :
                        <View style={{flex:1}}>
                            <CustomHeader navigation={navigation} name={`${episodeData.name} - ${episodeData.episode}`}/>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../../assets/img/rick-and-morty-avatar.jpeg')}/>
                                <Text style={{marginVertical:20, fontWeight:'700', fontSize:20}}>Characters</Text>
                            </View>
                            <View style={{flex:1}}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={episodeData.characters}
                                    renderItem={({item, index}) =>
                                        <CharacterListItem
                                            item={item}
                                            navigation={navigation}
                                        />
                                    }
                                    onRefresh={() => onRefresh()}
                                    refreshing={episodeLoading}
                                    keyExtractor={(item, index) => index.toString()}
                                    ItemSeparatorComponent={() => <SeparatorItem color={'grey'}/>}
                                />
                            </View>
                        </View>
                    }
                </View>
            }

        </SafeAreaView>
    );
}

export default EpisodeDetailScreen;

