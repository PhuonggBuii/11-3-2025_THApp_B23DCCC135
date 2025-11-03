import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function DanhSachSinhVien() {
  const [sinhVienList, setSinhVienList] = useState([
    { id: "1", hoTen: "Nguyen Van A", lop: "D20CQCN01", email: "a@gmail.com" },
    { id: "2", hoTen: "Tran Thi B", lop: "D20CQCN02", email: "b@gmail.com" },
  ]);
  const [hoTen, setHoTen] = useState("");
  const [lop, setLop] = useState("");
  const [email, setEmail] = useState("");

  const themSinhVien = () => {
    if (!hoTen || !lop || !email) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const newStudent = {
      id: Math.random().toString(),
      hoTen,
      lop,
      email,
    };
    setSinhVienList([...sinhVienList, newStudent]);
    setHoTen("");
    setLop("");
    setEmail("");
  };

  const xemChiTiet = (item: any) => {
    router.push({
      pathname: "/Bai10/chitietsv",
      params: item,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Danh sách sinh viên</Text>

      <FlatList
        data={sinhVienList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => xemChiTiet(item)}>
            <Text style={styles.name}>{item.hoTen}</Text>
            <Text style={styles.class}>{item.lop}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.form}>
        <Text style={styles.formTitle}>➕ Thêm sinh viên</Text>
        <TextInput placeholder="Họ tên" style={styles.input} value={hoTen} onChangeText={setHoTen} />
        <TextInput placeholder="Lớp" style={styles.input} value={lop} onChangeText={setLop} />
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TouchableOpacity style={styles.button} onPress={themSinhVien}>
          <Text style={styles.buttonText}>Thêm sinh viên</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 12 },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: "bold", color: "#333" },
  class: { fontSize: 15, color: "#666" },
  form: { marginTop: 20, backgroundColor: "#fff", padding: 16, borderRadius: 10, elevation: 3 },
  formTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});