import { useState } from 'react';
import { Button, View } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('#f0f0f0');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  }

  return (
    <View style={{ flex:1, backgroundColor:bgColor, justifyContent:'center', alignItems:'center' }}>
      <Button title="Đổi màu" onPress={changeColor} />
    </View>
  );
}
