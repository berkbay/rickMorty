import {Text, View,TouchableOpacity} from "react-native";
import {styles} from "./Styles";
import {MaterialIcons} from "@expo/vector-icons";


const CustomHeader = ({navigation, name}) => {
    return(
        <View style={styles.customHeaderView}>
            {name === 'Anasayfa' ? <View/> :
            <TouchableOpacity
                style={{flex:1, paddingHorizontal:10}}
                onPress={() => {
                    navigation.goBack()
                }}>
                <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
            </TouchableOpacity>
            }
            <View style={{flex:4}}>
                <Text style={styles.customHeaderText}>{name}</Text>
            </View>
            <View style={{flex:1, paddingHorizontal:10}}/>
        </View>
    );
}

export default CustomHeader;
