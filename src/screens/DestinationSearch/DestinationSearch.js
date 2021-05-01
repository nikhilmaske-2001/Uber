import React from 'react';
import { Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from '../../styles/DestinationSearch';


const DestinationSearch = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput placeholder="From" style={styles.textInput}></TextInput>
                <TextInput placeholder="Where to?" style={styles.textInput}></TextInput>
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;