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
import { Text, StyleSheet } from 'react-native';
import React from 'react';
var Mext = function (_a) {
    var text = _a.text, color = _a.color, size = _a.size, weight = _a.weight, style = _a.style;
    return (<Text style={[__assign({}, MextStyles({ color: color, size: size, weight: weight }).TextStyle), style]}>
      {text}
    </Text>);
};
var MextStyles = function (_a) {
    var color = _a.color, size = _a.size, weight = _a.weight;
    return StyleSheet.create({
        TextStyle: {
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: size !== null && size !== void 0 ? size : 24,
            color: color !== null && color !== void 0 ? color : 'black',
            fontWeight: weight !== null && weight !== void 0 ? weight : '300'
        }
    });
};
export default Mext;
//# sourceMappingURL=Mext.js.map