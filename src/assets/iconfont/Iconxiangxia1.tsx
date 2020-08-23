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

const Iconxiangxia1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M539.141505 796.37471c-1.31028 0.656975-2.459068 1.805763-3.769347 2.297577-23.933706 11.473204-53.438853 7.703857-72.619585-12.625663L24.57967 322.798566C0.645964 297.54724 1.791082 257.714007 27.038738 233.783971c25.240315-23.933706 65.073548-22.788588 89.010925 2.459068l393.256373 415.714638 399.000315-414.077706c24.098867-25.078824 63.92843-25.735799 89.010925-1.636932A62.864057 62.864057 0 0 1 1016.659498 281.486222c0 15.734366-5.901763 31.472401-17.70529 43.602581L556.516473 784.083039c-0.818466 0.818466-2.128746 1.145118-2.947211 2.128746-0.660645 0.660645-1.148789 1.31395-1.805764 2.132416-3.769348 3.769348-8.360832 5.571441-12.621993 8.030509z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiangxia1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconxiangxia1) : Iconxiangxia1;
