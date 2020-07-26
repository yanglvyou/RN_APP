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

const Iconzongyi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M608.965964 292.013892L15.736184 924.859657c-21.487992 22.923991-20.893992 59.857978 1.326 82.077969 22.219992 22.219992 59.153978 22.813992 82.077969 1.326l632.843765-593.22978-123.017954-123.019954z"
        fill={getIconColor(color, 0, '#463836')}
      />
      <Path
        d="M781.1019 615.457772l-87.867967-87.869968-176.009935 108.68196-108.68196 176.011935 87.867968 87.867967z"
        fill={getIconColor(color, 1, '#FFD24D')}
      />
      <Path
        d="M693.227933 527.583804l-284.679895 284.679895-284.679894-284.679895 284.679894-284.679894z"
        fill={getIconColor(color, 2, '#FEE191')}
      />
      <Path
        d="M968.273831 324.791879c-169.967937 169.967937-248.577908 128.113952-322.875881 53.811981s-116.155957-152.909943 53.811981-322.875881c74.301972-74.299972 194.763928-74.299972 269.0639 0s74.301972 194.761928 0 269.0639z"
        fill={getIconColor(color, 3, '#F14742')}
      />
      <Path
        d="M675.881939 219.143919m-17.853993 0a17.853993 17.853993 0 1 0 35.707987 0 17.853993 17.853993 0 1 0-35.707987 0Z"
        fill={getIconColor(color, 4, '#CD3F39')}
      />
      <Path
        d="M683.355936 284.487894m-17.853993 0a17.853993 17.853993 0 1 0 35.707987 0 17.853993 17.853993 0 1 0-35.707987 0Z"
        fill={getIconColor(color, 5, '#CD3F39')}
      />
    </Svg>
  );
};

Iconzongyi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconzongyi) : Iconzongyi;
