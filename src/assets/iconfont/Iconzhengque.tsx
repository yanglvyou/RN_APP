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

const Iconzhengque: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.91296 78.3872c221.44512 0.2816 406.68672 168.23808 428.58496 388.59776 21.89312 220.3648-126.6688 421.49376-343.73632 465.34144-217.05728 43.8528-432.05632-83.82976-497.41824-295.40864C33.97632 425.33888 139.48928 198.64064 343.45984 112.41984a430.1568 430.1568 0 0 1 168.45312-34.03264m0-72.59648c-279.13728 0-505.42592 226.31424-505.42592 505.45152 0 279.13728 226.29376 505.42592 505.42592 505.42592s505.4208-226.29376 505.4208-505.42592c0-279.13728-226.28864-505.45152-505.4208-505.45152z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M456.8832 690.74432l-1.09568-0.00512a82.46784 82.46784 0 0 1-59.30496-25.97376l-117.59104-124.24192a42.54208 42.54208 0 0 1 61.78816-58.48064l116.20352 122.77248 278.38976-279.52128a42.53696 42.53696 0 1 1 60.27776 60.032l-279.81824 280.95488a82.41664 82.41664 0 0 1-58.84928 24.46336z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconzhengque.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconzhengque) : Iconzhengque;
