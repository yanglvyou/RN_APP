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

const Iconxiangxia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M845.82620871 277.43151034q30.05911996-30.05911996 72.46394991-30.05911996t72.46394989 30.05911996q31.13265995 30.05911996 31.13265995 71.92717989t-31.13265995 71.9271799l-401.50395943 399.35687943q-12.88247998 15.02955998-32.20619995 20.93402997t-40.79451996 4.83092999-42.40482993-9.12508998-35.96358995-23.08110997l-395.06271945-392.91563944q-31.13265995-30.05911996-31.13265994-71.9271799t31.13265994-71.92717989q15.02955998-15.02955998 33.81650996-22.54433998t38.64743995-7.51477998 39.18420994 7.51477998 34.35327996 22.54433998l328.50323952 324.20907954z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiangxia.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconxiangxia) : Iconxiangxia;
