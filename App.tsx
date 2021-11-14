import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import List from './components/CardComponents/list';
import patikastore from "./components/CardComponents/patikastore.json"
import styles from './components/CardComponents/styles';
import Ara from './components/CardComponents/Ara';
import Card from './components/CardComponents/Card';

export default function App() {
  const [keyword, setKeyword] = useState('')
  let source = patikastore.filter(e => e.title.includes(keyword)) ?? "";
  return (
    <View style={styles1.view_container}>
      <View style={styles.textInput_view_container}>
        <Text style={styles.text_patika_container}>Patikastore</Text>
        <Ara placeholder="ara beni yala benis" value={keyword} onChangeText={(e: any) => setKeyword(e)} />
      </View>
      <FlatList
      horizontal={false}
      numColumns={2}
      data={source}
      renderItem={({item}) => <Card
        title={item.title}
        fiyat={item.price}
        image={item.imgURL}
        instock={item.inStock}
         />}
      />
      
    </View>
  );
}

const styles1 = StyleSheet.create({
  text_container:{
    
    
  },
  view_container:{
    flex: 1
  }
})
