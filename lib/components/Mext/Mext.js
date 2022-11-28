import { Text, StyleSheet } from 'react-native';
import React from 'react';
var Mext = function (_a) {
    var text = _a.text, color = _a.color, size = _a.size, weight = _a.weight;
    return (<Text style={MextStyles({ color: color, size: size, weight: weight }).TextStyle}>{text}</Text>);
};
var MextStyles = function (_a) {
    var color = _a.color, size = _a.size, weight = _a.weight;
    return StyleSheet.create({
        TextStyle: {
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: size !== null && size !== void 0 ? size : 24,
            color: color !== null && color !== void 0 ? color : 'white',
            fontWeight: weight !== null && weight !== void 0 ? weight : '300'
        }
    });
};
export default Mext;
//# sourceMappingURL=Mext.js.map