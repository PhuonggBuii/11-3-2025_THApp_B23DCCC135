import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pravatar.cc/150?img=3' }} style={styles.avatar} />
        <Text style={styles.name}>PhuongBui</Text>
        <Text>Developer</Text>
        <Text>fbui@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  card: { width:250, padding:20, borderRadius:10, backgroundColor:'#fff', alignItems:'center', shadowColor:'#000', shadowOpacity:0.2, shadowRadius:5, elevation:5 },
  avatar: { width:100, height:100, borderRadius:50, marginBottom:10 },
  name: { fontSize:18, fontWeight:'bold' }
});