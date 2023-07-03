import { View, Text, FlatList, Image, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import Search from "../components/Search";



const Connectionlist = () => {
  const [users, setusers] = useState([]);
  const [input,setinput]=useState("");

  // console.log(input);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setusers(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <View style={styles.search}>
          <Feather
          name="search"
          size={20}
          color="black"
          style={{marginLeft:1,marginRight:4}}
          />
          <TextInput value={input} onChangeText={(text)=>setinput(text)} style={{fontSize:15}} placeholder="Search"/>
        </View>
      </View>
     <Search users={users} input={input} setinput={setinput}/>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flex: 1,
    marginVertical:1,
    marginHorizontal:3,
    flexDirection: "row",
    paddingVertical:5,
    paddingHorizontal:4,
    backgroundColor: "#fff",
  },
  search:{
    padding:10,
    flexDirection:"row",
    width:"95%",
    backgroundColor:"#d9dbda",
    borderRadius:10,
    alignContent:"center"

  },
  searchbox:{
    margin:15,
    width:"90%"
  },
  // userimage:{
  //    width: 80,
  //    height: 80, 
  //    borderRadius: 40 ,
  // },
  // textcontent:{
  //   marginLeft:5
  // },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor:"#787878"
  },
  // name: {
  //   fontSize: 20,
  //   fontWeight: "500",
   
  // },
});

export default Connectionlist;
