import { Link, usePathname } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

function Signup() {
  const pathname = usePathname();

  return (
    <View className="bg-background m-4 rounded-xl flex-1">
      <View className="flex-row w-full">
        <Link href="/signin" asChild>
          <Pressable
            className="flex-1 p-3"
            style={{
              borderWidth: pathname === "/signin" ? 2 : 0,
              borderColor: "#22c55e",
              borderRadius: 12,
            }}
          >
            <Text className="text-text text-xl font-bold w-full text-center">
              Ingresar
            </Text>
          </Pressable>
        </Link>
        <Link href="/signup" asChild>
          <Pressable
            className="flex-1 p-3"
            style={{
              borderWidth: pathname === "/signup" ? 2 : 0,
              borderColor: "#22c55e",
              borderRadius: 12,
            }}
          >
            <Text className="text-text text-xl font-bold w-full text-center">
              Regístrate
            </Text>
          </Pressable>
        </Link>
      </View>
      <View className="p-4">
        <Text className="text-text text-sm font-bold w-full">
          Nombre de usuario
        </Text>
        <TextInput className="text-text"></TextInput>
        <Text className="text-text text-sm font-bold w-full">Contraseña</Text>
        <TextInput className="text-text"></TextInput>
        <Text className="text-text text-sm font-bold w-full">
          Confirmar contraseña
        </Text>
        <TextInput className="text-text"></TextInput>
        <Pressable className="w-full h-12 rounded-xl bg-green-500 text-text text-center justify-center items-center ">
          <Text className="text-background font-bold">Crear cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Signup;
