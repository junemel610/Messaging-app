import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/status';
import MessageList from './components/MessageList';
import { createTextMessage, createImageMessage, createLocationMessage } from './utils/MessageUtils';

export default function App() {
  return (
    <View style={styles.container}>
      <Status />
      <View style={styles.container}>
        <Text>MESSAGING APP - MELJUNE ROYETTE G. GO</Text>
        </View>
    </View>
  );
}

state = {
  messages: [
    createImageMessage('https://unsplash.it/300/300'),
    createTextMessage('World'),
    createTextMessage('Hello'),
    createLocationMessage({
      latitude: 37.78825,
      longitude: -122.4324,
    }),
  ],
};

handlePressMessage = () => {}

renderMessageList() {
  const {messages} = this.state;
  return (
    <View style={styles.content}>
      <MessageList messages={messages}
      onPressMessage={this.handlePressMessage} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#fff'
  }
});
