/// <reference types="react" />
import { StyleProp, TextStyle } from 'react-native';
import { FontWeight } from '../../types/ExtraTypes';
type MextProps = {
    text: string;
    color?: string;
    size?: number;
    weight?: FontWeight;
    style?: StyleProp<TextStyle>;
};
declare const Mext: ({ text, color, size, weight, style }: MextProps) => JSX.Element;
export default Mext;
