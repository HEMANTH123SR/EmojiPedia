import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ScrollViewContainer from "../components/ScrollViewContainer";

const Search = () => {
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const handleSearchInput = (input) => {
    if(input==""||input==" "){
      setSearchInput(null);
      return;
    }
    setSearchInput(input);
  };
  useEffect(() => {
    if(searchInput){
    (async () => {
      try {
        const response = await fetch(
          `https://emoji-api.com/emojis?search=${searchInput}&access_key=d2ff00f9a119a333592d8e54a0fafeace7f060d8`
        );
        const data = await response.json();
        setSearchData(data);
      } catch (error) {
        setError("Api Request Failed 😔");
      }
    })();
  }
  }, [searchInput]);

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);
  
  return (
    <View style={styles.container}>
      <View style={styles.navConatiner}>
        <Text style={styles.title}>Emojipedia 📔</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.searchEmoji}>🔍</Text>
          <TextInput
            editable
            placeholder="Search Emojipedia"
            style={styles.searchInput}
            onChangeText={handleSearchInput}
          />
        </View>
      </View>
      {error != null ? (
        <View style={styles.errorConatiner}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
       <ScrollViewContainer data={searchData}/>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navConatiner: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "#8CABFF",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    paddingRight: 20,
    marginTop: 20,
    width: 300,
  },
  searchEmoji: {
    fontSize: 20,
    margin: 10,
  },
  searchInput: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "500",
  },
  errorText: {},
  errorConatiner: {},
});

export default Search;
