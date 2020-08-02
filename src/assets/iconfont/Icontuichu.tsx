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

const Icontuichu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M526.848 942.592c-247.296 0-447.488-200.192-447.488-447.488 0-190.976 119.808-353.28 287.744-417.792v69.12C235.008 207.36 143.36 340.48 143.36 495.104c0 211.968 171.52 383.488 383.488 383.488 211.968 0 383.488-171.52 383.488-383.488 0-154.624-91.648-287.744-223.744-348.16V77.312c167.936 64.512 287.744 226.816 287.744 417.792 0 247.296-200.192 447.488-447.488 447.488zM495.104 47.616h64v448.512H495.104V47.616z"
        fill={getIconColor(color, 0, '#515151')}
      />
      <Path
        d="M495.104 47.616h64v448.512H495.104V47.616z"
        fill={getIconColor(color, 1, '#5DB1CD')}
      />
    </Svg>
  );
};

Icontuichu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontuichu) : Icontuichu;
