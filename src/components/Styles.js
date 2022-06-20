import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    //Header Component
    customHeaderView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60
    },
    customHeaderText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize:20
    },

    // Episodes List Item
    listItemContainer: {
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:10,
        justifyContent:'space-between'
    },
    listItemImageStyle: {
        width:65,
        height:65,
        borderRadius:10
    },
    listItemInfoContainer: {
        justifyContent:'space-evenly',
        marginHorizontal:10
    },
    listItemInfoTitleText: {
        fontSize:16,
        fontWeight:'700'
    },
    listItemInfoText: {
        fontSize:14,
        fontWeight:'400'
    },

    //Empty List Component
    emptyListImage: {
        width: 250,
        height: 350
    },
    emptyListErrorText: {
        color: 'red',
        fontWeight:'600',
        fontSize:18,
        marginTop:20,
        textAlign:'center'
    },

    //Loading Component
    loadingContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    //Character Detail
    characterItemTextsContainer: {
        flexDirection:'row',
        marginVertical:3,
        justifyContent: 'space-between'
    },
    characterItemTypeText: {
        fontSize:16,
        fontWeight:'700'
    },
    characterItemInfoText: {
        fontSize:16,
        fontWeight:'400'
    },
})
