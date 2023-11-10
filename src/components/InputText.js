import {useState} from 'react';
import {CustomTextInput} from './styles';

// not in use

export default function InputText() {
  const [text, setText] = useState();
  return (
    <CustomTextInput
      placeholder="What's on your mind"
      onChangeText={text => setText(text)}
      value={text}
      returnKeyLabel="Go"
    />
  );
}
