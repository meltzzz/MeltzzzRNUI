/// <reference types="react" />
import { FontWeight } from '../../types/ExtraTypes';
type MextProps = {
    text: string;
    color?: string;
    size?: number;
    weight?: FontWeight;
};
declare const Mext: ({ text, color, size, weight }: MextProps) => JSX.Element;
export default Mext;
