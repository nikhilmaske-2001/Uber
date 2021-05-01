import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
        padding: 10,
        margin: 10,
    },
    inputText: {
        fontWeight: '600',
        fontSize: 20,
        color: '#434343',
        top: 5,
    },
    timeContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 100,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    }
});

export default styles;