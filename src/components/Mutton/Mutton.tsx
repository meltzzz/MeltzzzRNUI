import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlexAlignType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {
  AccentColor,
  ShadowAccentColor,
} from '../../constants/ColorScheme/ColorScheme';
import Mext from '../Mext/Mext';
interface MuttonProps {
  disabled?: boolean;
  align?: 'center' | 'right' | 'left';
  size?: 'big' | 'medium' | 'fit';
  type?: 'text' | 'withIcon' | 'icon';
  icon?: React.ReactNode;
  text?: string;
  onClick: (e: GestureResponderEvent) => void | undefined;
  style?: StyleProp<ViewStyle>;
}
interface MuttonStyleProps {
  align?: 'center' | 'right' | 'left';
  size?: 'big' | 'medium' | 'fit';
  type?: 'text' | 'icon';
  disabled?: boolean;
}
const Mutton = ({
  align,
  disabled,
  size,
  text,
  type,
  icon,
  onClick,
  style,
}: MuttonProps) => {
  return (
    <>
      {type == 'text' && text ? (
        <TouchableOpacity
          onPress={onClick}
          disabled={disabled}
          style={[
            {...muttonStyles({align, size, disabled}).TextButtonStyle},
            style,
          ]}>
          <Mext weight="600" text={text} />
        </TouchableOpacity>
      ) : type == 'icon' && icon ? (
        <TouchableOpacity
          disabled={disabled}
          onPress={onClick}
          style={[
            {...muttonStyles({align, size, disabled}).IconButtonStyle},
            style,
          ]}>
          {icon}
        </TouchableOpacity>
      ) : null}
    </>
  );
};

const muttonStyles = ({align, size, disabled}: MuttonStyleProps) => {
  let sizeInt: object;
  let alignStyle: FlexAlignType;
  switch (size) {
    case 'big':
      sizeInt = {width: '100%', height: 60, padding: 12, borderRadius: 8};
      break;
    case 'medium':
      sizeInt = {width: '60%', height: 48, padding: 12, borderRadius: 8};
      break;
    case 'fit':
      sizeInt = {padding: 12, borderRadius: 8};
      break;
    default:
      sizeInt = {width: '100%', height: 60, padding: 12, borderRadius: 8};
  }
  switch (align) {
    case 'center':
      alignStyle = 'center';
      break;
    case 'left':
      alignStyle = 'flex-start';
      break;
    case 'right':
      alignStyle = 'flex-end';
      break;
    default:
      alignStyle = 'center';
  }
  return StyleSheet.create({
    TextButtonStyle: {
      alignItems: alignStyle,
      justifyContent: 'center',
      ...sizeInt,
      backgroundColor: disabled ? ShadowAccentColor : AccentColor,
    },
    IconButtonStyle: {
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      borderRadius: 8,
      aspectRatio: 1,
      backgroundColor: disabled ? ShadowAccentColor : AccentColor,
    },
  });
};

export default Mutton;
