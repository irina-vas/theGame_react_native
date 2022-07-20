import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, ImageBackground, View, SafeAreaView, StatusBar } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './constants/colors';
import { GameOverScreen } from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';

//trying
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    'EduNSWACTFoundation': require('./assets/fonts/EduNSWACTFoundation-Regular.ttf'),
    'EduNSWACTFoundation-bold': require('./assets/fonts/EduNSWACTFoundation-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  const gameOverHandler = () => {
    setGameIsOver(true);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen =
    <StartGameScreen
      onPickNumber={pickedNumberHandler}
    />;
  
  if (userNumber) {
    screen =
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roudsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.darkPlum, Colors.yellow]}
    >
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  },
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
