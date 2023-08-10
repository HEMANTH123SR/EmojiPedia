// import React from "react";
// import { StyleSheet,  ScrollView, View } from "react-native";
// import EmojiContainer from "./EmojiContainer";

// const ScrollViewContainer = (props) => {
//     const {data}=props;
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//      {
// data.map(({unicodeName,character})=>{
//     <EmojiContainer unicodeName={unicodeName} 
//     character={character}
//     />
// })
//      }
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     marginHorizontal: 30,
//   },
// });

// export default ScrollViewContainer;

import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import EmojiContainer from "./EmojiContainer";

const ScrollViewContainer = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data.map(({ unicodeName, character }) => (
          <EmojiContainer
            key={unicodeName} // Don't forget to add a unique key for each item in a list
            unicodeName={unicodeName}
            character={character}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 30,
  },
});

export default ScrollViewContainer;
