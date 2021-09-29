import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import List from './components/CardComponents/list';
import patikastore from "./Components/CardComponents/patikastore.json"
import styles from './components/CardComponents/styles';
import Ara from './components/CardComponents/Ara';

export default function App() {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.textInput_view_container}>
        <Text style={styles.text_patika_container}>Patikastore</Text>
        {<Ara></Ara>}
      </SafeAreaView>
      <List></List>
      
    </SafeAreaView>
  );
}


