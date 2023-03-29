import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {

  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 100);

    return () => clearInterval(intervalId);
  }, [isShowingText]);

  const colors = ['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'];
  const colorIndex1 = Math.floor(Math.random() * colors.length);
  const colorIndex2 = Math.floor(Math.random() * colors.length);
  const colorIndex3 = Math.floor(Math.random() * colors.length);
  const colorIndex4 = Math.floor(Math.random() * colors.length);
  const colorIndex5 = Math.floor(Math.random() * colors.length);
  const colorIndex6 = Math.floor(Math.random() * colors.length);
  const colorIndex7 = Math.floor(Math.random() * colors.length);
  const colorIndex8 = Math.floor(Math.random() * colors.length);
  const colorIndex9 = Math.floor(Math.random() * colors.length);
  const colorIndex0 = Math.floor(Math.random() * colors.length);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>💖🐈 </Text>
      <Text style={{ fontSize: 25, color: colors[colorIndex1] }}>H</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex2] }}>e</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex3] }}>l</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex4] }}>l</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex5] }}>o</Text>
      <Text style={{ fontSize: 25, color: colors[colorIndex6] }}> W</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex7] }}>o</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex8] }}>r</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex9] }}>l</Text>
      <Text style={{ fontSize: 22, color: colors[colorIndex0] }}>d</Text>
      <Text style={{ fontSize: 25, transform: [{ scaleX: -1 }] }}>💖🐈 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
