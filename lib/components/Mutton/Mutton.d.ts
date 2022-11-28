import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
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
declare const Mutton: ({ align, disabled, size, type, text, icon, onClick, style, }: MuttonProps) => JSX.Element;
export default Mutton;
