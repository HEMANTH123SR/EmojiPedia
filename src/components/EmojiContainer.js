import React from "react";
import { View,Text,StyleSheet } from "react-native";

const EmojiContainer=(props)=>{
    const {character,unicodeName}=props;
    return(
        <View style={styles.emojiContainer}>
        <Text style={styles.emojiText}>{character}</Text>
        <Text style={styles.unicodeNameText}>{unicodeName}</Text>
      </View>
    )
};

const styles=StyleSheet.create({
    emojiContainer: {
        marginTop: 20,
        height: 60,
        backgroundColor: "#EEEDED",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        borderRadius:20,
      },
      emojiText: {
        fontSize: 24
      },
      unicodeNameText: {
        color: "#525FE1",
        fontSize: 18,
        fontWeight: "500",
     
      }
})

export default EmojiContainer;