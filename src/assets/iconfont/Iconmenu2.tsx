/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconmenu2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M887.466667 290.133333H136.533333c-37.717333 0-68.266667-30.549333-68.266666-68.266666s30.549333-68.266667 68.266666-68.266667h750.933334c37.717333 0 68.266667 30.549333 68.266666 68.266667s-30.549333 68.266667-68.266666 68.266666z"
        fill={getIconColor(color, 0, '#914EB6')}
      />
      <Path
        d="M887.466667 597.333333H136.533333c-37.717333 0-68.266667-30.549333-68.266666-68.266666s30.549333-68.266667 68.266666-68.266667h750.933334c37.717333 0 68.266667 30.549333 68.266666 68.266667s-30.549333 68.266667-68.266666 68.266666z"
        fill={getIconColor(color, 1, '#ED7AB0')}
      />
      <Path
        d="M887.466667 904.533333H136.533333c-37.717333 0-68.266667-30.549333-68.266666-68.266666s30.549333-68.266667 68.266666-68.266667h750.933334c37.717333 0 68.266667 30.549333 68.266666 68.266667s-30.549333 68.266667-68.266666 68.266666z"
        fill={getIconColor(color, 2, '#FEBA00')}
      />
    </Svg>
  );
};

Iconmenu2.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmenu2) : Iconmenu2;
