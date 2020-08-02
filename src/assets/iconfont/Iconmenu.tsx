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

const Iconmenu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 62C263.48 62 62 263.48 62 512s201.48 450 450 450 450-201.48 450-450S760.52 62 512 62zM238.5 335.3c0-26.52 21.7-48.22 48.22-48.22s48.22 21.7 48.22 48.22-21.7 48.22-48.22 48.22-48.22-21.7-48.22-48.22z m100 351.62c0 27.5-22.5 50-50 50s-50-22.5-50-50 22.5-50 50-50 50 22.5 50 50z m0-179c0 27.5-22.5 50-50 50s-50-22.5-50-50 22.5-50 50-50 50 22.5 50 50z m398.78 220.84H430.62c-26.52 0-48.22-21.7-48.22-48.22s21.7-48.22 48.22-48.22h306.66c26.52 0 48.22 21.7 48.22 48.22s-21.7 48.22-48.22 48.22z m48.22-220.84c0 26.52-21.7 48.22-48.22 48.22H430.62c-26.52 0-48.22-21.7-48.22-48.22s21.7-48.22 48.22-48.22h306.66c26.52 0 48.22 21.7 48.22 48.22z m0-172.62c0 26.52-21.7 48.22-48.22 48.22H430.62c-26.52 0-48.22-21.7-48.22-48.22s21.7-48.22 48.22-48.22h306.66c26.52 0 48.22 21.7 48.22 48.22z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmenu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmenu) : Iconmenu;
