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

const Iconmenu3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M220.23 168.1c0-18.997 15.435-34.432 34.432-34.432h722.186c18.998 0 34.432 15.435 34.432 34.432s-15.435 34.433-34.432 34.433H254.563c-18.998 0-34.333-15.437-34.333-34.433z m0 687.853c0-18.997 15.435-34.434 34.432-34.434h722.186c18.998 0 34.432 15.437 34.432 34.434s-15.435 34.432-34.432 34.432H254.563c-18.998-0.099-34.333-15.435-34.333-34.432z m0-343.926c0-18.998 15.435-34.433 34.432-34.433h722.186c18.998 0 34.432 15.435 34.432 34.433s-15.435 34.43-34.432 34.43H254.563c-18.998 0-34.333-15.433-34.333-34.43zM65.383 219.749c-28.496 0-51.55-23.153-51.55-51.649 0-28.495 23.054-51.55 51.55-51.55s51.55 23.055 51.55 51.55c0 28.496-23.054 51.649-51.55 51.649z m0 343.827c-28.496 0-51.55-23.053-51.55-51.55s23.054-51.55 51.55-51.55 51.55 23.055 51.55 51.55-23.054 51.55-51.55 51.55z m0 343.927c-28.496 0-51.55-23.053-51.55-51.55 0-28.495 23.054-51.55 51.55-51.55s51.55 23.054 51.55 51.55c0.099 28.496-23.054 51.55-51.55 51.55z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmenu3.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmenu3) : Iconmenu3;
