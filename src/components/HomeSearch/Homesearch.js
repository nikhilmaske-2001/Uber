import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Homesearch = (props) => {
    return (
        <View>
            <Text>Where to?</Text>
            <View>
                <AntDesign name={'clockcircle'} size={16} />
                <Text>Now</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={16} />
            </View>
        </View>
    );
};

export default Homesearch;
