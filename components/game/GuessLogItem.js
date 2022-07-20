import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const GuessLogItem = ({ roundsNumber, opponentGuess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.roundsNumber}>№ {roundsNumber}</Text>
      <Text style={styles.opponentGuess}>Opponent`s Guess: {opponentGuess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.extraDarkPlum,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0,  height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  roundsNumber: {
    fontFamily: 'EduNSWACTFoundation'
  },
  opponentGuess: {
    fontFamily: 'EduNSWACTFoundation'
  }
});