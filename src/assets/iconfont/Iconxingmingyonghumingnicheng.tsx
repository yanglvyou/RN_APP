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

const Iconxingmingyonghumingnicheng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M652.3 562.7C741.6 513.3 802 418.2 802 309c0-160.2-129.8-290-290-290S222 148.8 222 309c0 109.2 60.4 204.3 149.7 253.7C184 622.2 48 797.7 48 1005h58c0-224.2 181.8-406 406-406s406 181.8 406 406h58c0-207.3-136-382.8-323.7-442.3zM280 309c0-128.1 103.9-232 232-232s232 103.9 232 232-103.9 232-232 232-232-103.9-232-232z"
        fill={getIconColor(color, 0, '#1AA1E6')}
      />
    </Svg>
  );
};

Iconxingmingyonghumingnicheng.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconxingmingyonghumingnicheng) : Iconxingmingyonghumingnicheng;
