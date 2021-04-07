import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from "@expo/vector-icons";
function ActivityIndicatorLoadingView() {
    return (
        <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.ActivityIndicatorStyle}
        />
    );
}
export default function Card(props) {
    const [modal, setmodal] = useState(false);

    return (<>
        <TouchableOpacity onPress={() => { setmodal(true) }} >
            <View style={styles.card}>
                <Image style={styles.tinyLogo} source={{ uri: `${props.imgsrc}` }} />
                <View style={styles.cardcontent}>
                    {props.children}
                </View>

            </View>
            <Modal visible={modal} animationType="slide">

                <View>

                    <MaterialIcons
                        style={styles.modalCancelButton}
                        name="cancel"
                        size={35}
                        color="gray"
                        onPress={() => setmodal(false)}
                    />

                    <View style={styles.modalContainer}>
                        <WebView source={{ uri: `${props.weburl}` }} style={{ flex: 1 }} renderLoading={ActivityIndicatorLoadingView} />
                    </View>


                </View>


            </Modal>

        </TouchableOpacity>

    </>)
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 5,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row'
    },
    cardcontent: {
        marginVertical: 18,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    tinyLogo: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginLeft: 5
    },
    modalCancelButton: {
        alignSelf: "flex-end",
        marginRight: 15,
    },
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
    },

    modalContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',

    },

});
