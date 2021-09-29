import React from "react";
import {FlatList, Text, View, Image} from "react-native"
import patikastore from "./patikastore.json"
import styles from "./styles";



type CardProps = {
  title:string
  fiyat:string
  image?:string
  instock:boolean
}

const Card = (props:CardProps) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.view_image_container}>
        <Image source={{uri:props.image}} style={styles.image}></Image>
      </View>
      <View style={styles.view_text_container}>
        <Text style={styles.text_title}>{props.title}</Text>
        <Text style={styles.text_fiyat}>Fiyat: {props.fiyat}</Text>
        <Text style={styles.text_inStock_container}>{props.instock === true ? null : "Stokta yok"}</Text> 
      </View>
    </View>  
  )
}
export default Card