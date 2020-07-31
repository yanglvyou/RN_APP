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

const Iconmima: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M780.8 437.521c41.13 0 74.479 33.348 74.479 74.479v347.546a74.479 74.479 0 0 1-74.479 74.479H234.667a74.479 74.479 0 0 1-74.48-74.48V512c0-41.13 33.349-74.479 74.48-74.479H780.8m0-74.479H234.667A148.958 148.958 0 0 0 85.709 512v347.546a148.958 148.958 0 0 0 148.958 148.923H780.8a148.958 148.958 0 0 0 148.958-148.923V512A148.958 148.958 0 0 0 780.8 363.042zM507.733 89.975a173.739 173.739 0 0 1 173.739 173.773v99.328H334.029v-99.328A173.739 173.739 0 0 1 507.767 90.01m0-74.48a248.252 248.252 0 0 0-248.251 248.218v173.773h496.503V263.782A248.252 248.252 0 0 0 507.733 15.497z m0 781.961a37.205 37.205 0 0 1-37.205-37.24V611.295a37.205 37.205 0 0 1 74.41 0v148.958a37.205 37.205 0 0 1-37.205 37.205z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmima.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmima) : Iconmima;
