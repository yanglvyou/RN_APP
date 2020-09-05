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

const Iconsaoma: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M124 385.1h-64V199.8c0-74.2 59.4-134.6 132.4-134.6h187.6v64H192.3c-37.7 0-68.4 31.7-68.4 70.6v185.3zM955.9 385.1h-64V199.8c0-38.9-30.7-70.6-68.4-70.6H635.9v-64h187.6c73 0 132.4 60.4 132.4 134.6v185.3zM380 961.2H192.3c-73 0-132.4-60.4-132.4-134.6V641.4h64v185.3c0 38.9 30.7 70.6 68.4 70.6h187.6v63.9zM823.5 961.2H635.9v-64h187.6c37.7 0 68.4-31.7 68.4-70.6V641.4h64v185.3c0 74.1-59.4 134.5-132.4 134.5zM992 546.4h-960c-17.7 0-32-14.3-32-32s14.3-32 32-32h960c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
        fill={getIconColor(color, 0, '#838383')}
      />
    </Svg>
  );
};

Iconsaoma.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsaoma) : Iconsaoma;
