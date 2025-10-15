import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IconBarGraph,
  IconBook,
  IconDartBoard,
  IconMap,
  IconShapes,
} from "./Icons";

function Footer() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="w-full bg-background"
      style={{ paddingBottom: insets.bottom, height: insets.bottom + 80 }}
    >
      <View className="flex-row justify-center items-center h-20 w-full gap-4">
        <Link href="/" asChild>
          <Pressable className="w-14 h-14 rounded-md justify-center items-center">
            <IconMap />
          </Pressable>
        </Link>
        <Link href="/scan" asChild>
          <Pressable className="w-14 h-14 rounded-md justify-center items-center">
            <IconShapes />
          </Pressable>
        </Link>
        <Link href="/challenges" asChild>
          <Pressable className="w-14 h-14 rounded-md justify-center items-center">
            <IconDartBoard />
          </Pressable>
        </Link>
        <Link href="/lessons" asChild>
          <Pressable className="w-14 h-14 rounded-md justify-center items-center">
            <IconBook />
          </Pressable>
        </Link>
        <Link href="/ranking" asChild>
          <Pressable className="w-14 h-14 rounded-md justify-center items-center">
            <IconBarGraph />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

export default Footer;
