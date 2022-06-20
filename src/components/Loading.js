import {ActivityIndicator, View} from "react-native";
import {styles} from "./Styles";

const Loading = ({color}) => {
    return(
        <View style={styles.loadingContainer}>
            <ActivityIndicator  size="large" color={!!color ? color : 'blue' }/>
        </View>
    );
}

export default Loading;
