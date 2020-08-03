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

const Iconzuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 960c-19.2 0-32-6.4-44.8-19.2l-384-384C262.4 544 256 531.2 256 512s6.4-32 19.2-44.8l384-384c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6L409.6 512l339.2 339.2c25.6 25.6 25.6 64 0 89.6-12.8 12.8-25.6 19.2-44.8 19.2z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

Iconzuo.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconzuo) : Iconzuo;
