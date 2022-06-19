import React, {useState} from "react";
import {View, SafeAreaView, ScrollView, Text, FlatList, Image, Dimensions, ImageBackground} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {getEpisodes} from "../store/actions/EpisodeAction";
import CustomHeader from "../components/CustomHeader";
import Loading from "../components/Loading";
import EpisodesListItem from "../components/EpisodesListItem";
import EmptyListComponent from "../components/EmptyListComponent";
import SeparatorItem from "../components/SeparatorItem";



const HomeScreen = ({navigation, route}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEpisodes())
    },[])

    const {loading, data, error} = useSelector(state => state.episodes)

    return (
        <SafeAreaView style={{flex:1}}>
            {loading === true ? <Loading/> :
                <View style={{flex:1}}>
                    <CustomHeader navigation={navigation} name={'Bölümler'}/>
                    <FlatList
                        data={data.results}
                        renderItem={({item, index}) =>
                            <EpisodesListItem
                                item={item}
                                navigation={navigation}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={
                            <EmptyListComponent
                                error={error}
                                image={require('../../assets/img/rick-sad.jpeg')}
                            />
                        }
                        ItemSeparatorComponent={() => <SeparatorItem color={'grey'}/>}
                    />
                </View>
            }
        </SafeAreaView>
    );
}


export default HomeScreen;
