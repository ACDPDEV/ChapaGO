import { Link, usePathname } from "expo-router";
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
  const pathname = usePathname();

  const inIndex = pathname === "/";
  const inScan = pathname === "/scan";
  const inChallenges = pathname === "/challenges";
  const inLessons = pathname === "/lessons";
  const inRanking = pathname === "/ranking";

  return (
    <View
      className="w-full bg-background"
      style={{ paddingBottom: insets.bottom, height: insets.bottom + 80 }}
    >
      <View className="flex-row justify-center items-center h-20 w-full gap-4">
        <Link href="/signup" asChild>
          <Pressable
            className="w-14 h-14 rounded-md justify-center items-center"
            style={{
              backgroundColor: inIndex ? "#1F2223" : "transparent",
            }}
          >
            <IconMap size={inIndex ? 32 : 24} />
          </Pressable>
        </Link>
        <Link href="/scan" asChild>
          <Pressable
            className="w-14 h-14 rounded-md justify-center items-center"
            style={{ backgroundColor: inScan ? "#1F2223" : "transparent" }}
          >
            <IconShapes size={inScan ? 32 : 24} />
          </Pressable>
        </Link>
        <Link href="/challenges" asChild>
          <Pressable
            className="w-14 h-14 rounded-md justify-center items-center"
            style={{
              backgroundColor: inChallenges ? "#1F2223" : "transparent",
            }}
          >
            <IconDartBoard size={inChallenges ? 32 : 24} />
          </Pressable>
        </Link>
        <Link href="/lessons" asChild>
          <Pressable
            className="w-14 h-14 rounded-md justify-center items-center"
            style={{ backgroundColor: inLessons ? "#1F2223" : "transparent" }}
          >
            <IconBook size={inLessons ? 32 : 24} />
          </Pressable>
        </Link>
        <Link href="/ranking" asChild>
          <Pressable
            className="w-14 h-14 rounded-md justify-center items-center"
            style={{ backgroundColor: inRanking ? "#1F2223" : "transparent" }}
          >
            <IconBarGraph size={inRanking ? 32 : 24} />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

export default Footer;
