import React from 'react';
import {TouchableOpacity, Text, View, ViewStyle, TextStyle} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle; // Add this line
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
