import React from 'react';
import { Text, View } from 'react-native';
import Covidmessages from '../../components/CovidMessages/Covidmessages';

import HomeMap from '../../components/HomeMap/Homemap';
import CovidMessages from '../../components/CovidMessages/Covidmessages';

const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap />
            <CovidMessages />
        </View>
    );
};

export default HomeScreen;