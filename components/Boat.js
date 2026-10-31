import React from 'react';
import { View, Text, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={{ marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons
                    name="sail-boat"
                    size={22}
                    color="#666666"
                />

                <Text style={{ fontSize: 20, marginLeft: 4, flexShrink: 1 }}>
                    {name.toUpperCase()}
                </Text>
            </View>

            <Text>{description}</Text>

            <Image
                source={picture}
                style={{ width: '100%', height: 250 }}
                resizeMode="cover"
            />
        </View>
    );
};

export default Boat;