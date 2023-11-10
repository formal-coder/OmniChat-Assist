import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function PrimaryButton({children, onPressablePress, disabled}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressablePress}
        android_ripple={{color: '#640233'}}
        disabled={disabled}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

PrimaryButton.defaultProps = {
  onPress: () => console.log('clicked'),
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    alignSelf: 'center',
    borderRadius: 28,
    overflow: 'hidden',
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
