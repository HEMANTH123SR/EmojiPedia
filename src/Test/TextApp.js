import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TestApp = () => {
  const [text, setText] = useState('');

  const handleTextSubmit = () => {
    // This function is called when the "Submit" button is pressed
    console.log('Text submitted:', text);
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Done') {
      // This function is called when the "Enter" key is pressed
      console.log('User pressed the Enter key.');
      handleTextSubmit();
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        onKeyPress={handleKeyPress} // This is where you handle the "Enter" key press
      />
      <Button title="Submit" onPress={handleTextSubmit} />
    </View>
  );
};

export default TestApp;
