import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {

    const [complete, setComplete] = useState();

    const toggleComplete = () => {
        
    }

    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.text}</Text>
            <View style={styles.circular}></View>           
            {/* <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View> */}
                    
        </View>
    )
}

const styles = StyleSheet.create ({
    item: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 14,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    // itemLeft: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     flexWrap: 'wrap',
    // },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#CBC3E3',
        borderRadius: 4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 28,
        height: 28,
        borderColor: '#CBC3E3',
        borderWidth: 2,
        borderRadius: 28,
    },
});

export default Task;