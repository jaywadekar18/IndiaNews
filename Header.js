import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header() {
    return (<>

        <View style={styles.space}>
            <Text style={styles.text}>India News</Text>
        </View>

    </>)
}
const styles = StyleSheet.create({
    text: {
        fontSize:40,
        alignSelf:'center',
        paddingTop:45,
        fontFamily:'lobster',
        color:'#694fad'
    },
    space:{
        height:100,
        backgroundColor:'white'
    }
   
});
