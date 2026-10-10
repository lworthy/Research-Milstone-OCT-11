//Landen Worthy
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

const initialBars: Bar[] = [
  {
    name: 'Rooftop',
    crowd: 'Low',
    music: 'EDM',
    cover: '$5',
  },
  {
    name: 'Social',
    crowd: 'Packed',
    music: 'Rap',
    cover: '$10',
  },
  {
    name: 'Breakers',
    crowd: 'Moderate',
    music: 'House',
    cover: 'Free',
  },
];

const getCrowdEmoji = (crowd: CrowdLevel) => {
  if (crowd === 'Low') return '🟢';
  if (crowd === 'Moderate') return '🟡';
  return '🔴';
};

export default function HomeScreen() {
  const [bars, setBars] = useState<Bar[]>(initialBars);
  const [filter, setFilter] = useState<'All' | CrowdLevel>('All');
  const [selectedBar, setSelectedBar] = useState('Rooftop');
  const [selectedCrowd, setSelectedCrowd] =
    useState<CrowdLevel>('Low');

  const filteredBars =
    filter === 'All'
      ? bars
      : bars.filter((bar) => bar.crowd === filter);

  const updateCrowd = () => {
    setBars((currentBars) =>
      currentBars.map((bar) =>
        bar.name === selectedBar
          ? { ...bar, crowd: selectedCrowd }
          : bar
      )
    );
  };

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

          <Text style={styles.info}>
            Music: {bar.music}
          </Text>

          <Text style={styles.info}>
            Cover: {bar.cover}
          </Text>
        </View>
      ))}

      <View style={styles.reportSection}>
        <Text style={styles.sectionTitle}>Report the Vibe</Text>

        <Text style={styles.label}>Choose a bar</Text>

        <View style={styles.buttonRow}>
          {bars.map((bar) => (
            <Pressable
              key={bar.name}
              style={[
                styles.choiceButton,
                selectedBar === bar.name && styles.selectedButton,
              ]}
              onPress={() => setSelectedBar(bar.name)}
            >
              <Text style={styles.buttonText}>{bar.name}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Crowd level</Text>

        <View style={styles.buttonRow}>
          {(['Low', 'Moderate', 'Packed'] as CrowdLevel[]).map(
            (level) => (
              <Pressable
                key={level}
                style={[
                  styles.choiceButton,
                  selectedCrowd === level &&
                    styles.selectedButton,
                ]}
                onPress={() => setSelectedCrowd(level)}
              >
                <Text style={styles.buttonText}>
                  {getCrowdEmoji(level)} {level}
                </Text>
              </Pressable>
            )
          )}
        </View>

        <Pressable
          style={styles.submitButton}
          onPress={updateCrowd}
        >
          <Text style={styles.submitText}>
            Submit Crowd Report
          </Text>
        </Pressable>
      </View>

      <View style={styles.bottomSpace} />
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

  choiceButton: {
    backgroundColor: '#292929',
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 12,
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

  reportSection: {
    marginTop: 25,
    paddingTop: 10,
  },

  submitButton: {
    backgroundColor: '#3478f6',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  submitText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  bottomSpace: {
    height: 100,
  },
});