import React from 'react';
import { Text, View } from 'react-native';

// All Homescreens are imported here
import HomeMap from '../../components/HomeMap/Homemap';
import CovidMessages from '../../components/CovidMessages/Covidmessages';
import HomeSearch from '../../components/HomeSearch/Homesearch'

const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap />
            <CovidMessages />
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;