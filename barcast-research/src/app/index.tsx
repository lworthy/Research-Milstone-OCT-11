import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BarCast 🍻</Text>
        <Text style={styles.subtitle}>Find the vibe before you arrive.</Text>
      </View>

      <Text style={styles.sectionTitle}>Tonight in Five Points</Text>

      <View style={styles.card}>
        <Text style={styles.barName}>Rooftop</Text>
        <Text style={styles.info}>Crowd: 🟢 Low</Text>
        <Text style={styles.info}>Music: Hip-Hop</Text>
        <Text style={styles.info}>Cover: $5</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.barName}>Social</Text>
        <Text style={styles.info}>Crowd: 🔴 Packed</Text>
        <Text style={styles.info}>Music: R&B</Text>
        <Text style={styles.info}>Cover: $10</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.barName}>Breakers</Text>
        <Text style={styles.info}>Crowd: 🟡 Moderate</Text>
        <Text style={styles.info}>Music: EDM</Text>
        <Text style={styles.info}>Cover: Free</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    padding: 20,
  },

  header: {
    marginTop: 60,
    marginBottom: 30,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },

  subtitle: {
    fontSize: 17,
    color: '#bbbbbb',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#222222',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  barName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },

  info: {
    fontSize: 16,
    color: '#dddddd',
    marginBottom: 5,
  },
});