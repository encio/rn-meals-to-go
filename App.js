/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Search />
      <Body />
    </SafeAreaView>
  );
}

const Search = () => {
  const [search, searchQuery] = useState('');
  const onChangeSearch = query => searchQuery(query);
  console.log(search);
  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.body}>
      <Text>body</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: 'black',
  },
  body: {
    justifyContent: 'center',
    backgroundColor: 'yellow',
    flex: 1,
  },
  search: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 16,
    marginBottom: 5,
  },
});
