import React, { useState } from "react";
import { View, Text, Button, Alert, TextInput, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function GuessNum() {
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [randomizedNum, setRandomizedNum] = useState(randomizeNum());

  function randomizeNum() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guessedNum = parseInt(guess);

    if (isNaN(guessedNum)) {
      setAnswer("Input a valid number!");
    } else {
      setAttempts(attempts + 1);

      if (guessedNum < randomizedNum) {
        setAnswer(`Your guess ${guessedNum} is too low!`);
      } else if (guessedNum > randomizedNum) {
        setAnswer(`Your guess ${guessedNum} is too high!`);
      } else {
        setAnswer(
          `Congratulations! You guessed the correct number ${randomizedNum} in ${attempts} guesses.`
        );
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100!</Text>
      <View style={{ marginTop: 20 }} />
      <TextInput value={guess} onChangeText={setGuess} keyboardType="numeric" />
      <View style={{ marginTop: 20 }} />
      <Button title="Make a guess" onPress={handleGuess} />
      <View style={{ marginTop: 20 }} />
      <Text>{answer}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
