/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.text}> Hello world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
