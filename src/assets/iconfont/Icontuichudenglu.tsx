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

const Icontuichudenglu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M937.0624 511.3856l-238.3872 221.2864-60.1088-64.4608 119.3984-110.7968H420.9152v-92.16h336.9984l-119.296-110.7968 60.0576-64.4096z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M85.3504 882.2784V141.7216A141.824 141.824 0 0 1 227.2768 0h567.808a141.824 141.824 0 0 1 141.9776 141.7216v157.696h-80.128v-157.696c0-34.048-27.7504-61.696-61.8496-61.696H227.328c-34.0992 0-61.7984 27.648-61.7984 61.696v740.5568c0 33.9968 27.6992 61.696 61.7984 61.696h567.808c34.0992 0 61.8496-27.648 61.8496-61.696v-157.696h80.128v157.696A141.824 141.824 0 0 1 795.0848 1024H227.328a141.824 141.824 0 0 1-141.9264-141.7216z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icontuichudenglu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontuichudenglu) : Icontuichudenglu;
