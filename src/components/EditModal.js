import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import PrimaryButton from './PrimaryButton';
import {responseActions} from '../store';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {statusCodes} from './StatusCodes';
import TextView from './TextView';
import {generateText} from '../models/Palm';

export default function EditModal({visible, onCancel, id, user, bot, model}) {
  const dispatch = useDispatch();
  const [text, setText] = useState(user);
  const [response, setResponse] = useState(bot);
  async function onSendHandler() {
    if (!text.trim().length) return;
    let response = await generateText(text);
    setResponse(response);
    const res = {
      id: id,
      You: text,
      Bing: response,
      Model: model,
    };
    dispatch(responseActions.editResponse(res));
  }
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.editModalContainer}>
          <TextInput
            placeholder="What's on your mind"
            onChangeText={text => setText(text)}
            style={styles.textInput}
            value={text}
          />
          <TextView>Response: {response}</TextView>
          <Text>by {model}</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressablePress={onSendHandler}>Send</PrimaryButton>
            <PrimaryButton onPressablePress={onCancel}>Cancel</PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  editModalContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '80%',
    padding: 8,
  },
});
