import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} onPress>
                <Text >{props.item.goal}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "pink",
        borderWidth: 1,
        borderColor: "gray",
        margin: 10,
        width: 200
      }
})

export default GoalItem;