import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/CovidMessages';

const Covidmessages = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Travel only if necessary</Text>
            <Text style={styles.midText}>Help flatten the curve, if you must travel, please exercise caution for your safety and our community.</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
};

export default Covidmessages;