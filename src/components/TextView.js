import {Text, View, StyleSheet} from 'react-native';
import {CustomText} from './styles';

export default function TextView({children, style}) {
  return (
    <View style={{...styles.textInput, ...style}}>
      <CustomText>{children}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '80%',
    margin: 16,
    padding: 16,
    color: 'black',
  },
});
