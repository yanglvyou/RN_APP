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

const Iconeen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M566.068941 777.924535L566.068941 777.924535c-14.174837 14.05204101-33.873482 22.269189-54.00498499 22.269189l0 0c-20.26248599 0-39.896662-8.216125-54.13596801-22.269189l-369.966123-370.09506 0 0c-29.865191-29.858028-29.865191-78.347392 0-108.204397l0 0c29.913287-29.79356 78.218456-29.79356 108.075461 0L512.063957 615.46342 827.836807 299.625078l0 0c29.984918-29.797653 78.285994-29.797653 108.204397 0.127913l0 0c29.863145 29.730115 29.863145 78.219479 0 108.076484L566.068941 777.924535 566.068941 777.924535zM566.068941 777.924535"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconeen.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconeen) : Iconeen;
