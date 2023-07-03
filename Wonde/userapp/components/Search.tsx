import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

type usertype = {
  index: number;
  picture: string;
  age: number;
  firstname: string;
  surname: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
};

const Search = ({ users, input, setinput }) => {
  
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => {
          // if (input === "") {
            return (
              <View>
                <View style={styles.items}>
                  {/* <Image
                    source={{ uri: item.picture }}
                    style={styles.userimage}
                  /> */}
                  <View style={styles.textcontent}>
                    <Text style={styles.name}>
                      {item.firstname} {item.surname}
                    </Text>
                    {/* <Text>Hey there! I am using this app</Text> */}
                  </View>
                </View>
              </View>
            );
          // }

          // if (item.firstname.toLowerCase().includes(input.toLowerCase())) {
          //   return (
          //     <View>
          //       <View style={styles.items}>
          //         {/* <Image
          //           source={{ uri: item.picture }}
          //           style={styles.userimage}
          //         /> */}
          //         <View style={styles.textcontent}>
          //           <Text style={styles.name}>
          //             {item.firstname} {item.surname}
          //           </Text>
          //           {/* <Text>Hey there! I am using this app</Text> */}
          //         </View>
          //       </View>
          //     </View>
          //   );
          // }

        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flex: 1,
    marginVertical: 1,
    marginHorizontal: 3,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
  },
  search: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignContent: "center",
  },
  searchbox: {
    margin: 15,
    width: "90%",
  },
  userimage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textcontent: {
    marginLeft: 5,
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#787878",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default Search;

