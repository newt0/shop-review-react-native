import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

type Props = {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
  height?: number;
  placeholder?: string;
};

const TextArea: React.FC<Props> = ({
  onChangeText,
  value,
  label,
  height,
  placeholder,
}: Props) => {
  return (
    <View style={[styles.container, !!height && { height }]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        multiline={true}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontWeight: "bold", color: "#999" },
  input: {
    height: 120,
    borderColor: "#999",
    borderBottomWidth: 1,
    marginTop: 8,
  },
});

export default TextArea;
