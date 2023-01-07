import {View, Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {FontWeight} from '../../types/ExtraTypes';
type MextProps = {
  text: string;
  color?: string;
  size?: number;
  weight?: FontWeight;
  style?: StyleProp<TextStyle>;
};
type MextStyleProps = {
  color?: string;
  size?: number;
  weight?: FontWeight;
};
const Mext = ({text, color, size, weight, style}: MextProps) => {
  return (
    <Text style={[{...MextStyles({color, size, weight}).TextStyle}, style]}>
      {text}
    </Text>
  );
};
const MextStyles = ({color, size, weight}: MextStyleProps) => {
  return StyleSheet.create({
    TextStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: size ?? 24,
      color: color ?? 'black',
      fontWeight: weight ?? '300',
    },
  });
};
export default Mext;
