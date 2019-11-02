import React from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
    return (
      <Modal visible={props.visible}>
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="goal" 
          style={styles.input}
          onChangeText={props.handleChange}
          value={props.enteredGoal}
        />
        <Button 
            title="add" 
            onPress={props.goalHandler}
            style={styles.jjjj}
        />
      </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginBottom: 10
      },
    jjjj: {
        borderColor: "black",
        borderWidth: 1
    }
})

export default GoalInput;