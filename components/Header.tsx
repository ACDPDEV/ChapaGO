import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="w-full bg-background justify-center items-center"
      style={{ paddingTop: insets.top, height: insets.top + 48 }}
    >
      <Text className="text-text text-2xl font-bold">ChapaGO</Text>
    </View>
  );
}

export default Header;
