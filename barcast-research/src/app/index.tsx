import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type CrowdLevel = 'Low' | 'Moderate' | 'Packed';

type Bar = {
  name: string;
  crowd: CrowdLevel;
  music: string;
  cover: string;
};

const bars: Bar[] = [
  {
    name: 'Rooftop',
    crowd: 'Low',
    music: 'Hip-Hop',
    cover: '$5',
  },
  {
    name: 'Social',
    crowd: 'Packed',
    music: 'R&B',
    cover: '$10',
  },
  {
    name: 'Breakers',
    crowd: 'Moderate',
    music: 'EDM',
    cover: 'Free',
  },
];

const getCrowdEmoji = (crowd: CrowdLevel) => {
  if (crowd === 'Low') return '🟢';
  if (crowd === 'Moderate') return '🟡';
  return '🔴';
};

export default function HomeScreen() {
  const [filter, setFilter] = useState<'All' | CrowdLevel>('All');

  const filteredBars =
    filter === 'All'
      ? bars
      : bars.filter((bar) => bar.crowd === filter);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BarCast 🍻</Text>
        <Text style={styles.subtitle}>
          Find the vibe before you arrive.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Tonight in Five Points</Text>

      <Text style={styles.label}>Filter by crowd</Text>

      <View style={styles.buttonRow}>
        {(['All', 'Low', 'Moderate', 'Packed'] as const).map(
          (option) => (
            <Pressable
              key={option}
              style={[
                styles.filterButton,
                filter === option && styles.selectedButton,
              ]}
              onPress={() => setFilter(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </Pressable>
          )
        )}
      </View>

      {filteredBars.map((bar) => (
        <View style={styles.card} key={bar.name}>
          <Text style={styles.barName}>{bar.name}</Text>

          <Text style={styles.info}>
            Crowd: {getCrowdEmoji(bar.crowd)} {bar.crowd}
          </Text>

          <Text style={styles.info}>Music: {bar.music}</Text>
          <Text style={styles.info}>Cover: {bar.cover}</Text>
        </View>
      ))}
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

  label: {
    fontSize: 16,
    color: '#bbbbbb',
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },

  filterButton: {
    backgroundColor: '#292929',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  selectedButton: {
    backgroundColor: '#3478f6',
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
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