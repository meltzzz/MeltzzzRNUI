import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontWeight} from '../../types/ExtraTypes';
type MextProps = {
  text: string;
  color?: string;
  size?: number;
  weight?: FontWeight;
};
type MextStyleProps = {
  color?: string;
  size?: number;
  weight?: FontWeight;
};
const Mext = ({text, color, size, weight}: MextProps) => {
  return (
    <Text style={MextStyles({color, size, weight}).TextStyle}>{text}</Text>
  );
};
const MextStyles = ({color, size, weight}: MextStyleProps) => {
  return StyleSheet.create({
    TextStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: size ?? 24,
      color: color ?? 'white',
      fontWeight: weight ?? '300',
    },
  });
};
export default Mext;
