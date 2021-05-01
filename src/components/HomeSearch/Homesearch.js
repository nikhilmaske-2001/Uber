import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import styles from '../../styles/HomeSearch';


const Homesearch = (props) => {
    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color='#535353' />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={18} color='#ffffff' />
                </View>
                <Text style={styles.destinationText}>Spin NightClub</Text>
            </View>
        </View >
    );
};

export default Homesearch;
