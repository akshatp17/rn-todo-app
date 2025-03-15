import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl text-center">
        Welcome! This is the home page fot todo app
      </Text>
    </View>
  );
}
