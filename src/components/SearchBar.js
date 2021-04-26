import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput placeholder="search" style={styles.inputStyle} />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e7e7e7',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar