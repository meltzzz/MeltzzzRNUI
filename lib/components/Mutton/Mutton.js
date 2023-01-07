var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { TouchableOpacity, StyleSheet, } from 'react-native';
import React from 'react';
import { AccentColor, ShadowAccentColor, } from '../../constants/ColorScheme/ColorScheme';
import Mext from '../Mext/Mext';
var Mutton = function (_a) {
    var align = _a.align, disabled = _a.disabled, size = _a.size, text = _a.text, type = _a.type, icon = _a.icon, onClick = _a.onClick, style = _a.style;
    return (<>
      {type == 'text' && text ? (<TouchableOpacity onPress={onClick} disabled={disabled} style={[
                __assign({}, muttonStyles({ align: align, size: size, disabled: disabled }).TextButtonStyle),
                style,
            ]}>
          <Mext weight="600" text={text}/>
        </TouchableOpacity>) : type == 'icon' && icon ? (<TouchableOpacity disabled={disabled} onPress={onClick} style={[
                __assign({}, muttonStyles({ align: align, size: size, disabled: disabled }).IconButtonStyle),
                style,
            ]}>
          {icon}
        </TouchableOpacity>) : null}
    </>);
};
var muttonStyles = function (_a) {
    var align = _a.align, size = _a.size, disabled = _a.disabled;
    var sizeInt;
    var alignStyle;
    switch (size) {
        case 'big':
            sizeInt = { width: '100%', height: 60, padding: 12, borderRadius: 8 };
            break;
        case 'medium':
            sizeInt = { width: '60%', height: 48, padding: 12, borderRadius: 8 };
            break;
        case 'fit':
            sizeInt = { padding: 12, borderRadius: 8 };
            break;
        default:
            sizeInt = { width: '100%', height: 60, padding: 12, borderRadius: 8 };
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
        TextButtonStyle: __assign(__assign({ alignItems: alignStyle, justifyContent: 'center' }, sizeInt), { backgroundColor: disabled ? ShadowAccentColor : AccentColor }),
        IconButtonStyle: {
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
            borderRadius: 8,
            aspectRatio: 1,
            backgroundColor: disabled ? ShadowAccentColor : AccentColor
        }
    });
};
export default Mutton;
//# sourceMappingURL=Mutton.js.map