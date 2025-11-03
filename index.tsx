import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [dtb, setDTB] = useState(null);

  const tinhDTB = () => {
    if (toan.trim() === '' || ly.trim() === '' || hoa.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập đủ 3 môn!');
      return;
    }

    const t = parseFloat(toan);
    const l = parseFloat(ly);
    const h = parseFloat(hoa);

    if (isNaN(t) || isNaN(l) || isNaN(h)) {
      Alert.alert('Lỗi', 'Vui lòng chỉ nhập số hợp lệ!');
      return;
    }


    const avg = (t + l + h) / 3;
    setDTB(avg.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập điểm 3 môn:</Text>
      <TextInput
        placeholder="Toán"
        keyboardType="numeric"
        value={toan}
        onChangeText={setToan}
        style={styles.input}
      />
      <TextInput
        placeholder="Lý"
        keyboardType="numeric"
        value={ly}
        onChangeText={setLy}
        style={styles.input}
      />
      <TextInput
        placeholder="Hóa"
        keyboardType="numeric"
        value={hoa}
        onChangeText={setHoa}
        style={styles.input}
      />
      <Button title="Tính điểm trung bình" onPress={tinhDTB} />
      {dtb !== null && <Text style={styles.result}>Kết quả trung bình: {dtb}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center' },
  title: { fontSize:18, marginBottom:10 },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:5, marginBottom:10, padding:10 },
  result: { marginTop:20, fontSize:18, fontWeight:'bold' }
});
