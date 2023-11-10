import {View, TextInput, ScrollView, Alert} from 'react-native';
import PrimaryButton from './PrimaryButton';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {responseActions} from '../store';
import {generateText} from '../models/Palm';
import RNPickerSelect from 'react-native-picker-select';

export default function QueryInput() {
  const dispatch = useDispatch();
  const [model, setModel] = useState('PaLM');
  const [text, setText] = useState('');

  async function getResponse(model) {
    let id = Math.random().toString();
    let response = `No response from ${model}`;
    setText('');
    switch (model) {
      case 'PaLM':
        // console.log('responses from PaLM');
        response = await generateText(text);
        dispatch(responseActions.getUserData(false));
        // console.log(response);
        break;
      case 'ChatGPT':
        // console.log('responses from ChatGPT');
        dispatch(responseActions.getUserData(false));
        break;
      case 'Google Bard':
        // console.log('responses from Google Bard');
        dispatch(responseActions.getUserData(false));
        break;
      case 'Azure QnA':
        // console.log('responses from Azure QnA');
        dispatch(responseActions.getUserData(false));
        break;
      case 'GPT 3.5':
        // console.log('responses from GPT 3.5');
        dispatch(responseActions.getUserData(false));
        break;
      case 'Add API':
        // console.log('responses from Add API');
        return Alert.alert('', 'Add API not supported', ['OK']);
        break;
    }
    res = {
      id,
      You: text,
      Bot: response,
      Model: model,
      // Bing: [1, 2, 3].includes(response.response.status.toString()[0])
      //   ? response.message
      //   : statusCodes[response.response.status.toString()[0]].join(" >>"),
    };
    dispatch(responseActions.addResponse(res));
  }
  return (
    <View style={styles.inputOuterContainer}>
      <ScrollView bounces={false} keyboardShouldPersistTaps="handled">
        <View style={styles.inputInnerContainer}>
          <View
            style={{
              backgroundColor: '#efddff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
              width: '10%',
            }}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{label: 'PaLM', value: 'PaLM'}}
              onValueChange={value => setModel(value)}
              items={[
                {label: 'ChatGPT', value: 'ChatGPT'},
                {label: 'Google Bard', value: 'Google Bard'},
                {label: 'Azure QnA', value: 'Azure QnA'},
                {label: 'GPT 3.5', value: 'GPT 3.5'},
                {label: 'Add API', value: 'Add API'},
              ]}
            />
          </View>
          <TextInput
            placeholder="What's on your mind!"
            onChangeText={text => setText(text)}
            style={
              !!text.trim().length
                ? {...styles.textInput, width: '70%'}
                : {...styles.textInput, width: '85%'}
            }
            multiline={true}
            value={text}
          />
          {!!text.trim().length && (
            <PrimaryButton
              onPressablePress={() => {
                dispatch(responseActions.getUserData(true));
                getResponse(model);
              }}>
              Send
            </PrimaryButton>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputOuterContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputInnerContainer: {
    width: '100%',
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: 'black',
    borderRadius: 6,
    padding: 8,
  },
});
