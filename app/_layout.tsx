import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-foreground">
        <StatusBar style="light" />
        <Header />
        <View className="flex-1 w-full h-full px-4">
          <Slot />
        </View>
        <Footer />
      </View>
    </SafeAreaProvider>
  );
}
