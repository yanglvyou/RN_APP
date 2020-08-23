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

const IconjiantouXia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1843 1024" width={size} height={size} {...rest}>
      <Path
        d="M1387.32440947 237.12330027a53.6332414 53.6332414 0 0 0-75.80164813 2e-8l-393.31043876 393.31043875-393.31043876-393.31043877A53.6332414 53.6332414 0 0 0 451.96067514 312.92494839l429.06593338 429.0659334a53.6332414 53.6332414 0 0 0 75.80164812 0l429.06593337-429.0659334A53.6332414 53.6332414 0 0 0 1387.32440947 237.12330027z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconjiantouXia.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconjiantouXia) : IconjiantouXia;
