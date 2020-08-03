import React, {useMemo} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Touchable= React.memo(
  ({style, ...rest}) => {
    const touableStyle = rest.disabled ? [style, styles.disabled] : style;
    return (
      <TouchableOpacity
        style={touableStyle}
        activeOpacity={0.8}
        {...rest}></TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
});

export default Touchable;
