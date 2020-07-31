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

const Iconmimakejian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 768c187.9808 0 442.9568-192.0512 460.6464-244.8384-6.8864-57.9072-246.8352-267.136-460.6464-267.136-203.3664 0-460.8 166.656-460.8256 268.3392C56.5248 574.4384 303.5136 768 512 768m0 51.2c-213.5552 0-512-200.96-512-294.3744C0 376.7808 300.2368 204.8 512 204.8c231.7312 0 512 225.2032 512 320.0256C1024 603.7504 717.6448 819.2 512 819.2z m0 0"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
      <Path
        d="M512 640.0512c70.528 0 128-57.4464 128-128s-57.472-128-128-128c-70.5536 0-128 57.4464-128 128s57.4464 128 128 128m0 51.2512a179.2256 179.2256 0 0 1-179.2256-179.2512A179.2 179.2 0 1 1 691.2 512.0256a179.2256 179.2256 0 0 1-179.2 179.2768z m0 0"
        fill={getIconColor(color, 1, '#CCCCCC')}
      />
    </Svg>
  );
};

Iconmimakejian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmimakejian) : Iconmimakejian;
