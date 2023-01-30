import {
    View,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
} from "react-native";

export default function CreateTodo(props) {
    const { todoContent, setTodoContent, handleAddTodo } = props;
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.craeteTodoBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Write here..."
                    value={todoContent}
                    onChangeText={(text) => setTodoContent(text)}
                />
                <TouchableOpacity onPress={handleAddTodo}>
                    <View style={styles.btn}>
                        <Text style={styles.addBtn}>Add</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    craeteTodoBox: {
        position: "absolute",
        bottom: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
    },
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#9b59b6",
        borderRadius: 20,
        borderColor: "#9b59b6",
        borderWidth: 1,
    },
    addBtn: {
        color: "#fff",
    },
});