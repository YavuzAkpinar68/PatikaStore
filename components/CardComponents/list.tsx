import React from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import patikastore from "./patikastore.json"
import Card from "./Card";
import styles from "./styles";
import Ara from "./Ara";

const List = () => {
  return(
    
    <FlatList
      horizontal={false}
      numColumns={2}
      data={patikastore}
      renderItem={({item}) => <Card
        title={item.title}
        fiyat={item.price}
        image={item.imgURL}
        instock={item.inStock}
         />}
      />
  )
}
export default List