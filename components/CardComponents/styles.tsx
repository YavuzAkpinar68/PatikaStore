import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({

  container:{
    backgroundColor:"gainsboro",
    margin: 10,
    width: Dimensions.get("window").width /2.5,
    borderRadius: 15,
    flex: 1
  },
  view_image_container:{
    backgroundColor:"gainsboro",
    padding: 10,
    borderRadius: 15
  },
  image:{
    height: Dimensions.get("window").height / 4,
    borderRadius: 15
  },
  view_text_container:{
    backgroundColor:"gainsboro",
    borderRadius: 15,
    justifyContent:"flex-end",
    flex: 1
  },
  text_title:{
    fontSize: 20,
    paddingLeft: 10,
    flex: 2
  },
  text_fiyat:{
    fontSize: 13,
    paddingLeft: 10,
    color:"gray",
    flex: 1
  },
  text_patika_container:{
    fontSize:35,
    paddingHorizontal: 20,
    color:"purple",
  },
  textInput_container:{
    height: 40,
    borderWidth: 1,
    width: Dimensions.get("window").width / 1.05,
    paddingHorizontal: 10,
    margin:10,
    backgroundColor: "gray",
    borderRadius: 15
  },
  textInput_view_container:{},
  text_inStock_container:{
    color:"red",
    fontSize: 20,
    paddingLeft: 10,
    flex: 1
  }
})




export default styles