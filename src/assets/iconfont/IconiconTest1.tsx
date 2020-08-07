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

const IconiconTest1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M481.3 655.6c1.1 1.5 2.4 2.8 3.9 3.9l8.7 8.7c4.5 4.5 10.7 6.5 16.6 5.9 5.9 0.6 12-1.4 16.6-5.9l113-113c8-8 8-21 0-28.9L625 511.2c-8-8-21-8-28.9 0l-55 55V148.9c0-11.6-9.4-20.9-20.9-20.9h-22.1c-11.6 0-20.9 9.4-20.9 20.9v414.3l-52.1-52.1c-8-8-21-8-28.9 0l-15.1 15.1c-8 8-8 21 0 28.9l100.2 100.5zM596.1 741.8H256c-35.3 0-63.9-28.6-63.9-63.9v-61.8-1.4-1.1c0-9.7-7.9-17.6-17.6-17.6h-28.1c-9.7 0-17.6 7.9-17.6 17.6V679c0 69.7 57.1 126.8 126.8 126.8h388.6c-20-17.9-36.4-39.6-48.1-64zM779.3 501.4c-84.5 0-153.1 68.5-153.1 153.1s68.5 153.1 153.1 153.1 153.1-68.5 153.1-153.1-68.6-153.1-153.1-153.1z m98 115.1L772.1 721.8c-5.9 5.9-15.4 5.9-21.2 0l-45.5-45.5c-5.9-5.9-5.9-15.4 0-21.2 5.9-5.9 15.4-5.9 21.2 0l34.9 34.9 94.6-94.6c5.9-5.9 15.4-5.9 21.2 0 5.9 5.8 5.9 15.3 0 21.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconiconTest1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconiconTest1) : IconiconTest1;
