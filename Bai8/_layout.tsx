import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Trang chủ" }} />
      <Stack.Screen name="profile2" options={{ title: "Hồ sơ cá nhân" }} />
    </Stack>
  );
}