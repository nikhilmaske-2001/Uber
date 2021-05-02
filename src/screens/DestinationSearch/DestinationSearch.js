import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from '../../styles/DestinationSearch';



const DestinationSearch = (props) => {
    // TO store the text from "From" placeholder
    const [fromText, setFromText] = useState({ initialState: '' });

    // TO store the text from "Where to ?" placeholder
    const [DestinationText, setDestinationText] = useState({ initialState: '' });

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    value={fromText}
                    onChangeText={setFromText}
                    placeholder="From"
                    style={styles.textInput}>
                </TextInput>
                <TextInput
                    value={DestinationText}
                    onChangeText={setDestinationText}
                    placeholder="Where to?"
                    style={styles.textInput}>
                </TextInput>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBwH4N9GZbaQRJZKXmXuEr1oUsLVq72kHM',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;