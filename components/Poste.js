import React from 'react';
import { View, Text } from 'react-native';
function Poste(props) {
    return (
        <View>
            <Text>Post</Text>
            <Text>{props.title}</Text>

        </View>
    );
}

export default Poste;